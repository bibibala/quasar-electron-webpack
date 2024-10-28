"use strict";
(globalThis.webpackChunkadjustment =
    globalThis.webpackChunkadjustment || []).push([
    [322],
    {
        4158: (e, t, s) => {
            s.d(t, { A: () => i });
            s(7699);
            var a = s(1632),
                o = s(472),
                l = s(8661),
                r = s(2879),
                n = s(5924),
                d = s(7186),
                c = s(7594);
            const u = { style: { height: "55px" }, class: "q-ml-md" },
                i = {
                    __name: "VBreadcrumbs",
                    setup(e) {
                        const t = (0, n.rd)(),
                            { text: s, parentText: i } = (0, c._)(),
                            { ACTIVE_INDEX: m } = (0, r.bP)((0, d.x)());
                        function v() {
                            (m.value = l.U.PAGE_DASHBOARD),
                                t.push({ name: l.U.PAGE_DASHBOARD });
                        }
                        return (e, t) => {
                            const l = (0, a.g2)("q-breadcrumbs-el"),
                                r = (0, a.g2)("q-breadcrumbs");
                            return (
                                (0, a.uX)(),
                                (0, a.CE)("div", u, [
                                    (0, a.bF)(
                                        r,
                                        { style: { "line-height": "55px" } },
                                        {
                                            default: (0, a.k6)(() => [
                                                (0, a.bF)(l, {
                                                    icon: "mdi-home-outline",
                                                    class: "text cursor-pointer",
                                                    onClick: v,
                                                }),
                                                (0, a.bF)(
                                                    l,
                                                    {
                                                        label: (0, o.R1)(i),
                                                        class: "text",
                                                    },
                                                    null,
                                                    8,
                                                    ["label"]
                                                ),
                                                (0, a.bF)(
                                                    l,
                                                    {
                                                        label: (0, o.R1)(s),
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
            s.d(t, { A: () => h });
            var a = s(1632),
                o = s(472),
                l = s(9425);
            const r = { class: "q-pl-md q-pr-md overflow-auto" },
                n = { key: 0, class: "row example-row-stacked-to-horizontal" },
                d = { class: "col-12 q-mt-md" },
                c = { key: 1, class: "row example-row-stacked-to-horizontal" },
                u = { class: "col-12 q-mt-md" },
                i = { class: "row example-row-stacked-to-horizontal" },
                m = { class: "col-12 q-mt-md" },
                v = { class: "row example-row-stacked-to-horizontal" },
                p = { class: "col-12" },
                h = {
                    __name: "VLayout",
                    props: {
                        showSearch: { default: !0, type: Boolean },
                        showTool: { default: !0, type: Boolean },
                    },
                    setup(e) {
                        const t = (0, o.KR)(null);
                        return (
                            (0, a.sV)(() => {
                                function e() {
                                    t.value &&
                                        (t.value.style.height =
                                            window.innerHeight - 125 + "px");
                                }
                                t.value &&
                                    (t.value.style.height =
                                        window.innerHeight - 125 + "px"),
                                    window.addEventListener("resize", e),
                                    (0, a.hi)(() => {
                                        window.removeEventListener("resize", e);
                                    });
                            }),
                            (s, o) => {
                                const h = (0, a.g2)("q-separator");
                                return (
                                    (0, a.uX)(),
                                    (0, a.CE)(
                                        a.FK,
                                        null,
                                        [
                                            (0, a.bF)(l.A),
                                            (0, a.Lk)(
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
                                                    (0, a.Lk)("div", r, [
                                                        e.showSearch
                                                            ? ((0, a.uX)(),
                                                              (0, a.CE)(
                                                                  "div",
                                                                  n,
                                                                  [
                                                                      (0, a.Lk)(
                                                                          "div",
                                                                          d,
                                                                          [
                                                                              (0,
                                                                              a.RG)(
                                                                                  s.$slots,
                                                                                  "search"
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0, a.Q3)("", !0),
                                                        (0, a.bF)(h, {
                                                            class: "q-mt-md",
                                                        }),
                                                        e.showTool
                                                            ? ((0, a.uX)(),
                                                              (0, a.CE)(
                                                                  "div",
                                                                  c,
                                                                  [
                                                                      (0, a.Lk)(
                                                                          "div",
                                                                          u,
                                                                          [
                                                                              (0,
                                                                              a.RG)(
                                                                                  s.$slots,
                                                                                  "tool"
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0, a.Q3)("", !0),
                                                        (0, a.Lk)("div", i, [
                                                            (0, a.Lk)(
                                                                "div",
                                                                m,
                                                                [
                                                                    (0, a.RG)(
                                                                        s.$slots,
                                                                        "body"
                                                                    ),
                                                                ]
                                                            ),
                                                        ]),
                                                        (0, a.Lk)("div", v, [
                                                            (0, a.Lk)(
                                                                "div",
                                                                p,
                                                                [
                                                                    (0, a.RG)(
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
        2803: (e, t, s) => {
            s.d(t, { A: () => l });
            var a = s(1632),
                o = s(6215);
            const l = {
                __name: "index",
                setup: (e) => (e, t) => ((0, a.uX)(), (0, a.Wv)(o.A)),
            };
        },
        7594: (e, t, s) => {
            s.d(t, { _: () => l });
            var a = s(1632),
                o = s(5924);
            function l() {
                const e = (0, o.rd)();
                return {
                    parentText: (0, a.EW)(() => {
                        const t = e.currentRoute.value.matched;
                        return t.length > 0 ? t[0].meta.title : "";
                    }),
                    text: (0, a.EW)(() => e.currentRoute.value.meta.title),
                };
            }
        },
        7186: (e, t, s) => {
            s.d(t, { x: () => a });
            const a = (0, s(2879).nY)("counter", {
                persist: !0,
                state: () => ({ ACTIVE_INDEX: 11, OPEN_MENU: 1 }),
            });
        },
        9425: (e, t, s) => {
            s.d(t, { A: () => c });
            var a = s(1147),
                o = s(627),
                l = s(8375),
                r = s(7722),
                n = s(6178),
                d = s.n(n);
            const c = (0, o.A)(a.A, [["__scopeId", "data-v-1de20e7f"]]);
            d()(a.A, "components", { QBreadcrumbs: l.A, QBreadcrumbsEl: r.A });
        },
        6215: (e, t, s) => {
            s.d(t, { A: () => n });
            var a = s(4075),
                o = s(273),
                l = s(6178),
                r = s.n(l);
            const n = a.A;
            r()(a.A, "components", { QSeparator: o.A });
        },
        5322: (e, t, s) => {
            s.r(t), s.d(t, { default: () => a });
            const a = s(7326).A;
        },
        1147: (e, t, s) => {
            s.d(t, { A: () => a.A });
            var a = s(4158);
        },
        4075: (e, t, s) => {
            s.d(t, { A: () => a.A });
            var a = s(5616);
        },
        7326: (e, t, s) => {
            s.d(t, { A: () => a.A });
            var a = s(2803);
        },
    },
]);
