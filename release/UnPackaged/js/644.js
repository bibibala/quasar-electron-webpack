"use strict";
(globalThis.webpackChunkadjustment =
    globalThis.webpackChunkadjustment || []).push([
    [644],
    {
        4158: (e, t, s) => {
            s.d(t, { A: () => i });
            s(7699);
            var o = s(1632),
                a = s(472),
                n = s(8661),
                r = s(2879),
                l = s(5924),
                c = s(7186),
                d = s(7594);
            const u = { style: { height: "55px" }, class: "q-ml-md" },
                i = {
                    __name: "VBreadcrumbs",
                    setup(e) {
                        const t = (0, l.rd)(),
                            { text: s, parentText: i } = (0, d._)(),
                            { ACTIVE_INDEX: m } = (0, r.bP)((0, c.x)());
                        function p() {
                            (m.value = n.U.PAGE_DASHBOARD),
                                t.push({ name: n.U.PAGE_DASHBOARD });
                        }
                        return (e, t) => {
                            const n = (0, o.g2)("q-breadcrumbs-el"),
                                r = (0, o.g2)("q-breadcrumbs");
                            return (
                                (0, o.uX)(),
                                (0, o.CE)("div", u, [
                                    (0, o.bF)(
                                        r,
                                        { style: { "line-height": "55px" } },
                                        {
                                            default: (0, o.k6)(() => [
                                                (0, o.bF)(n, {
                                                    icon: "mdi-home-outline",
                                                    class: "text cursor-pointer",
                                                    onClick: p,
                                                }),
                                                (0, o.bF)(
                                                    n,
                                                    {
                                                        label: (0, a.R1)(i),
                                                        class: "text",
                                                    },
                                                    null,
                                                    8,
                                                    ["label"]
                                                ),
                                                (0, o.bF)(
                                                    n,
                                                    {
                                                        label: (0, a.R1)(s),
                                                        class: "span",
                                                    },
                                                    null,
                                                    8,
                                                    ["label"]
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ])
                            );
                        };
                    },
                };
        },
        5616: (e, t, s) => {
            s.d(t, { A: () => A });
            var o = s(1632),
                a = s(472),
                n = s(9425);
            const r = { class: "q-pl-md q-pr-md overflow-auto" },
                l = { key: 0, class: "row example-row-stacked-to-horizontal" },
                c = { class: "col-12 q-mt-md" },
                d = { key: 1, class: "row example-row-stacked-to-horizontal" },
                u = { class: "col-12 q-mt-md" },
                i = { class: "row example-row-stacked-to-horizontal" },
                m = { class: "col-12 q-mt-md" },
                p = { class: "row example-row-stacked-to-horizontal" },
                v = { class: "col-12" },
                A = {
                    __name: "VLayout",
                    props: {
                        showSearch: { default: !0, type: Boolean },
                        showTool: { default: !0, type: Boolean },
                    },
                    setup(e) {
                        const t = (0, a.KR)(null);
                        return (
                            (0, o.sV)(() => {
                                function e() {
                                    t.value &&
                                        (t.value.style.height =
                                            window.innerHeight - 125 + "px");
                                }
                                t.value &&
                                    (t.value.style.height =
                                        window.innerHeight - 125 + "px"),
                                    window.addEventListener("resize", e),
                                    (0, o.hi)(() => {
                                        window.removeEventListener("resize", e);
                                    });
                            }),
                            (s, a) => {
                                const A = (0, o.g2)("q-separator");
                                return (
                                    (0, o.uX)(),
                                    (0, o.CE)(
                                        o.FK,
                                        null,
                                        [
                                            (0, o.bF)(n.A),
                                            (0, o.Lk)(
                                                "div",
                                                {
                                                    ref_key: "myDiv",
                                                    ref: t,
                                                    class: "bg-primary q-mr-md q-ml-md q-mt-sm bg-secondary",
                                                    style: {
                                                        "border-radius": "4px",
                                                    },
                                                },
                                                [
                                                    (0, o.Lk)("div", r, [
                                                        e.showSearch
                                                            ? ((0, o.uX)(),
                                                              (0, o.CE)(
                                                                  "div",
                                                                  l,
                                                                  [
                                                                      (0, o.Lk)(
                                                                          "div",
                                                                          c,
                                                                          [
                                                                              (0,
                                                                              o.RG)(
                                                                                  s.$slots,
                                                                                  "search"
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0, o.Q3)("", !0),
                                                        (0, o.bF)(A, {
                                                            class: "q-mt-md",
                                                        }),
                                                        e.showTool
                                                            ? ((0, o.uX)(),
                                                              (0, o.CE)(
                                                                  "div",
                                                                  d,
                                                                  [
                                                                      (0, o.Lk)(
                                                                          "div",
                                                                          u,
                                                                          [
                                                                              (0,
                                                                              o.RG)(
                                                                                  s.$slots,
                                                                                  "tool"
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0, o.Q3)("", !0),
                                                        (0, o.Lk)("div", i, [
                                                            (0, o.Lk)(
                                                                "div",
                                                                m,
                                                                [
                                                                    (0, o.RG)(
                                                                        s.$slots,
                                                                        "body"
                                                                    ),
                                                                ]
                                                            ),
                                                        ]),
                                                        (0, o.Lk)("div", p, [
                                                            (0, o.Lk)(
                                                                "div",
                                                                v,
                                                                [
                                                                    (0, o.RG)(
                                                                        s.$slots,
                                                                        "default"
                                                                    ),
                                                                ]
                                                            ),
                                                        ]),
                                                    ]),
                                                ],
                                                512
                                            ),
                                        ],
                                        64
                                    )
                                );
                            }
                        );
                    },
                };
        },
        7241: (e, t, s) => {
            s.d(t, { A: () => n });
            var o = s(1632),
                a = s(6215);
            const n = {
                __name: "index",
                setup(e) {
                    async function t() {
                        await window.ipcRenderer.select("source"),
                            window.ipcRenderer.selectOver(async (e, t) => {
                                console.log(t);
                            });
                    }
                    return (e, s) => {
                        const n = (0, o.g2)("q-btn");
                        return (
                            (0, o.uX)(),
                            (0, o.Wv)(a.A, null, {
                                body: (0, o.k6)(() => [
                                    (0, o.bF)(
                                        n,
                                        {
                                            onClick: t,
                                            class: "text-accent bg-primary",
                                            "no-caps": "",
                                            flat: "",
                                        },
                                        {
                                            default: (0, o.k6)(
                                                () =>
                                                    s[0] ||
                                                    (s[0] = [(0, o.eW)("open")])
                                            ),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            })
                        );
                    };
                },
            };
        },
        7594: (e, t, s) => {
            s.d(t, { _: () => n });
            var o = s(1632),
                a = s(5924);
            function n() {
                const e = (0, a.rd)();
                return {
                    parentText: (0, o.EW)(() => {
                        const t = e.currentRoute.value.matched;
                        return t.length > 0 ? t[0].meta.title : "";
                    }),
                    text: (0, o.EW)(() => e.currentRoute.value.meta.title),
                };
            }
        },
        7186: (e, t, s) => {
            s.d(t, { x: () => o });
            const o = (0, s(2879).nY)("counter", {
                persist: !0,
                state: () => ({ ACTIVE_INDEX: 11, OPEN_MENU: 1 }),
            });
        },
        9425: (e, t, s) => {
            s.d(t, { A: () => d });
            var o = s(1147),
                a = s(627),
                n = s(8375),
                r = s(7722),
                l = s(6178),
                c = s.n(l);
            const d = (0, a.A)(o.A, [["__scopeId", "data-v-1de20e7f"]]);
            c()(o.A, "components", { QBreadcrumbs: n.A, QBreadcrumbsEl: r.A });
        },
        6215: (e, t, s) => {
            s.d(t, { A: () => l });
            var o = s(4075),
                a = s(273),
                n = s(6178),
                r = s.n(n);
            const l = o.A;
            r()(o.A, "components", { QSeparator: a.A });
        },
        6644: (e, t, s) => {
            s.r(t), s.d(t, { default: () => l });
            var o = s(2588),
                a = s(4883),
                n = s(6178),
                r = s.n(n);
            const l = o.A;
            r()(o.A, "components", { QBtn: a.A });
        },
        1147: (e, t, s) => {
            s.d(t, { A: () => o.A });
            var o = s(4158);
        },
        4075: (e, t, s) => {
            s.d(t, { A: () => o.A });
            var o = s(5616);
        },
        2588: (e, t, s) => {
            s.d(t, { A: () => o.A });
            var o = s(7241);
        },
    },
]);
