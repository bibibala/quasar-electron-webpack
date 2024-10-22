import axios from "axios";
import { xhr } from "src/boot/axios";
import { useToast } from "src/utils/useToast";
import { getToken } from "src/utils/useStorage";

/**
 *
 *@param url{string}
 *@param data{any}
 */

export function downloadFile(data, url) {
    axios({
        data,
        method: `POST`,
        url: `${process.env.WEB_APP_URL}${url}`,
        responseType: "blob",
        headers: {
            "System-Type": "WEB_TOKEN",
            "Access-Token": getToken(),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
        .then((res) => {
            if (res.headers["content-type"] === "application/json") {
                const reader = new FileReader();
                reader.readAsText(res.data);
                reader.onload = (result) => {
                    const { msg } = JSON.parse(result.target.result);
                    useToast("error", `下载失败,${msg}`);
                };
            } else {
                const link = document.createElement("a");
                const blob = new Blob([res.data], {
                    type: "application/vnd.ms-excel",
                });
                link.style.display = "none";
                link.href = URL.createObjectURL(blob);
                link.download = res.headers["content-disposition"];
                getFileName(link);
            }
        })
        .catch((error) => {
            useToast("error", `下载失败,${error}`);
        });
}

function getFileName(data) {
    let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    let matches = filenameRegex.exec(data.download);
    let files = matches[1].replace(/['"]/g, "");
    data.download = decodeURI(files);
    document.body.appendChild(data);
    data.click();
    document.body.removeChild(data);
}

/**
 *
 * @param file{Object}
 * @param data{any}
 * @param url{string}
 */
export function upload(file, data, url) {
    let form = new FormData();
    form.append("file", file);
    if (data && data instanceof Object) {
        Object.keys(data).forEach((key) => {
            form.append(`${key}`, data[key]);
        });
    }
    return xhr.file(`${url}`, form);
}
