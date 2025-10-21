import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ForgotPassword from "./routes/auth/ForgotPassword";
import BookList from "./routes/books/BookList";
import BookForm from "./routes/books/BookForm";
import UserList from "./routes/users/UserList";
import UserForm from "./routes/users/UserForm";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./routes/auth/Login";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/book-create",
        element: <BookForm />,
      },
      {
        path: "/book-edit/:id",
        element: <BookForm />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user-create",
        element: <UserForm />,
      },
      {
        path: "/user-edit/:id",
        element: <UserForm />,
      },
    ],
  },
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
