import React, { Component } from "react";
import SignupForm from "./SignupForm";
import Header from "../Header";

class SignupPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default SignupPage;
