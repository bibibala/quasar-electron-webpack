/**
 *
 * @return {Promise<string>}
 */
export function fileResponse() {
    return new Promise((resolve, reject) => {
        window.ipcRenderer.select("source");
        window.ipcRenderer.selectOver((_, response) => {
            if (response) {
                resolve(response);
            } else {
                reject(new Error("No response received."));
            }
        });
    });
}
