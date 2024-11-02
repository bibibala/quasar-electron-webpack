<script setup>
import VLayout from "components/VLayout.vue";
import { addProject } from "src/plugins/dexie/project";

async function open() {
    window.Renderer.select("source");
    console.log(await addProject({ name: "233", age: "22", sex: "nan" }));
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
