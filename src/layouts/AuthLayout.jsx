import { Outlet } from "react-router-dom";

export default function AuthLayout() {

  return (
    <>
        <main className="container mx-auto content-center">
            <h2 className="text-4xl font-extrabold dark:text-white text-center mb-16">LibraryGuru</h2>
            <div className="flex justify-center">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/pexels-pixabay-159711.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                <Outlet />
                </div>
            </div>
            </div>
        </main>
    </>
  );
}
