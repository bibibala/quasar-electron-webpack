import { defineStore } from "pinia";

export const usePublic = defineStore("counter", {
    state: () => ({
        ACTIVE_INDEX: 11,
        OPEN_MENU: 1,
    }),
});
