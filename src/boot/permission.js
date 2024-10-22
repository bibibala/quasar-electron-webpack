// import { boot } from "quasar/wrappers";
// import { Key } from "src/utils/Key";
// import { haveToken } from "src/utils/useStorage";
//
// export default boot(({ router }) => {
//     router.beforeEach((to, from, next) => {
//         if (to.meta.auth) {
//             if (haveToken()) {
//                 next();
//             } else {
//                 next({ name: Key.LOGIN });
//             }
//         } else {
//             next();
//         }
//         if (to.meta.title) {
//             document.title = to.meta.title;
//         } else {
//             document.title = to.matched[0].meta.title;
//         }
//     });
// });
