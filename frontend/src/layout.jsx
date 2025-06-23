import { Children } from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row gap-3  ">
        <div className="basis-1/6.8  h-[98vh] rounded-2xl flex justify-center ml-3 mt-2 ">
          <Sidebar />
        </div>
        <div className="basis-2/2 bg-slate-100 rounded-2xl flex p-4 mr-3 mt-2 shadow-md">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
