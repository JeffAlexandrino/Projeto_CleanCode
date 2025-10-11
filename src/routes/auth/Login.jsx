
import { NavLink } from "react-router-dom";

export default function Login() {

  return (
    <div>
      <p>Seja bem-vindo(a) novamente. Faça login para acessar a sua conta.</p>

      <form onSubmit={() => {return false;}} method="post" className="flex flex-col items-left">
        <div className="mb-5 mt-10">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-black-900 ">
            Seu email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="seuemail@email.com"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-black-900 ">
            Sua senha
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
              required
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">
            Lembrar de mim
          </label>
        </div>

        <NavLink
          to="/home"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto">
          Entrar
        </NavLink>

        <NavLink
          to="/forgot-password"
          className="w-full rounded-lg bg-gray-700 mt-5 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
          Esqueci a senha <span className="material-symbols-outlined"></span>
        </NavLink>
      </form>
    </div>
  );
}
