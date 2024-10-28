import { LocalStorage } from "quasar";
import { Key } from "src/utils/Key";

// 设置用户token
export function setToken(data) {
    LocalStorage.set(Key.ACCESS_TOKEN, data);
}

export function getToken() {
    return LocalStorage.getItem(Key.ACCESS_TOKEN.token);
}

/**
 *
 * @returns {boolean}
 */
export function haveToken() {
    return LocalStorage.has(Key.ACCESS_TOKEN.token);
}

// 清除所有缓存
export function clearStorage() {
    LocalStorage.clear();
}
