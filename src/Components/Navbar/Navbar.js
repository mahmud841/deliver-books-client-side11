import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../logo/logo.png";
import { logOut } from "../Login/LoginMethods";
const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = () => {
    logOut();
    setUser({});
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt=""
              className=""
              style={{ maxHeight: 65, maxWidth: 200 }}
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/orders">
                <p> Orders</p>
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link fw-bold text-dark" to="">
                Deals
              </p>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold text-dark" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              {user.name || user.email ? (
                <button className="btn btn-warning" onClick={handleLogOut}>
                  Logout
                </button>
              ) : (
                <Link className="nav-link" to="/login">
                  <button className="btn btn-primary"> Login</button>
                </Link>
              )}
            </li>
            {(user.name || user.email) && (
              <li className="nav-link fw-bold text-dark">
                <img
                  src={user?.photo}
                  alt=""
                  style={{ height: 30, width: 30, borderRadius: "50%" }}
                  className="mx-2"
                />
                {user?.name || user?.email}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
