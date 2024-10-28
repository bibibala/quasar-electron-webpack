(() => {
    "use strict";
    var e = {};
    (() => {
        e.n = (o) => {
            var t = o && o.__esModule ? () => o["default"] : () => o;
            return e.d(t, { a: t }), t;
        };
    })(),
        (() => {
            e.d = (o, t) => {
                for (var n in t)
                    e.o(t, n) &&
                        !e.o(o, n) &&
                        Object.defineProperty(o, n, {
                            enumerable: !0,
                            get: t[n],
                        });
            };
        })(),
        (() => {
            e.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o);
        })();
    var o = {};
    const t = require("path");
    var n = e.n(t);
    const r = require("os");
    var a = e.n(r);
    const l = require("electron"),
        s = process.platform || a().platform(),
        p = !1;
    let i;
    function c() {
        (i = new l.BrowserWindow({
            icon: n().resolve(
                p ? __dirname : process.resourcesPath,
                "icons/icon.png"
            ),
            width: 1350,
            height: 850,
            autoHideMenuBar: !0,
            useContentSize: !0,
            title: "测量员平差",
            webPreferences: {
                sandbox: !1,
                nodeIntegration: !1,
                contextIsolation: !0,
                enableRemoteModule: !1,
                preload: n().resolve(
                    p ? __dirname : process.resourcesPath,
                    "electron-preload.js"
                ),
            },
        })),
            l.app.commandLine.appendSwitch("lang", "zh-CN");
        const e = [{ label: "测量员平差", submenu: [{ role: "quit" }] }],
            o = l.Menu.buildFromTemplate(e);
        l.Menu.setApplicationMenu(o),
            l.globalShortcut.register("CommandOrControl+I", () => {
                i.webContents.openDevTools();
            }),
            i.webContents.on("before-input-event", (e, o) => {
                "keyDown" === o.type &&
                    "c" === o.key &&
                    o.meta &&
                    (i.webContents.copy(), e.preventDefault()),
                    "keyDown" === o.type &&
                        "v" === o.key &&
                        o.meta &&
                        (i.webContents.paste(), e.preventDefault()),
                    "keyDown" === o.type &&
                        "x" === o.key &&
                        o.meta &&
                        (i.webContents.cut(), e.preventDefault());
            }),
            i.loadURL("file://" + __dirname + "/index.html"),
            i.webContents.on("devtools-opened", () => {
                i.webContents.closeDevTools();
            }),
            i.on("closed", () => {
                i = null;
            });
    }
    l.app.whenReady().then(c),
        l.app.on("will-quit", () => {
            l.globalShortcut.unregisterAll();
        }),
        l.app.on("window-all-closed", () => {
            "darwin" !== s && l.app.quit();
        }),
        l.app.on("activate", () => {
            null === i && c();
        }),
        l.ipcMain.on("select", async (e, o = {}) => {
            const t = await l.dialog.showOpenDialog({
                properties: ["openDirectory"],
                modal: !0,
                parent: i,
            });
            t && e.reply("selectOver", { args: o, response: t });
        }),
        (module.exports = o);
})();
