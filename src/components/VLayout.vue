<template>
    <VBreadcrumbs></VBreadcrumbs>
    <div
        ref="myDiv"
        class="bg-primary q-mr-md q-ml-md q-mt-sm bg-secondary"
        style="border-radius: 4px"
    >
        <div class="q-pl-md q-pr-md overflow-auto">
            <div
                class="row example-row-stacked-to-horizontal"
                v-if="showSearch"
            >
                <div class="col-12 q-mt-md">
                    <slot name="search"></slot>
                </div>
            </div>
            <q-separator class="q-mt-md"></q-separator>
            <div class="row example-row-stacked-to-horizontal" v-if="showTool">
                <div class="col-12 q-mt-md">
                    <slot name="tool"></slot>
                </div>
            </div>
            <div class="row example-row-stacked-to-horizontal">
                <div class="col-12 q-mt-md">
                    <slot name="body"></slot>
                </div>
            </div>
            <div class="row example-row-stacked-to-horizontal">
                <div class="col-12">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import VBreadcrumbs from "components/VBreadcrumbs.vue";

defineProps({
    showSearch: {
        default: true,
        type: Boolean,
    },
    showTool: {
        default: true,
        type: Boolean,
    },
});

const myDiv = ref(null);

onMounted(() => {
    if (myDiv.value) {
        myDiv.value.style.height = `${window.innerHeight - 125}px`;
    }

    window.addEventListener("resize", updateDivHeight);

    function updateDivHeight() {
        if (myDiv.value) {
            myDiv.value.style.height = `${window.innerHeight - 125}px`;
        }
    }

    onUnmounted(() => {
        window.removeEventListener("resize", updateDivHeight);
    });
});
</script>
<style scoped></style>
