import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-slate-200 rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">ColabSync</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full px-4 py-2 rounded-md bg-slate-100 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              className="w-full px-4 py-2 rounded-md bg-slate-100 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 cursor-pointer text-slate-500 hover:text-slate-700"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
