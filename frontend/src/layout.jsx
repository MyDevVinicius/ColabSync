import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { CgLaptop } from "react-icons/cg";
import { IoStatsChart } from 'react-icons/io5';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiTwotoneSetting } from 'react-icons/ai';
import { TbDeviceHeartMonitorFilled } from 'react-icons/tb';
import { FiLogOut } from "react-icons/fi";

const menuItems = [
  { to: "/home", label: "Home", icon: <HiOutlineHome /> },
  { to: "/locacoes", label: "Locações", icon: <CgLaptop /> },
  {
    label: "Cadastro",
    icon: <BsDatabaseFillAdd />,
    submenu: [
      { to: "/cadastro/ativos", label: "Ativos" },
      { to: "/cadastro/colaboradores", label: "Colaboradores" },
    ],
  },
  { to: "/relatorio", label: "Relatórios", icon: <IoStatsChart /> },
  { to: "/monitoramento", label: "Monitor", icon: <TbDeviceHeartMonitorFilled /> },
  {
    label: "Configurações",
    icon: <AiTwotoneSetting />,
    submenu: [
      { to: "/cadastro/empresa", label: "Empresa" },
      { to: "/cadastro/usuarios", label: "Usuários" },
    ],
  },
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    // lógica de logout aqui (ex: limpar token, redirecionar)
    navigate("/login");
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-white shadow-md p-4 flex flex-col justify-between ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <div>
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
                    onClick={() => toggleSubmenu(item.label)}
                    className={`w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-200 transition text-slate-700 font-medium ${
                      !sidebarOpen && "justify-center"
                    }`}
                  >
                    {item.icon}
                    {sidebarOpen && item.label}
                  </button>
                  {openSubmenu[item.label] && sidebarOpen && (
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

        {/* Botão de Sair */}
        <button
          onClick={handleLogout}
          className={`flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-200 transition text-red-500 font-medium ${
            !sidebarOpen && "justify-center"
          }`}
        >
          <FiLogOut />
          {sidebarOpen && "Sair"}
        </button>
      </div>

      {/* Conteúdo */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
