// example of using a slice with redux toolkit

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
    },
    logout: (state, action) => {
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
