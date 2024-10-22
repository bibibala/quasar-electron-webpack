import { LocalStorage, SessionStorage } from "quasar";
import { Key } from "src/utils/Key";

// 设置用户token
export function setToken(data) {
    SessionStorage.set(Key.ACCESS_TOKEN, data);
}

export function getToken() {
    return SessionStorage.getItem(Key.ACCESS_TOKEN.token);
}

/**
 *
 * @returns {boolean}
 */
export function haveToken() {
    return SessionStorage.has(Key.ACCESS_TOKEN.token);
}

// 清除所有缓存
export function clearStorage() {
    SessionStorage.clear();
    LocalStorage.clear();
}
