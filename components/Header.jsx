import React, { Component } from "react";
import ReactDom from "react-dom";

import NavigationBar from "./NavigationBar";

class Header extends Component {
  render() {
    return (
      <div className="header container-fluid">
        <NavigationBar />
      </div>
    );
  }
}

export default Header;
