<script setup>
import { storeToRefs } from "pinia";
import { usePublic } from "stores/public";
import { useRouteMeta } from "src/hooks/useRouteMeta";

const { ACTIVE_INDEX, OPEN_MENU } = storeToRefs(usePublic());

const nav = [
    {
        name: "坐标系统",
        id: 1,
        icon: "mdi-sitemap-outline",
        children: [
            {
                name: "椭球",
                id: 11,
                icon: "",
                path: "/ellipsoid",
            },
            {
                name: "投影",
                id: 12,
                icon: "",
                path: "/projection",
            },
            {
                name: "坐标系",
                id: 13,
                icon: "",
                path: "/coordinate-system",
            },
            {
                name: "转换参数(七参数)",
                id: 14,
                icon: "",
                path: "/seven-parameters",
            },
            {
                name: "七参数计算",
                id: 15,
                icon: "",
                path: "/seven-parameters-calculation",
            },
            {
                name: "四参数计算",
                id: 16,
                icon: "",
                path: "/four-parameters-calculation",
            },
            {
                name: "高程拟合参数计算",
                id: 17,
                icon: "",
                path: "/elevation-fit-calculation",
            },
        ],
    },
    {
        name: "坐标转换",
        id: 2,
        icon: "",
        path: "/coordinate-conversion",
        children: [],
    },
    {
        name: "三角网平差",
        id: 3,
        icon: "",
        path: "/triangulation-adjustment",
        children: [],
    },
    {
        name: "水准网平差",
        id: 4,
        icon: "",
        path: "/leveling-adjustment",
        children: [],
    },
];

const { parentText } = useRouteMeta();

function indexChange(index) {
    const active_menu = nav.filter((item) => item.name === parentText.value)[0];
    ACTIVE_INDEX.value = index;
    OPEN_MENU.value = active_menu.id;
}
</script>
<template>
    <div class="q-pl-sm q-pr-sm q-mt-sm">
        <q-expansion-item
            :label-lines="1"
            group="somegroup"
            expand-separator
            :default-opened="item.id === OPEN_MENU"
            active-class="text-primary"
            icon="mdi-sitemap-outline"
            :label="item.name"
            :key="item.id"
            v-for="item in nav"
        >
            <q-list>
                <q-item
                    clickable
                    v-ripple
                    :to="child.path"
                    v-for="child in item.children"
                    :key="child.id"
                    @click="indexChange(child.id)"
                    :active="ACTIVE_INDEX === child.id"
                    active-class="bg-accent text-primary"
                >
                    <q-item-section avatar>
                        <q-icon :name="child.icon" />
                    </q-item-section>
                    <q-item-section> {{ child.name }}</q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
    </div>
</template>
