/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = configure((ctx) => {
    return {
        boot: ["axios", "permission"],
        css: ["app.scss"],
        extras: ["mdi-v7"],
        build: {
            gzip: {
                algorithm: "brotliCompress",
            },
            minify: true,
            distDir: "release",
            preloadChunks: true,
            sourceMap: false,
            // ignorePublicFolder: false,
            // analyze: true,
            env: {
                WEB_APP_URL: ctx.dev
                    ? "http://192.168.3.100:40084"
                    : "https://test.bingce.com",
            },
            // c isClient: true, isServer: false
            chainWebpack(chain) {
                chain
                    .plugin("eslint-webpack-plugin")
                    .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
            },
            extendWebpack(
                cfg,
                {
                    /*c*/
                }
            ) {
                if (!ctx.dev) {
                    // cfg.output.publicPath = "./";
                    cfg.optimization.concatenateModules = false;
                    cfg.optimization.minimizer = [
                        new TerserPlugin(),
                        new CssMinimizerPlugin(),
                    ];
                }
            },
        },
        devServer: {
            open: false,
            port: 9999,
        },
        framework: {
            lang: "zh-CN",
            iconSet: "mdi-v7",
            plugins: ["Loading", "Notify", "LoadingBar", "SessionStorage"],
            config: {
                screen: {
                    bodyClasses: true,
                },
                loadingBar: {
                    color: "primary",
                    size: "3px",
                    position: "top",
                },
                loading: {
                    // QSpinnerGears
                    spinner: "QSpinnerIos",
                    message: "正在加载中,请稍后......",
                },
                // 设置默认颜色
                brand: {
                    positive: "#48BB78",
                    negative: "#F56565",
                    info: "#4299E1",
                    warning: "#FEAE65",
                    // 主题色
                    primary: "#67ae5b",
                    secondary: "#FFFFFF",
                    accent: "#F2F3F5",
                    dark: "#1e2128",
                },
            },
        },
        electron: {
            bundler: "builder",
            builder: {
                $schema:
                    "https://raw.githubusercontent.com/electron-userland/electron-builder/master/packages/app-builder-lib/scheme.json",
                asar: true,
                productName: "${productName}",
                copyright:
                    "Copyright © 2024 Zhengzhou bingce Technology Co., Ltd.",
                mac: {
                    target: "dmg",
                    extendInfo: {
                        CFBundleName: "${productName}",
                        CFBundleDisplayName: "${productName}",
                    },
                    icon: "src-electron/icons/icon.icns",
                    artifactName:
                        "${productName}-Mac-${version}-${arch}.${ext}",
                },
                dmg: {
                    icon: "src-electron/icons/icon.icns",
                    window: {
                        width: 540,
                        height: 380,
                    },
                    contents: [
                        {
                            x: 130,
                            y: 220,
                        },
                        {
                            x: 410,
                            y: 220,
                            type: "link",
                            path: "/Applications",
                        },
                    ],
                },
                win: {
                    target: "nsis",
                    icon: "src-electron/icons/icon.ico",
                    artifactName:
                        "${productName}-Windows-${version}-${arch}-Setup.${ext}",
                },
                nsis: {
                    oneClick: false,
                    perMachine: false,
                    shortcutName: "${productName}",
                    allowToChangeInstallationDirectory: true,
                    deleteAppDataOnUninstall: true,
                },
            },
        },
    };
});
