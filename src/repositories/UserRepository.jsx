import { USER_KEY } from "../utils/system";

export function save(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function get() {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
}

export function remove() {
    localStorage.removeItem(USER_KEY);
}

