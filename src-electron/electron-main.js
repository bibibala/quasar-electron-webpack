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
        title: "测量员平差",
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

    app.commandLine.appendSwitch("lang", "zh-CN");

    /**
     *
     * @description 设置菜单
     *
     */

    const template = [
        {
            label: "测量员平差",
            submenu: [{ role: "quit" }],
        },
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    /**
     *
     * @description 去啊u就那句注册快捷键
     *
     */
    globalShortcut.register("CommandOrControl+I", () => {
        mainWindow.webContents.openDevTools();
    });

    /**
     *
     * @description 设置常用快捷键
     */
    mainWindow.webContents.on("before-input-event", (event, input) => {
        if (input.type === "keyDown" && input.key === "c" && input.meta) {
            mainWindow.webContents.copy();
            event.preventDefault();
        }
        if (input.type === "keyDown" && input.key === "v" && input.meta) {
            mainWindow.webContents.paste();
            event.preventDefault();
        }
        if (input.type === "keyDown" && input.key === "x" && input.meta) {
            mainWindow.webContents.cut();
            event.preventDefault();
        }
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

ipcMain.on("select", async (event, args = {}) => {
    const response = await dialog.showOpenDialog({
        properties: ["openDirectory"],
        modal: true,
        parent: mainWindow,
    });
    if (response) {
        event.reply("selectOver", { args, response });
    }
});
