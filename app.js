import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserHistory } from "react-router-dom";

import "./css/style";
import routes from "./routers";

ReactDOM.render(
  <BrowserRouter history={BrowserHistory}>{routes}</BrowserRouter>,
  document.getElementById("app")
);
