import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faChevronLeft,
  faTrashAlt,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import "./index.css";
import App from "./App/App";
import { NotefulProvider } from "./ApiContext";

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble);

ReactDOM.render(
  <BrowserRouter>
    <NotefulProvider>
      <App />
    </NotefulProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
