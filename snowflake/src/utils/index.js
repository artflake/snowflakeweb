export function setToken(value) {
    return window.localStorage.setItem('token', value);
}

export function getToken() {
    return window.localStorage.getItem('token');
}