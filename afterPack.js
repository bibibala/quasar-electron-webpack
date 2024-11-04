const fs = require("fs").promises;
const fsExtra = require("fs-extra");
const path = require("path");
const packageJson = require("./package.json");

const CONFIG = {
    appName: `${packageJson.productName}.app`,
    paths: {
        win32: {
            localeDir: ["locales"],
        },
        darwin: {
            localeDir: [
                "Contents",
                "Frameworks",
                "Electron Framework.framework",
                "Resources",
            ],
        },
    },
    architecturesToKeep: [
        "darwin_arm64",
        "darwin_x64",
        "win32_arm64",
        "win32_ia32",
        "win32_x64",
    ],
};

/**
 * 获取本地化目录路径
 * @param {string} baseDir - 基础目录
 * @param {string} platform - 平台名称 (win32 或 darwin)
 * @returns {string} 完整的本地化目录路径
 */
function getLocaleDir(baseDir, platform) {
    const platformConfig = CONFIG.paths[platform];
    if (!platformConfig) throw new Error(`Unsupported platform: ${platform}`);
    return path.join(
        platform === "win32" ? baseDir : path.join(baseDir, CONFIG.appName),
        ...platformConfig.localeDir
    );
}

/**
 * 处理 locale 目录
 * @param {string} localeDir - 本地化目录路径
 * @param {string} platform - 当前平台
 */
async function processLocaleFiles(localeDir, platform) {
    const files = await fs.readdir(localeDir);
    for (const file of files) {
        const filePath = path.join(localeDir, file);
        try {
            if (platform === "win32" && !file.startsWith("zh-CN.pak")) {
                await fs.unlink(filePath);
                console.log(`Removed Windows locale file: ${file}`);
            } else if (platform === "darwin" && file.endsWith(".lproj")) {
                const stats = await fs.stat(filePath);
                if (stats.isDirectory() && file !== "zh_CN.lproj") {
                    await fs.rm(filePath, { recursive: true, force: true });
                    console.log(`Removed macOS locale directory: ${file}`);
                }
            }
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

/**
 * 移除 Koffi 不需要的架构文件
 * @param {string} appOutDir - 应用输出目录
 * @param platform {string}
 */
async function removeKoffiPath(appOutDir, platform) {
    const filePath =
        platform === "win32"
            ? "resources/app.asar.unpacked/node_modules/koffi/build/koffi"
            : `${packageJson.productName}.app/Contents/Resources/app.asar.unpacked/node_modules/koffi/build/koffi`;
    const koffiPath = path.join(appOutDir, filePath);
    if (!(await fsExtra.pathExists(koffiPath))) {
        console.warn("Koffi build directory not found at:", koffiPath);
        return;
    }

    console.log("Starting Koffi build cleanup...");
    const files = await fsExtra.readdir(koffiPath);
    let removedCount = 0,
        totalSize = 0;

    for (const file of files) {
        const filePath = path.join(koffiPath, file);
        const stats = await fsExtra.stat(filePath);

        if (!CONFIG.architecturesToKeep.some((arch) => file.includes(arch))) {
            totalSize += stats.size;
            await fsExtra.remove(filePath);
            removedCount++;
            console.log(`Removed: ${file}`);
        }
    }

    console.log(`
Cleanup completed:
- Removed ${removedCount} files
- Saved ${(totalSize / 1024 / 1024).toFixed(2)} MB
- Kept architectures: ${CONFIG.architecturesToKeep.join(", ")}
    `);
}

/**
 * 主导出函数
 * @param {object} context - Electron上下文对象
 */
exports.default = async function (context) {
    try {
        const platform = context.electronPlatformName;
        const localeDir = getLocaleDir(context.appOutDir, platform);

        // 检查并处理 locale 目录
        if (await fsExtra.pathExists(localeDir)) {
            await processLocaleFiles(localeDir, platform);
            console.log(`Successfully processed locale files in: ${localeDir}`);
        } else {
            console.warn(`Locale directory does not exist: ${localeDir}`);
        }

        // 移除不必要的 Koffi 文件
        await removeKoffiPath(context.appOutDir, context.electronPlatformName);
    } catch (error) {
        console.error("Error during locale and Koffi cleanup:", error);
    }
};
