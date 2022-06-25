import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../../firebase";
// import { authenticating, setAuthenticating } from "firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  // const[(authenticating, setAuthenticating)] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <h5>Password:</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign-in
            {/* {authenticating ? "Signing In" : "Signin"} */}
          </button>
        </form>
        <p>
          By Signing-in you agree to the Conditions of
          <strong> AMAZON FAKE CLONE </strong>
          Conditions of Use & Sale. Please see our Privacy Notice, Our Cookies
          Notice and Our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
