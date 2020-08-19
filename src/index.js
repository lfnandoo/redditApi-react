import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/Content";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
