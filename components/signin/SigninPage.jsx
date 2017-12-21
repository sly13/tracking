import React, { Component } from "react";
import SigninForm from "./SigninForm";
import Header from "../Header";

class SigninPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SigninForm />
        </div>
      </div>
    );
  }
}

export default SigninPage;
