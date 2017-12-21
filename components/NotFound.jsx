import React, { Component } from "react";
import "../css/404";

class NotFound extends Component {
  render() {
    return (
      <div className="nb-error">
        <div className="error-code">404</div>
        <h3 className="font-bold">We couldn't find the page...</h3>
      </div>
    );
  }
}

export default NotFound;
