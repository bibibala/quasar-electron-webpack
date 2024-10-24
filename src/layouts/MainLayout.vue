<template>
    <q-layout view="hHh lpR fFf">
        <q-header reveal bordered class="bg-secondary">
            <ToolBar />
        </q-header>
        <q-drawer
            :width="245"
            show-if-above
            v-model="drawer"
            side="left"
            bordered
            class="bg-secondary text-dark"
        >
            <q-scroll-area style="height: 90vh">
                <NavList />
            </q-scroll-area>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import ToolBar from "layouts/components/ToolBar.vue";
import NavList from "layouts/components/NavList.vue";

const drawer = ref(true);
</script>
<style scoped>
.box img {
    display: block;
    margin: auto 0 auto 10px;
}
</style>
