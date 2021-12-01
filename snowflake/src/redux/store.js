import { createStore, combineReducers } from "redux";

import { loginReducer } from "./reducers/login";

const reducers = combineReducers({
  login: loginReducer,
});

export default createStore((state, action) => reducers(state, action));
