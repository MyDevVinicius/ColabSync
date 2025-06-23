import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { CgLaptop } from "react-icons/cg";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiFunctionAddLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="h-full w-[10rem] pl-1 pr-1 bg-slate-50 rounded-2xl shadow-md pt-5 ">
      <h2 className="text-xl font-bold mb-4 text-center">ColabSync</h2>
      <nav className="flex flex-col gap-2 ">
        <Link
          to="/home"
          className="px-4 py-2 rounded hover:shadow-md   hover:bg-slate-200 transition flex items-center gap-1 font-bold  text-slate-600"
        >
          <HiOutlineHome />
          Home
        </Link>
        <Link
          to="/locacoes"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold  text-slate-600"
        >
          <CgLaptop />
          Locações
        </Link>
        <Link
          to="/cadastro"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold  text-slate-600"
        >
          <RiFunctionAddLine />
          Cadastro
        </Link>
        <Link
          to="/relatorio"
          className="px-4 py-2 rounded hover:shadow-md hover:bg-slate-200 transition flex items-center gap-1 font-bold  text-slate-600"
        >
          <IoStatsChartOutline />
          Relatorios
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
