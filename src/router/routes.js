import { Key } from "src/utils/Key";
import { coordinateConversion } from "pages/coordinate-conversion";
import { coordinateSystem } from "pages/coordinate-system";
import { levelingAdjustment } from "pages/leveling-adjustment";
import { triangulationAdjustment } from "pages/triangulation-adjustment";

const routes = [
    {
        path: "/",
        redirect: { name: Key.LOGIN },
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("src/login/index.vue"),
        meta: {
            title: "登录",
            auth: false,
        },
    },
    {
        path: "/coordinate-system",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            title: "坐标系统",
            auth: true,
        },
        children: [...coordinateSystem],
    },
    {
        path: "/coordinate-conversion",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            title: "坐标转换",
            auth: true,
        },
        children: [...coordinateConversion],
    },
    {
        path: "/triangulation-adjustment",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            title: "三角网平差",
            auth: true,
        },
        children: [...triangulationAdjustment],
    },
    {
        path: "/leveling-adjustment",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            title: "水准网平差",
            auth: true,
        },
        children: [...levelingAdjustment],
    },
];

export default routes;
