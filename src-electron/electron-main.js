import path from "path";
import os from "os";
import { setAppTopBar } from "./utils/TopBar";

const packageJson = require("../package.json");
import { app, BrowserWindow, globalShortcut, ipcMain, dialog } from "electron";

/**
 *
 *@description main process
 *
 */
// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

const isDev = process.env.NODE_ENV === "development";

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        icon: path.resolve(__dirname, "icons/icon.png"),
        width: 1350,
        height: 850,
        autoHideMenuBar: true,
        title: packageJson.productName,
        webPreferences: {
            sandbox: false,
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.resolve(
                __dirname,
                process.env.QUASAR_ELECTRON_PRELOAD
            ),
        },
    });
    setAppTopBar();
    /**
     *
     * @description 全局注册快捷键
     *
     */
    if (isDev) {
        globalShortcut.register("CommandOrControl+I", () => {
            mainWindow.webContents.openDevTools();
        });
    } else {
        globalShortcut.unregister("CommandOrControl+I");
    }

    mainWindow.loadURL(process.env.APP_URL);

    if (process.env.DEBUGGING) {
        // if on DEV or Production with debug enabled
        mainWindow.webContents.openDevTools();
    } else {
        // we're on production; no access to devtools pls
        mainWindow.webContents.on("devtools-opened", () => {
            mainWindow.webContents.closeDevTools();
        });
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.commandLine.appendSwitch("lang", "zh-CN");

app.whenReady().then(createWindow);

app.on("will-quit", () => {
    globalShortcut.unregisterAll();
});

app.on("window-all-closed", () => {
    if (platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
/**
 *
 * @description ipcMain
 *
 */
ipcMain.handle("select", async () => {
    const { filePaths } = await dialog.showOpenDialog({
        // properties?: Array<'openFile' | 'openDirectory' | 'multiSelections' | 'showHiddenFiles' | 'createDirectory' | 'promptToCreate' | 'noResolveAliases' | 'treatPackageAsDirectory' | 'dontAddToRecent'>;
        // properties: ["openDirectory"],
        properties: ["openFile"],
        modal: true,
        parent: mainWindow,
        filters: [
            { name: "All Files", extensions: ["*"] },
            // 或者指定文件类型，例如：
            // { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            // { name: 'Documents', extensions: ['doc', 'docx', 'pdf'] }
        ],
    });
    if (Array.isArray(filePaths) && filePaths.length) {
        console.log(filePaths);
    }
});
