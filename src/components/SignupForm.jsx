import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setError, addUser, changeScreen } from "../store/UserSlice";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const userScreen = useSelector((state) => state.userActions.screen);
  const IsError = useSelector((state) => state.userActions.isSignupError);
  const LoggedIn = useSelector((state) => state.userActions.isLogin);

  const history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    if (!user || !pass || !confirmPass || confirmPass !== pass) {
      dispatch(setError("sign up"));
    } else {
      dispatch(addUser({ user, pass }));
    }

    setUser("");
    setPass("");
    setConfirmPass("");
  };

  useEffect(() => {
    if (LoggedIn) {
      history.push("/home");
      dispatch(changeScreen("home"));
    }
  }, [LoggedIn, dispatch, history]);

  return (
    <div className="form-container">
      <h1 className="heading">{`${userScreen} `}</h1>
      <form onSubmit={handleInput} className="user-form">
        <div className="user-input">
          <label htmlFor="email">User</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="user-input">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="user-input">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-signup">
          Sign Up
        </button>
        <div className="error-body">
          {IsError && (
            <span className="error">
              Please verify the inputs or user is already taken
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
