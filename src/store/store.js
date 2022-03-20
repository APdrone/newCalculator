import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    userActions: userReducer,
    dataActions: dataReducer,
  },
});

export default store;
