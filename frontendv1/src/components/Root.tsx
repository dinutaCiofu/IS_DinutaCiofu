import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const Root = (): JSX.Element => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default Root;
