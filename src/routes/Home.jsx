export default function Home() {

  return (
    <>

        <h2 className="mb-5 text-3xl font-semibold text-white">Seja bem-vindo ao Library Guru!</h2>

        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-blue-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-blue-900 sm:grid-cols-3 xl:grid-cols-3 dark:text-white sm:p-8">
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

        <div className="block p-6 bg-white border border-gray-200 mt-5 rounded-lg shadow ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Dados em dimensáo </h5>
            <p className="font-normal text-gray-700 ">
                <img src="public\img\grafico-01.png" />
            </p>
        </div>

    </>
  );
}
