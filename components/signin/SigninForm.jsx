import React, { Component } from "react";
import { Link } from "react-router-dom";

class SigninForm extends Component {
  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
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
          Sign in
        </button>
        <Link
          to="/sign-up"
          className="btn btn-lg btn-secondary btn-block"
          role="button"
        >
          Sign up
        </Link>
      </form>
    );
  }
}

export default SigninForm;
