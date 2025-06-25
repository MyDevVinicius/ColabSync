import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { CgLaptop } from "react-icons/cg";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiFunctionAddLine } from "react-icons/ri";

const Sidebar = () => {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  return (
    <div className="h-full w-[10rem] pl-1 pr-1 bg-slate-50 rounded-2xl shadow-md pt-5">
      <h2 className="text-xl font-bold mb-4 text-center">ColabSync</h2>
      <nav className="flex flex-col gap-2">
        <Link
          to="/home"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold text-slate-600"
        >
          <HiOutlineHome />
          Home
        </Link>

        <Link
          to="/locacoes"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold text-slate-600"
        >
          <CgLaptop />
          Locações
        </Link>

        {/* Botão Cadastro com submenu */}
        <div>
          <button
            onClick={() => setIsCadastroOpen(!isCadastroOpen)}
            className="w-full px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold text-slate-600 focus:outline-none"
          >
            <RiFunctionAddLine />
            Cadastro
            <span className="ml-auto">{isCadastroOpen ? "▲" : "▼"}</span>
          </button>

          {/* Submenu */}
          {isCadastroOpen && (
            <div className="flex flex-col pl-6 mt-1 gap-1">
              <Link
                to="/cadastro/empresa"
                className="px-4 py-1 rounded hover:bg-slate-300 transition font-semibold text-slate-700"
              >
                Empresa
              </Link>
              <Link
                to="/cadastro/ativos"
                className="px-4 py-1 rounded hover:bg-slate-300 transition font-semibold text-slate-700"
              >
                Ativos
              </Link>
              <Link
                to="/cadastro/usuarios"
                className="px-4 py-1 rounded hover:bg-slate-300 transition font-semibold text-slate-700"
              >
                Usuários
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/relatorio"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold text-slate-600"
        >
          <IoStatsChartOutline />
          Relatorios
        </Link>

        <Link
          to="/monitoramento"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold text-slate-600"
        >
          Monitoramento
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
