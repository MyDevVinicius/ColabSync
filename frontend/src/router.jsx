import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Locacoes from "./pages/Locacoes";
import Relatorios from "./pages/Relatorios";
import Monitoramento from "./pages/Monitoramento";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/locacoes",
    element: <Locacoes />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/relatorio",
    element: <Relatorios />,
  },
  {
    path: "/monitoramento",
    element: <Monitoramento />,
  },
]);
export default router;
