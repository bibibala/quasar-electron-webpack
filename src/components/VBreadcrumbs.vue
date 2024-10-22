<template>
    <div style="height: 55px" class="q-ml-md">
        <q-breadcrumbs style="line-height: 55px">
            <q-breadcrumbs-el
                icon="mdi-home-outline"
                class="text cursor-pointer"
                @click="goHome"
            />
            <q-breadcrumbs-el :label="parentText" class="text" />
            <q-breadcrumbs-el :label="text" class="span" />
        </q-breadcrumbs>
    </div>
</template>
<script setup>
import { Key } from "src/utils/Key";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { usePublic } from "stores/public";
import { useRouteMeta } from "src/hooks/useRouteMeta";

const router = useRouter();

const { text, parentText } = useRouteMeta();
const { ACTIVE_INDEX } = storeToRefs(usePublic());

function goHome() {
    ACTIVE_INDEX.value = Key.PAGE_DASHBOARD;
    router.push({ name: Key.PAGE_DASHBOARD });
}
</script>
<style scoped lang="scss">
.text {
    color: #4e5969;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}

.text .span {
    color: #1d2129;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
}
</style>
