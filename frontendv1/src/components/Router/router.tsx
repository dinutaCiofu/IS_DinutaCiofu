import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
];
export const router = createBrowserRouter(routes);
