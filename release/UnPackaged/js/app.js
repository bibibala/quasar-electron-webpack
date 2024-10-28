(() => {
    var e,
        t,
        r,
        n,
        o,
        a = {
            226: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => l });
                var n = r(5180),
                    o = r(472),
                    a = r(6491),
                    i = r(5547),
                    s = r(5740);
                async function l(e, t) {
                    const r = e(a.A);
                    r.use(n.A, t);
                    const l =
                        "function" == typeof i.A ? await (0, i.A)({}) : i.A;
                    r.use(l);
                    const c = (0, o.IG)(
                        "function" == typeof s.A
                            ? await (0, s.A)({ store: l })
                            : s.A
                    );
                    return (
                        l.use(({ store: e }) => {
                            e.router = c;
                        }),
                        { app: r, store: l, router: c }
                    );
                }
            },
            8215: (e, t, r) => {
                "use strict";
                var n = r(5791),
                    o = r(226),
                    a = r(3341);
                async function i({ app: e, router: t, store: r }, n) {
                    let o = !1;
                    const a = (e) => {
                            if (
                                ((o = !0),
                                "string" == typeof e && /^https?:\/\//.test(e))
                            )
                                return void (window.location.href = e);
                            const r = ((e) => {
                                try {
                                    return t.resolve(e).href;
                                } catch (e) {}
                                return Object(e) === e ? null : e;
                            })(e);
                            null !== r &&
                                ((window.location.href = r),
                                window.location.reload());
                        },
                        i = window.location.href.replace(
                            window.location.origin,
                            ""
                        );
                    for (let s = 0; !1 === o && s < n.length; s++)
                        try {
                            await n[s]({
                                app: e,
                                router: t,
                                store: r,
                                ssrContext: null,
                                redirect: a,
                                urlPath: i,
                                publicPath: "",
                            });
                        } catch (e) {
                            return e && e.url
                                ? void a(e.url)
                                : void console.error("[Quasar] boot error:", e);
                        }
                    !0 !== o && (e.use(t), e.mount("#q-app"));
                }
                (0, o.A)(n.Ef, a.A).then((e) => {
                    const [t, n] =
                        void 0 !== Promise.allSettled
                            ? [
                                  "allSettled",
                                  (e) =>
                                      e.map((e) => {
                                          if ("rejected" !== e.status)
                                              return e.value.default;
                                          console.error(
                                              "[Quasar] boot error:",
                                              e.reason
                                          );
                                      }),
                              ]
                            : ["all", (e) => e.map((e) => e.default)];
                    return Promise[t]([
                        Promise.resolve().then(r.bind(r, 2147)),
                        Promise.resolve().then(r.t.bind(r, 7034, 23)),
                    ]).then((t) => {
                        const r = n(t).filter((e) => "function" == typeof e);
                        i(e, r);
                    });
                });
            },
            3341: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => d });
                var n = r(4212),
                    o = r(8442),
                    a = r(4420),
                    i = r(7158),
                    s = r(74),
                    l = r(6533),
                    c = r(4918);
                const u = {
                    config: {
                        screen: { bodyClasses: !0 },
                        loadingBar: {
                            color: "primary",
                            size: "3px",
                            position: "top",
                        },
                        loading: {
                            spinner: "QSpinnerIos",
                            message: "正在加载中,请稍后......",
                        },
                        brand: {
                            positive: "#48BB78",
                            negative: "#F56565",
                            info: "#4299E1",
                            warning: "#FEAE65",
                            primary: "#67ae5b",
                            secondary: "#FFFFFF",
                            accent: "#F2F3F5",
                            dark: "#1e2128",
                        },
                    },
                    lang: n.A,
                    iconSet: o.A,
                    components: { QSpinnerIos: a.A },
                    plugins: {
                        Loading: i.A,
                        Notify: s.A,
                        LoadingBar: l.A,
                        SessionStorage: c.A,
                    },
                };
                u.config.loading.spinner = a.A;
                const d = u;
            },
            1836: (e, t, r) => {
                "use strict";
                r.d(t, { X: () => o });
                var n = r(1632);
                function o(e, t) {
                    const r = (0, n.g2)("router-view");
                    return (0, n.uX)(), (0, n.Wv)(r);
                }
            },
            2147: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, { default: () => c, xhr: () => u });
                r(7699);
                var n = r(5188),
                    o = r(6533),
                    a = r(4200),
                    i = r(9244);
                const s = n.A.create({
                    url: "file://" + __dirname + "/index.html",
                    headers: {
                        "System-Type": "WEB_TOKEN",
                        "Access-Control-Allow-Origin": "*",
                    },
                    timeout: 1e5,
                });
                let l = n.A.CancelToken.source();
                const c = (0, a.zj)(({ router: e }) => {
                        s.interceptors.request.use(
                            (e) => (
                                (e.cancelToken = l.token),
                                (e.headers["Access-Token"] = (0, i.gf)()),
                                o.A.start(),
                                e
                            ),
                            (e) => (o.A.stop(), Promise.reject(e))
                        ),
                            s.interceptors.response.use(
                                (t) => {
                                    const { data: r } = t;
                                    return (
                                        401 === r.code &&
                                            (l.cancel(
                                                "您的登录已过期,请点击按钮返回首页重新登录,401"
                                            ),
                                            e.push({
                                                path: "/error",
                                                query: {
                                                    err: "您的登录已过期,请点击按钮返回首页重新登录,401",
                                                },
                                            }),
                                            (l = n.A.CancelToken.source())),
                                        o.A.stop(),
                                        r
                                    );
                                },
                                (t) => (
                                    o.A.stop(),
                                    e.push({
                                        path: "/error",
                                        query: { err: t },
                                    }),
                                    Promise.reject(t)
                                )
                            );
                    }),
                    u = {
                        get: (e, t) =>
                            s({
                                url: e,
                                method: "GET",
                                params: t,
                                headers: {
                                    "Content-Type":
                                        "application/json;charset=utf-8",
                                },
                            }),
                        post: (e, t) =>
                            s({
                                url: e,
                                method: "POST",
                                data: t,
                                headers: {
                                    "Content-Type":
                                        "application/json;charset=utf-8",
                                },
                            }),
                        file: (e, t) =>
                            s({
                                url: e,
                                method: "POST",
                                data: t,
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }),
                    };
            },
            7034: () => {},
            6745: (e, t, r) => {
                "use strict";
                r.d(t, { L: () => n });
                const n = [];
            },
            8656: (e, t, r) => {
                "use strict";
                r.d(t, { Q: () => n });
                const n = [
                    {
                        name: "Ellipsoid",
                        path: "/ellipsoid",
                        component: () =>
                            Promise.all([r.e(121), r.e(644)]).then(
                                r.bind(r, 6644)
                            ),
                        meta: { auth: !0, title: "椭球" },
                    },
                    {
                        name: "Projection",
                        path: "/projection",
                        component: () =>
                            Promise.all([r.e(121), r.e(356)]).then(
                                r.bind(r, 4356)
                            ),
                        meta: { auth: !0, title: "投影" },
                    },
                    {
                        name: "Coordinate-System",
                        path: "/coordinate-system",
                        component: () =>
                            Promise.all([r.e(121), r.e(775)]).then(
                                r.bind(r, 7775)
                            ),
                        meta: { auth: !0, title: "坐标系" },
                    },
                    {
                        name: "Seven-Parameters",
                        path: "/seven-parameters",
                        component: () =>
                            Promise.all([r.e(121), r.e(499)]).then(
                                r.bind(r, 8499)
                            ),
                        meta: { auth: !0, title: "转换参数(七参数)" },
                    },
                    {
                        name: "Seven-Parameters-Calculation",
                        path: "/seven-parameters-calculation",
                        component: () =>
                            Promise.all([r.e(121), r.e(591)]).then(
                                r.bind(r, 5591)
                            ),
                        meta: { auth: !0, title: "七参数计算" },
                    },
                    {
                        name: "Four-Parameters-Calculation",
                        path: "/four-parameters-calculation",
                        component: () =>
                            Promise.all([r.e(121), r.e(322)]).then(
                                r.bind(r, 5322)
                            ),
                        meta: { auth: !0, title: "四参数计算" },
                    },
                    {
                        name: "Elevation-Fit-Calculation",
                        path: "/elevation-fit-calculation",
                        component: () =>
                            Promise.all([r.e(121), r.e(688)]).then(
                                r.bind(r, 6688)
                            ),
                        meta: { auth: !0, title: "高程拟合参数计算" },
                    },
                ];
            },
            4674: (e, t, r) => {
                "use strict";
                r.d(t, { u: () => n });
                const n = [];
            },
            4157: (e, t, r) => {
                "use strict";
                r.d(t, { r: () => n });
                const n = [];
            },
            5740: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => i });
                var n = r(5088),
                    o = r(4200),
                    a = r(5924);
                const i = (0, o.wE)(function () {
                    return (0,
                    a.aE)({ routes: n.A, history: (0, a.Bt)(), scrollBehavior: () => ({ left: 0, top: 0 }) });
                });
            },
            5088: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => l });
                var n = r(8661),
                    o = r(6745),
                    a = r(8656),
                    i = r(4674),
                    s = r(4157);
                const l = [
                    { path: "/", redirect: { name: n.U.LOGIN } },
                    {
                        name: "Login",
                        path: "/login",
                        component: () => r.e(696).then(r.bind(r, 6696)),
                        meta: { title: "登录", auth: !1 },
                    },
                    {
                        path: "/coordinate-system",
                        component: () =>
                            Promise.all([r.e(121), r.e(447)]).then(
                                r.bind(r, 4447)
                            ),
                        meta: { title: "坐标系统", auth: !0 },
                        children: [...a.Q],
                    },
                    {
                        path: "/coordinate-conversion",
                        component: () =>
                            Promise.all([r.e(121), r.e(447)]).then(
                                r.bind(r, 4447)
                            ),
                        meta: { title: "坐标转换", auth: !0 },
                        children: [...o.L],
                    },
                    {
                        path: "/triangulation-adjustment",
                        component: () =>
                            Promise.all([r.e(121), r.e(447)]).then(
                                r.bind(r, 4447)
                            ),
                        meta: { title: "三角网平差", auth: !0 },
                        children: [...s.r],
                    },
                    {
                        path: "/leveling-adjustment",
                        component: () =>
                            Promise.all([r.e(121), r.e(447)]).then(
                                r.bind(r, 4447)
                            ),
                        meta: { title: "水准网平差", auth: !0 },
                        children: [...i.u],
                    },
                ];
            },
            5547: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => i });
                var n = r(2879),
                    o = r(4200),
                    a = r(3155);
                const i = (0, o.M_)(() => (0, n.Ey)().use(a.A));
            },
            8661: (e, t, r) => {
                "use strict";
                r.d(t, { U: () => n });
                const n = {
                    ACTIVE_INDEX: 11,
                    LOGIN: "Ellipsoid",
                    PAGE_DASHBOARD: "Ellipsoid",
                    ACCESS_TOKEN: "Access-Token",
                };
            },
            9244: (e, t, r) => {
                "use strict";
                r.d(t, { gf: () => a });
                r(391);
                var n = r(4918),
                    o = r(8661);
                function a() {
                    return n.A.getItem(o.U.ACCESS_TOKEN.token);
                }
            },
            6491: (e, t, r) => {
                "use strict";
                r.d(t, { A: () => a });
                var n = r(1836);
                const o = {},
                    a = (0, r(627).A)(o, [["render", n.X]]);
            },
        },
        i = {};
    function s(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var r = (i[e] = { exports: {} });
        return a[e].call(r.exports, r, r.exports, s), r.exports;
    }
    (s.m = a),
        (e = []),
        (s.O = (t, r, n, o) => {
            if (!r) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, n, o] = e[u], i = !0, l = 0; l < r.length; l++)
                        (!1 & o || a >= o) &&
                        Object.keys(s.O).every((e) => s.O[e](r[l]))
                            ? r.splice(l--, 1)
                            : ((i = !1), o < a && (a = o));
                    if (i) {
                        e.splice(u--, 1);
                        var c = n();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
                e[u] = e[u - 1];
            e[u] = [r, n, o];
        }),
        (s.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return s.d(t, { a: t }), t;
        }),
        (r = Object.getPrototypeOf
            ? (e) => Object.getPrototypeOf(e)
            : (e) => e.__proto__),
        (s.t = function (e, n) {
            if ((1 & n && (e = this(e)), 8 & n)) return e;
            if ("object" == typeof e && e) {
                if (4 & n && e.__esModule) return e;
                if (16 & n && "function" == typeof e.then) return e;
            }
            var o = Object.create(null);
            s.r(o);
            var a = {};
            t = t || [null, r({}), r([]), r(r)];
            for (
                var i = 2 & n && e;
                "object" == typeof i && !~t.indexOf(i);
                i = r(i)
            )
                Object.getOwnPropertyNames(i).forEach(
                    (t) => (a[t] = () => e[t])
                );
            return (a.default = () => e), s.d(o, a), o;
        }),
        (s.d = (e, t) => {
            for (var r in t)
                s.o(t, r) &&
                    !s.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (s.f = {}),
        (s.e = (e) =>
            Promise.all(
                Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), [])
            )),
        (s.u = (e) => "js/" + e + ".js"),
        (s.miniCssF = (e) => "css/" + e + ".css"),
        (s.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        })()),
        (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n = {}),
        (o = "adjustment:"),
        (s.l = (e, t, r, a) => {
            if (n[e]) n[e].push(t);
            else {
                var i, l;
                if (void 0 !== r)
                    for (
                        var c = document.getElementsByTagName("script"), u = 0;
                        u < c.length;
                        u++
                    ) {
                        var d = c[u];
                        if (
                            d.getAttribute("src") == e ||
                            d.getAttribute("data-webpack") == o + r
                        ) {
                            i = d;
                            break;
                        }
                    }
                i ||
                    ((l = !0),
                    ((i = document.createElement("script")).charset = "utf-8"),
                    (i.timeout = 120),
                    s.nc && i.setAttribute("nonce", s.nc),
                    i.setAttribute("data-webpack", o + r),
                    (i.src = e)),
                    (n[e] = [t]);
                var p = (t, r) => {
                        (i.onerror = i.onload = null), clearTimeout(h);
                        var o = n[e];
                        if (
                            (delete n[e],
                            i.parentNode && i.parentNode.removeChild(i),
                            o && o.forEach((e) => e(r)),
                            t)
                        )
                            return t(r);
                    },
                    h = setTimeout(
                        p.bind(null, void 0, { type: "timeout", target: i }),
                        12e4
                    );
                (i.onerror = p.bind(null, i.onerror)),
                    (i.onload = p.bind(null, i.onload)),
                    l && document.head.appendChild(i);
            }
        }),
        (s.r = (e) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.p = ""),
        (() => {
            if ("undefined" != typeof document) {
                var e = (e) =>
                        new Promise((t, r) => {
                            var n = s.miniCssF(e),
                                o = s.p + n;
                            if (
                                ((e, t) => {
                                    for (
                                        var r =
                                                document.getElementsByTagName(
                                                    "link"
                                                ),
                                            n = 0;
                                        n < r.length;
                                        n++
                                    ) {
                                        var o =
                                            (i = r[n]).getAttribute(
                                                "data-href"
                                            ) || i.getAttribute("href");
                                        if (
                                            "stylesheet" === i.rel &&
                                            (o === e || o === t)
                                        )
                                            return i;
                                    }
                                    var a =
                                        document.getElementsByTagName("style");
                                    for (n = 0; n < a.length; n++) {
                                        var i;
                                        if (
                                            (o = (i = a[n]).getAttribute(
                                                "data-href"
                                            )) === e ||
                                            o === t
                                        )
                                            return i;
                                    }
                                })(n, o)
                            )
                                return t();
                            ((e, t, r, n, o) => {
                                var a = document.createElement("link");
                                (a.rel = "stylesheet"),
                                    (a.type = "text/css"),
                                    s.nc && (a.nonce = s.nc),
                                    (a.onerror = a.onload =
                                        (r) => {
                                            if (
                                                ((a.onerror = a.onload = null),
                                                "load" === r.type)
                                            )
                                                n();
                                            else {
                                                var i = r && r.type,
                                                    s =
                                                        (r &&
                                                            r.target &&
                                                            r.target.href) ||
                                                        t,
                                                    l = new Error(
                                                        "Loading CSS chunk " +
                                                            e +
                                                            " failed.\n(" +
                                                            i +
                                                            ": " +
                                                            s +
                                                            ")"
                                                    );
                                                (l.name = "ChunkLoadError"),
                                                    (l.code =
                                                        "CSS_CHUNK_LOAD_FAILED"),
                                                    (l.type = i),
                                                    (l.request = s),
                                                    a.parentNode &&
                                                        a.parentNode.removeChild(
                                                            a
                                                        ),
                                                    o(l);
                                            }
                                        }),
                                    (a.href = t),
                                    r
                                        ? r.parentNode.insertBefore(
                                              a,
                                              r.nextSibling
                                          )
                                        : document.head.appendChild(a);
                            })(e, o, null, t, r);
                        }),
                    t = { 524: 0 };
                s.f.miniCss = (r, n) => {
                    t[r]
                        ? n.push(t[r])
                        : 0 !== t[r] &&
                          {
                              322: 1,
                              356: 1,
                              447: 1,
                              499: 1,
                              591: 1,
                              644: 1,
                              688: 1,
                              775: 1,
                          }[r] &&
                          n.push(
                              (t[r] = e(r).then(
                                  () => {
                                      t[r] = 0;
                                  },
                                  (e) => {
                                      throw (delete t[r], e);
                                  }
                              ))
                          );
                };
            }
        })(),
        (() => {
            var e = { 524: 0 };
            (s.f.j = (t, r) => {
                var n = s.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else {
                        var o = new Promise((r, o) => (n = e[t] = [r, o]));
                        r.push((n[2] = o));
                        var a = s.p + s.u(t),
                            i = new Error();
                        s.l(
                            a,
                            (r) => {
                                if (
                                    s.o(e, t) &&
                                    (0 !== (n = e[t]) && (e[t] = void 0), n)
                                ) {
                                    var o =
                                            r &&
                                            ("load" === r.type
                                                ? "missing"
                                                : r.type),
                                        a = r && r.target && r.target.src;
                                    (i.message =
                                        "Loading chunk " +
                                        t +
                                        " failed.\n(" +
                                        o +
                                        ": " +
                                        a +
                                        ")"),
                                        (i.name = "ChunkLoadError"),
                                        (i.type = o),
                                        (i.request = a),
                                        n[1](i);
                                }
                            },
                            "chunk-" + t,
                            t
                        );
                    }
            }),
                (s.O.j = (t) => 0 === e[t]);
            var t = (t, r) => {
                    var n,
                        o,
                        [a, i, l] = r,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                        if (l) var u = l(s);
                    }
                    for (t && t(r); c < a.length; c++)
                        (o = a[c]), s.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return s.O(u);
                },
                r = (globalThis.webpackChunkadjustment =
                    globalThis.webpackChunkadjustment || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var l = s.O(void 0, [121], () => s(8215));
    l = s.O(l);
})();
