import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducers/loginSlice";
import { web3Slice } from "./reducers/web3Slice";

const reducer = combineReducers({
  login: loginSlice.reducer,
  web3: web3Slice.reducer,
});

// includes useful middleware for development and redux-thunk  - https://redux-toolkit.js.org/api/getDefaultMiddleware

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: true,
    }),
});
