import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/router";

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
export default App;
