import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <div>
        <h4 className="text-4xl font-extrabold">Recuperar a senha.</h4>

        <form
          onSubmit={() => {
            return false;
          }}
          method="post"
          className="items-left flex flex-col">
          <div className="mb-5 mt-5">
            <label htmlFor="email" className="text-black-900 mb-2 block text-sm font-medium ">
              Seu email
            </label>
            <input
              type="email"
              id="email"
              className="text-black-900 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <p className="mb-4">
            Verifique sua caixa de entrada. Enviamos um e-mail contendo um link seguro para redefinir sua senha. Se não
            encontrar o e-mail em sua caixa de entrada, verifique sua pasta de spam.
          </p>

          <NavLink
            to="/"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto">
            Enviar
          </NavLink>

          <NavLink
            to="/"
            className="mt-5 w-full rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto">
            Voltar
          </NavLink>
        </form>
      </div>
    </>
  );
}
