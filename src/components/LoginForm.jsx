import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, setError, changeScreen } from "../store/UserSlice";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const userScreen = useSelector((state) => state.userActions.screen);
  const IsError = useSelector((state) => state.userActions.isLoginError);
  const LoggedIn = useSelector((state) => state.userActions.isLogin);

  const history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    if (!user || !pass) {
      dispatch(setError("login"));
    } else {
      dispatch(userLogin({ user, pass }));
    }
    setUser("");
    setPass("");
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

        <button type="submit" className="btn btn-signup">
          Login
        </button>
        <div className="error-body">
          {IsError && (
            <span className="error">
              Please verify your username and password
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
