<script setup>
import VLayout from "components/VLayout.vue";

async function open() {
    await window.ipcRenderer.select("source");
    window.ipcRenderer.selectOver(async (_, response) => {
        console.log(response);
    });
}
</script>

<template>
    <VLayout>
        <template #body>
            <q-btn @click="open" class="text-accent bg-primary" no-caps flat
                >open</q-btn
            >
        </template>
    </VLayout>
</template>

<style scoped lang="scss"></style>
