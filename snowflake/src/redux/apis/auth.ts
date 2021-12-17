import axios from ".";

export function loginAPI(obj: object) {
  return axios.post("/login/", obj);
}

export function signupAPI(obj: object) {
  return axios.post("/signup/", obj);
}

export function forgotPasswordAPI(obj: object) {
  return axios.post("/password_reset/", obj);
}

export function resetPasswordAPI(obj: any) {
  const { token, ...rest } = obj;
  return axios.post(`/password_reset/${token}`, rest);
}

export function getUserAPI(username: string) {
  return axios.get(`/user/${username}`);
}

export function updateUserAPI(obj: any) {
  return axios.post("/user/", obj);
}

export function activateAccountAPI(token: string) {
  return axios.get(`/activate/${token}`);
}
