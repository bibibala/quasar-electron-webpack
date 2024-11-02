import os from "os";
import path from "path";
import { app } from "electron";


/**
 *
 * 根据不同的os 加载不同的so库
 * so库的文件名字一定要一样
 * @param filename {string}
 *
 */
export function getLibraryPath(filename) {
    const basePath = app.isPackaged
        ? path.join(process.resourcesPath, "dll")
        : path.join(__dirname, "../../resources/dll");
    const extension = os.platform() === 'win32' ? 'dll' : os.platform() === 'darwin' ? 'dylib' : 'so';
    return path.join(basePath, `${filename}.${extension}`);
}
