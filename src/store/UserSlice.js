import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userDetails: [
    { user: "user1", pass: "pass1234" },
    { user: "user2", pass: "pass1234" },
    { user: "user3", pass: "pass1234" },
  ],
  screen: "Login",
  isLoginError: false,
  isSignupError: false,
};

const dataSlice = createSlice({
  name: "userActions",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      const existingUser = state.userDetails.find(
        (res) =>
          res.user === action.payload.user && res.pass === action.payload.pass
      );
      if (existingUser) {
        state.isLogin = true;
        state.isLoginError = false;
      } else {
        state.isLoginError = true;
      }
    },
    userLogout: (state) => {
      state.isLogin = false;
    },
    addUser: (state, action) => {
      const existingUser = state.userDetails.find(
        (res) => res.user === action.payload.user
      );
      if (existingUser) {
        state.isSignupError = true;
      } else {
        state.userDetails.push(action.payload);
        state.isSignupError = false;
        state.isLogin = true;
      }
    },
    changeScreen: (state, action) => {
      state.screen = action.payload;
    },
    setError: (state, action) => {
      if (action.payload === "login") {
        state.isLoginError = true;
      } else {
        state.isSignupError = true;
      }
    },
  },
});

export const { userLogin, userLogout, addUser, changeScreen, setError } =
  dataSlice.actions;

export default dataSlice.reducer;
