import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../../Pages/HomePage";
import LoginForm from "../../Pages/Login/LoginForm";
import AdminPage from "../../Pages/AdminUtils/AdminPage";
import Home from "../../Pages/ClientUtils/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/Login",
    element: <LoginForm />,
  },
  {
    path: "/Admin/:userId", // am definit un route parameter "userId"
    element: <AdminPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
];
export const router = createBrowserRouter(routes);
