import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signin from "./Components/Login/Signin";
import CheckOut from "./Components/CheckOut.js/CheckOut";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Orders from "./Components/Orders/Orders";
import OrderTracking from "./Components/Orders/OrderTracking";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import EditProduct from "./Components/AdminPanel/EditProduct";

export const UserContext = createContext();
const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const { displayName, email, photoURL } = user;
        let userDetails = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(userDetails);
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <PrivateRoute path="/check-out">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminPanel />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/order-tracking">
              <OrderTracking />
            </PrivateRoute>
            <PrivateRoute path="/edit-product">
              <EditProduct />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
