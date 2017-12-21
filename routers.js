import React from "react";
import { Route, Switch } from "react-router-dom";

import SigninPage from "./components/signin/SigninPage";
import SignupPage from "./components/signup/SignupPage";
import NotFound from "./components/NotFound";

export default (
  <Switch>
    <Route exact path="/" component={SigninPage} />
    <Route path="/sign-up" component={SignupPage} />
    <Route component={NotFound} />
  </Switch>
);
