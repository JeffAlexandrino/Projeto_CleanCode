import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <main className="container mx-auto content-center">
        <h2 className="mb-16 text-center text-4xl font-extrabold dark:text-white">LibraryGuru</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow md:max-w-xl md:flex-row">
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/img/pexels-pixabay-159711.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
