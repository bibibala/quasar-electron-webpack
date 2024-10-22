import routes from "./routes";
import { route } from "quasar/wrappers";
import { createRouter, createWebHashHistory } from "vue-router";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/*store, ssrContext*/
export default route(function () {
    return createRouter({
        routes,
        history: createWebHashHistory(),
        scrollBehavior: () => ({ left: 0, top: 0 }),
        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
    });
});
