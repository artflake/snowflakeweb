import axios from ".";

export function loginAPI() {
  // return axios.get("/login");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

export function signupAPI() {
  // return axios.get("/register");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
