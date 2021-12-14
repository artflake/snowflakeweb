import axios from "../apis";

export function loginAPI() {
  return axios.get("/login");
}

export function registerAPI() {
  return axios.get("/register");
}
