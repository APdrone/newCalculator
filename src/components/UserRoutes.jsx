import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Calculator from "./Calculator";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const UserRoutes = () => {
  const loggedInState = useSelector((state) => state.userActions.isLogin);
  return (
    <Switch>
      <Route path={"/login"} component={LoginForm} />
      <Route path={"/signup"} component={SignupForm} />

      {loggedInState && <Route path={"/home"} component={Calculator} />}
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
