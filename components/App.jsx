import React, { Component } from "react";
import ReactDom from "react-dom";
import { Switch, Route } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import SigninPage from "./signin/SigninPage";
import SignupPage from "./signup/SignupPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SigninPage} />
      <Route path="/sign-in" component={SigninPage} />
      <Route path="/sign-up" component={SignupPage} />
      {/*Route path="/schedule" component={App} /> */}
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="header container-fluid">
          {/* <NavigationBar /> */}
          {/* <Main /> */}
        </div>
      </div>
    );
  }
}

export default App;
