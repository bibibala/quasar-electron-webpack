import path from "node:path";
import { app, dialog, Menu } from "electron";

const packageJson = require("../../package.json");

export function setAppTopBar() {
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
                    label: `关于${packageJson.productName}`,
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
                    label: "退出",
                    accelerator: "Command+Q",
                    click: () => {
                        app.quit();
                    },
                },
            ],
        },
        {
            label: "快捷方式",
            submenu: [
                {
                    label: "撤销",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:",
                },
                {
                    label: "重做",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:",
                },
                { type: "separator" },
                { label: "剪切", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                {
                    label: "复制",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:",
                },
                {
                    label: "粘贴",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:",
                },
                {
                    label: "全选",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:",
                },
            ],
        },
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}
