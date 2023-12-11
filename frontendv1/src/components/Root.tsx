import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const Root = (): JSX.Element => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Root;
