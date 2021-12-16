import axios from ".";

export function loginAPI() {
  // return axios.post("/login");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

export function signupAPI() {
  // return axios.post("/register");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

export function forgotPasswordAPI() {
  // return axios.post("/forgotpassword");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

export function resetPasswordAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
