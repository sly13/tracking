import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupForm extends Component {
  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign up</h2>
        <label htmlFor="inputName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="First Name"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputLastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          placeholder="Last Name"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign up
        </button>
        <Link
          to="/sign-in"
          className="btn btn-lg btn-secondary btn-block"
          role="button"
        >
          Sign in
        </Link>
      </form>
    );
  }
}

export default SignupForm;
