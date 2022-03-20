import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userTotal: "",
};

const dataSlice = createSlice({
  name: "dataActions",
  initialState,
  reducers: {
    storeTotal: (state, action) => {
      state.userTotal = action.payload;
    },
  },
});

export const { storeTotal } = dataSlice.actions;

export default dataSlice.reducer;
