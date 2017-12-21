import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img
              src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
