<script setup>
import VLayout from "components/VLayout.vue";

async function open() {
    const res = await window.Renderer.select("source");
    console.log(res);
}
</script>

<template>
    <VLayout>
        <template #body>
            <q-btn @click="open" class="text-accent bg-primary" no-caps flat
                >open
            </q-btn>
        </template>
    </VLayout>
</template>

<style scoped lang="scss"></style>
