(() => {
    var e = {
            157: (e) => {
                "use strict";
                e.exports = require("electron");
            },
        },
        r = {};
    function n(t) {
        var o = r[t];
        if (void 0 !== o) return o.exports;
        var s = (r[t] = { exports: {} });
        return e[t](s, s.exports, n), s.exports;
    }
    const { contextBridge: t, ipcRenderer: o } = n(157);
    t.exposeInMainWorld("ipcRenderer", {
        on(e, r) {
            return o.on(e, (e, ...n) => r(e, ...n));
        },
        off(e, ...r) {
            return o.off(e, ...r);
        },
        send(e, ...r) {
            return o.send(e, ...r);
        },
        invoke(e, ...r) {
            return o.invoke(e, ...r);
        },
        select: (e) => o.send("select", e),
        selectOver: (e) => o.on("selectOver", e),
    });
})();
