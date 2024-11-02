const packageJson = require("./package.json");

module.exports = {
    bundler: "builder",
    builder: {
        appId: "com.bingce.adjustment",
        $schema:
            "https://raw.githubusercontent.com/electron-userland/electron-builder/master/packages/app-builder-lib/scheme.json",
        asar: true,
        productName: packageJson.productName,
        afterPack: "afterPack.js",
        copyright: packageJson.author.name,
        // 解压文件
        asarUnpack: [
            "resources/dll/*.dll",
            // "**/node_modules/**/*.node"
        ],
        extraResources: [
            {
                from: "resources/dll/",
                to: "dll/",
                filter: ["**/*"],
            },
        ],
        files: [
            "**/*",
            "!**/.npmrc",
            "!**/vendor.js.LICENSE.txt",
            "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
            "!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
            "!**/node_modules/*.d.ts",
            "!**/node_modules/.bin",
            "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
            "!.editorconfig",
            "!**/._*",
            "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
            "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
            "!**/{appveyor.yml,.travis.yml,circle.yml}",
            "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
            "!**/node_modules/*/{.git,.npm,.DS_Store,LICENSE,license,License}",
        ],
        mac: {
            target: "dmg",
            extendInfo: {
                CFBundleName: packageJson.productName,
                CFBundleDisplayName: packageJson.productName,
            },
            icon: "src-electron/icons/icon.icns",
            artifactName: "${productName}-Mac-${version}-${arch}.${ext}",
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
            shortcutName: packageJson.productName,
            allowToChangeInstallationDirectory: true,
            deleteAppDataOnUninstall: true,
        },
    },
    chainWebpackMain(chain) {
        chain.module
            .rule("node")
            .test(/native_modules[/\\].+\.node$/)
            .use("node-loader")
            .loader("node-loader")
            .end();
        chain.module
            .rule("node-modules")
            .test(/[/\\]node_modules[/\\].+\.(m?js|node)$/)
            .parser({ amd: false })
            .use("asset-relocator-loader")
            .loader("@vercel/webpack-asset-relocator-loader")
            .options({
                outputAssetBase: "native_modules",
            });
        chain.target("electron-main");
    },
    extendWebpackMain(cfg) {
        cfg.externals = [...Object.keys(packageJson.dependencies || {})];
    },
    chainWebpackPreload(chain) {
        chain.module
            .rule("node")
            .test(/native_modules[/\\].+\.node$/)
            .use("node-loader")
            .loader("node-loader")
            .end();

        chain.module
            .rule("node-modules")
            .test(/[/\\]node_modules[/\\].+\.(m?js|node)$/)
            .parser({ amd: false })
            .use("asset-relocator-loader")
            .loader("@vercel/webpack-asset-relocator-loader")
            .options({
                outputAssetBase: "native_modules",
            });

        chain.target("electron-preload");
    },
    extendWebpackPreload(cfg) {
        cfg.externals = [...Object.keys(packageJson.dependencies || {})];
    },
};
