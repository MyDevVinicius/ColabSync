import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { CgLaptop } from "react-icons/cg";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiFunctionAddLine } from "react-icons/ri";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const menuItems = [
  { to: "/home", label: "Home", icon: <HiOutlineHome /> },
  { to: "/locacoes", label: "Locações", icon: <CgLaptop /> },
  {
    label: "Cadastro",
    icon: <RiFunctionAddLine />,
    submenu: [
      { to: "/cadastro/empresa", label: "Empresa" },
      { to: "/cadastro/ativos", label: "Ativos" },
      { to: "/cadastro/usuarios", label: "Usuários" },
    ],
  },
  { to: "/relatorio", label: "Relatórios", icon: <IoStatsChartOutline /> },
  { to: "/monitoramento", label: "Monitor", icon: <TbDeviceHeartMonitor /> },
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-white shadow-md p-4 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-slate-800">ColabSync</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="text-slate-500 hover:text-slate-800"
          >
            {sidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item, idx) =>
            item.submenu ? (
              <div key={idx}>
                <button
                  onClick={() => setOpenSubmenu(!openSubmenu)}
                  className={`w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-200 transition text-slate-700 font-medium ${
                    !sidebarOpen && "justify-center"
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && item.label}
                </button>
                {openSubmenu && sidebarOpen && (
                  <div className="pl-8 mt-1 flex flex-col gap-1">
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        to={sub.to}
                        key={subIdx}
                        className={`text-sm py-1 px-2 rounded-md hover:bg-slate-300 transition ${
                          location.pathname === sub.to
                            ? "bg-slate-200 font-semibold"
                            : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.to}
                className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-200 transition text-slate-700 font-medium ${
                  !sidebarOpen && "justify-center"
                } ${
                  location.pathname === item.to
                    ? "bg-slate-200 font-semibold"
                    : ""
                }`}
              >
                {item.icon}
                {sidebarOpen && item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Conteúdo */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
