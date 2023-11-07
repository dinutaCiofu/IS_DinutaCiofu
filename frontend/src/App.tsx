import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import { Component } from "./components/Component";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function App() {
  return (
    <div>
      <Checkbox {...label} />
      <Component id={2} name="Checkbox" />
    </div>
  );
}

export default App;
