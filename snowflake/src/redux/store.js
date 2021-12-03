import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/login";
import { web3Slice } from "./reducers/web3Slice";

const reducer = combineReducers({
  login: loginReducer,
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
