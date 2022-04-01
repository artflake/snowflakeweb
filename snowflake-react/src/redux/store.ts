import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/authSlice";
import { web3Slice } from "./reducers/web3Slice";

const reducer = combineReducers({
  login: authSlice.reducer,
  web3: web3Slice.reducer,
});

// includes useful middleware for development and redux-thunk  - https://redux-toolkit.js.org/api/getDefaultMiddleware

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
