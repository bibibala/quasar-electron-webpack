import os from "os";
import path from "path";
import { app } from "electron";

/**
 * 根据不同的操作系统加载动态库
 * @param filename {string} 库的基础文件名
 * @return string 完整的库文件路径
 */
export function getLibraryPath(filename) {
    const basePath = app.isPackaged
        ? path.join(process.resourcesPath, "dll")
        : path.join(__dirname, "../../resources/dll");
    let arch;
    switch (os.platform()) {
        case "win32":
            arch = process.arch === "x64" ? "win64" : "win32";
            return path.join(basePath, `${filename}-${arch}.dll`);
        case "darwin":
            arch = process.arch === "arm64" ? "arm" : "x86";
            return path.join(basePath, `${filename}-${arch}.dylib`);
    }
    // return path.join(basePath, `${filename}.so`);
}
