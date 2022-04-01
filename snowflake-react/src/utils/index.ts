export function setToken(value) {
    window.localStorage.setItem('isLoggedIn', JSON.stringify(true));
    return window.localStorage.setItem('data', JSON.stringify(value));
}

export function getToken() {
    return window.localStorage.getItem('isLoggedIn');
}

export function removeToken() {
    return window.localStorage.clear();
}

export function textTrim(str: string = '', length: number = 100): string {
    if(!str) {
        return '';
    }

    return str.substr(0, length) + '...';
}