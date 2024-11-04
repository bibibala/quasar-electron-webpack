import axios from "axios";
import { LoadingBar } from "quasar";
import { boot } from "quasar/wrappers";
import { getToken } from "src/utils/useStorage";

const http = axios.create({
    url: process.env.APP_URL,
    headers: {
        "System-Type": "WEB_TOKEN",
        "Access-Control-Allow-Origin": "*",
    },
    timeout: 100000,
});
let cancelTokenSource = axios.CancelToken.source();
// app ,router
export default boot(() => {
    http.interceptors.request.use(
        (request) => {
            request.cancelToken = cancelTokenSource.token;
            request.headers["Access-Token"] = getToken();
            LoadingBar.start();
            return request;
        },
        (error) => {
            LoadingBar.stop();
            return Promise.reject(error);
        }
    );
    http.interceptors.response.use(
        (response) => {
            const { data } = response;
            if (data.code === 401) {
                cancelTokenSource.cancel(
                    "您的登录已过期,请点击按钮返回首页重新登录,401"
                );
            }
            LoadingBar.stop();
            return data;
        },
        (error) => {
            LoadingBar.stop();
            return Promise.reject(error);
        }
    );
});
const xhr = {
    get(url, params) {
        return http({
            url,
            method: "GET",
            params: params,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
    },
    post(url, data) {
        return http({
            url,
            method: "POST",
            data,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
    },
    file(url, data) {
        return http({
            url,
            method: "POST",
            data,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};
export { xhr };
