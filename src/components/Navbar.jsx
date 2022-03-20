import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeScreen, userLogout } from "../store/UserSlice";

const Navbar = () => {
  const userScreen = useSelector((state) => state.userActions.screen);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(changeScreen("Login"));
  };

  return (
    <div className="nav-container">
      <div>
        <h1>Calculator App</h1>
      </div>
      <div className="nav-items">
        <ul>
          {userScreen === "Login" && (
            <NavLink
              to="/signup"
              className="nav-links"
              onClick={() => dispatch(changeScreen("Sign up"))}
            >
              SignUp
            </NavLink>
          )}
          {userScreen === "Sign up" && (
            <NavLink
              to="/login"
              className="nav-links"
              onClick={() => dispatch(changeScreen("Login"))}
            >
              Login
            </NavLink>
          )}
          {userScreen === "home" && (
            <NavLink to="/login" className="nav-links" onClick={handleLogout}>
              Log out
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
