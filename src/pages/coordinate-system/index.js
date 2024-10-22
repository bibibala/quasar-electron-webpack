export const coordinateSystem = [
    {
        name: "Ellipsoid",
        path: "/ellipsoid",
        component: () => import("pages/coordinate-system/ellipsoid/index.vue"),
        meta: {
            auth: true,
            title: "椭球",
        },
    },
    {
        name: "Projection",
        path: "/projection",
        component: () => import("pages/coordinate-system/projection/index.vue"),
        meta: {
            auth: true,
            title: "投影",
        },
    },
    {
        name: "Coordinate-System",
        path: "/coordinate-system",
        component: () =>
            import("pages/coordinate-system/coordinate-system/index.vue"),
        meta: {
            auth: true,
            title: "坐标系",
        },
    },
    {
        name: "Seven-Parameters",
        path: "/seven-parameters",
        component: () =>
            import("pages/coordinate-system/seven-parameters/index.vue"),
        meta: {
            auth: true,
            title: "转换参数(七参数)",
        },
    },
    {
        name: "Seven-Parameters-Calculation",
        path: "/seven-parameters-calculation",
        component: () =>
            import(
                "pages/coordinate-system/seven-parameters-calculation/index.vue"
            ),
        meta: {
            auth: true,
            title: "七参数计算",
        },
    },
    {
        name: "Four-Parameters-Calculation",
        path: "/four-parameters-calculation",
        component: () =>
            import(
                "pages/coordinate-system/four-parameters-calculation/index.vue"
            ),
        meta: {
            auth: true,
            title: "四参数计算",
        },
    },
    {
        name: "Elevation-Fit-Calculation",
        path: "/elevation-fit-calculation",
        component: () =>
            import(
                "pages/coordinate-system/elevation-fit-calculation/index.vue"
            ),
        meta: {
            auth: true,
            title: "高程拟合参数计算",
        },
    },
];
