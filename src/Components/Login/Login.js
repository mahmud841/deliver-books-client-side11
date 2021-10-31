import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../Footer/Footer";
import { googleSignIn } from "./LoginMethods";

const Login = () => {
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

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
        <form className="row g-2">
          <fieldset disabled>
            <legend style={{ fontSize: 12 }}>
            At present google Sign in available
            </legend>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder=" disabled now"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="disabled now"
              />
            </div>

            <div className="col-12 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Remember next
                </label>
              </div>
              <div className="text-primary"> Forgot Password??</div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success w-100">
                Log in
              </button>
            </div>
          </fieldset>
        </form>
        <div className="text-center mt-4">
          Don't have an account?
          <span>
            <Link to="/signin"> Create an account</Link>
          </span>
        </div>
      </div>
      <div className="text-center">or</div>
      <div className="m-auto mt-3" style={{ maxWidth: 455 }}>
        <button
          className="btn btn-outline-success"
          style={{
            width: "100%",
            border: "2px solid",
            padding: 7,
            borderRadius: 888,
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
              borderRadius: "60%",
            }}
          />
          Sign In with google
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
