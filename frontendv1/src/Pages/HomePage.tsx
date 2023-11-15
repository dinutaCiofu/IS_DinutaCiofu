import React from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/Login">Let's get started</Link>.
      </p>
    </>
  );
};
export default HomePage;
