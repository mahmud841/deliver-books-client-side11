import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { googleSignIn } from "./LoginMethods";

const Signin = () => {
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  //initializeFirebaseApp();

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      setUser(res);
      history.replace(from);
    });
  };

  return (
    <div className="m-4">
      {" "}
      <div className="m-auto border p-4" style={{ maxWidth: 500 }}>
        <form className="row g-3">
          <fieldset disabled>
            <legend style={{ fontSize: 12 }}>
              Login in with email and password feature is temporarily disabled.
              Please continue with google
            </legend>
            <div className="col-12">
              <label htmlFor="inputName" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputName" />
            </div>
            <div className="col-12">
              <label htmlFor="inputSigninEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputSigninEmail"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputSigninPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputSigninPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputConfirmPassword4" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword4"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Create an account
              </button>
            </div>
          </fieldset>
        </form>
        <div className="text-center mt-4">
          Already have an account?{" "}
          <span>
            <Link to="login">Log In</Link>
          </span>
        </div>
      </div>
      <div className="text-center">or</div>
      <div className="m-auto mt-3 mb-5" style={{ maxWidth: 450 }}>
        <button
          className="btn btn-outline-primary"
          style={{
            width: "100%",
            border: "1px solid",
            padding: 5,
            borderRadius: 999,
            margin: "auto",
          }}
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://img-authors.flaticon.com/google.jpg"
            alt=""
            className="mx-3"
            style={{
              maxWidth: 30,
              borderRadius: "50%",
            }}
          />
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Signin;
