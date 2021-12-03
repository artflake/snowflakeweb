import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/login";

const reducers = combineReducers({
  login: loginReducer,
});

// includes useful middleware for development and redux-thunk  - https://redux-toolkit.js.org/api/getDefaultMiddleware

export default configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});
