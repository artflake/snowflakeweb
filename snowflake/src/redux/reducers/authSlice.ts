// example of using a slice with redux toolkit

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginAPI,
  signupAPI,
  forgotPasswordAPI,
  resetPasswordAPI,
  getUserAPI,
  updateUserAPI,
  activateAccountAPI,
} from "redux/apis/auth";

interface IUser {
  username: string;
  name: string;
  last_name: string;
  email: string;
  country: string;
  tz: string;
}

interface AuthSlice {
  loggedIn: boolean;
  user: IUser;
}

export const loginRequest = createAsyncThunk(
  "auth/asyncLogin",
  async (obj: object) => {
    try {
      const response = await loginAPI(obj);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const signupRequest = createAsyncThunk(
  "auth/asyncSignup",
  async (obj: object) => {
    try {
      const response = await signupAPI(obj);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.errors[0].error);
    }
  }
);

export const forgotPasswordRequest = createAsyncThunk(
  "auth/asyncForgotPassword",
  async (obj: object) => {
    try {
      const response = await forgotPasswordAPI(obj);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const resetPasswordRequest = createAsyncThunk(
  "auth/asyncResetPassword",
  async (obj: object) => {
    try {
      const response = await resetPasswordAPI(obj);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const getUserRequest = createAsyncThunk(
  "auth/asyncGetUser",
  async (username: string) => {
    try {
      const response = await getUserAPI(username);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const updateUserRequest = createAsyncThunk(
  "auth/asyncUpdateUser",
  async (obj: object) => {
    try {
      const response = await updateUserAPI(obj);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

export const activateAccountRequest = createAsyncThunk(
  "auth/asyncActivateAccount",
  async (token: string) => {
    try {
      const response = await activateAccountAPI(token);
      return response as any;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  }
);

const initialState: AuthSlice = {
  loggedIn: false,
  user: {
    username: "",
    name: "",
    last_name: "",
    email: "",
    country: "",
    tz: "",
  },
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
    [getUserRequest.fulfilled.type]: (state, action) => {
      state.user = action.response;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
