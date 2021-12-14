// example of using a slice with redux toolkit

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "redux/apis/auth";

interface AuthSlice {
  loggedIn: boolean;
}

export const loginRequest = createAsyncThunk(
  'auth/asyncLogin',
  async () => {
    try {
      const response = await loginAPI();
      return response as any;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const signupRequest = createAsyncThunk(
  'auth/asyncSignup',
  async () => {
    try {
      const response = await signupAPI();
      return response as any;
    } catch (err) {
      throw new Error(err);
    }
  }
);

const initialState: AuthSlice = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
  extraReducers: {
    [loginRequest.fulfilled.type]: (state) => {
      state.loggedIn = true;
    },
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
