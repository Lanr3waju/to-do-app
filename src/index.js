import React from "react";
import ReactDOM from "react-dom";
import ToDoContainer from "./components/ToDoContainer";
import './App.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    {" "}
    <BrowserRouter>
    <ToDoContainer />{" "}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
