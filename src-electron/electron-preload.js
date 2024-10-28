const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("Renderer", {
    select: (args) => ipcRenderer.invoke("select", args),
});
