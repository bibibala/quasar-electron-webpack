import { computed } from "vue";
import { useRouter } from "vue-router";

export function useRouteMeta() {
    const router = useRouter();

    const parentText = computed(() => {
        const matchedRoutes = router.currentRoute.value.matched;
        return matchedRoutes.length > 0 ? matchedRoutes[0].meta.title : "";
    });

    const text = computed(() => {
        return router.currentRoute.value.meta.title;
    });

    return {
        parentText,
        text,
    };
}
