import path from "path";
import os from "os";
import {
    app,
    BrowserWindow,
    Menu,
    globalShortcut,
    ipcMain,
    dialog,
} from "electron";

const packageJson = require("../package.json");

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        icon: path.resolve(__dirname, "icons/icon.png"),
        width: 1350,
        height: 850,
        autoHideMenuBar: true,
        useContentSize: true,
        title: packageJson.productName,
        webPreferences: {
            sandbox: false,
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
            preload: path.resolve(
                __dirname,
                process.env.QUASAR_ELECTRON_PRELOAD
            ),
        },
    });
    /**
     *
     * @description 设置菜单
     *
     */
    const template = [
        {
            label: "Application",
            submenu: [
                {
                    label: "About Application",
                    click: () => {
                        dialog.showMessageBox({
                            type: "info",
                            icon: path.join(__dirname, "icons/icon.png"),
                            title: packageJson.productName,
                            message: `Version: ${packageJson.version}`,
                            detail: packageJson.author.name,
                            buttons: ["OK"],
                        });
                    },
                },
                { type: "separator" },
                {
                    label: "Quit",
                    accelerator: "Command+Q",
                    click: () => {
                        app.quit();
                    },
                },
            ],
        },
        {
            label: "Edit",
            submenu: [
                {
                    label: "Undo",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:",
                },
                {
                    label: "Redo",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:",
                },
                { type: "separator" },
                { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                {
                    label: "Copy",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:",
                },
                {
                    label: "Paste",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:",
                },
                {
                    label: "Select All",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:",
                },
            ],
        },
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    /**
     *
     * @description 全局注册快捷键
     *
     */
    globalShortcut.register("CommandOrControl+I", () => {
        mainWindow.webContents.openDevTools();
    });

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

// ipcMain.removeAllListeners("select");
ipcMain.handle("select", async (event, args = {}) => {
    return await dialog.showOpenDialog({
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
});
