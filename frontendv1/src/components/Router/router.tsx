import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import HomePage from "../../Pages/HomePage";
import LoginForm from "../../Pages/Login/LoginForm";

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
];
export const router = createBrowserRouter(routes);
