export default function Home() {
  return (
    <>
      <h2 className="mb-5 text-3xl font-semibold text-white">Seja bem-vindo ao Library Guru!</h2>

      <div
        className="rounded-lg bg-white p-4 dark:bg-blue-800 md:p-8"
        id="stats"
        role="tabpanel"
        aria-labelledby="stats-tab">
        <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-4 text-blue-900 dark:text-white sm:grid-cols-3 sm:p-8 xl:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">5</dt>
            <dd className="text-blue-500 dark:text-blue-400">Livros</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">15</dt>
            <dd className="text-blue-500 dark:text-blue-400">Usuários</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">340</dt>
            <dd className="text-blue-500 dark:text-blue-400">Acessos</dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 block rounded-lg border border-gray-200 bg-white p-6 shadow ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Dados em dimensáo </h5>
        <p className="font-normal text-gray-700 ">
          <img src="public\img\grafico-01.png" />
        </p>
      </div>
    </>
  );
}
