const fs = require("fs").promises;
const path = require("path");
const packageJson = require("./package.json");

const CONFIG = {
    // 应用名称
    appName: `${packageJson.productName}.app`,

    // 各平台的路径配置
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
};

/**
 * 获取本地化目录路径
 * @param {string} baseDir - 基础目录
 * @param {string} platform - 平台名称 (win32 或 darwin)
 * @returns {string} 完整的本地化目录路径
 */
function getLocaleDir(baseDir, platform) {
    const platformConfig = CONFIG.paths[platform];
    if (!platformConfig) {
        throw new Error(`Unsupported platform: ${platform}`);
    }

    let fullPath =
        platform === "win32" ? baseDir : path.join(baseDir, CONFIG.appName);

    return path.join(fullPath, ...platformConfig.localeDir);
}

exports.default = async function (context) {
    try {
        const platform = context.electronPlatformName;
        const localeDir = getLocaleDir(context.appOutDir, platform);

        // 检查目录是否存在
        try {
            await fs.access(localeDir);
        } catch (error) {
            console.warn(`Locale directory does not exist: ${localeDir}`);
            return;
        }

        // 读取目录内容
        const files = await fs.readdir(localeDir);

        // 处理每个文件
        for (const file of files) {
            const filePath = path.join(localeDir, file);

            try {
                if (platform === "win32") {
                    // Windows 平台: 只保留 zh-CN.pak
                    if (!file.startsWith("zh-CN.pak")) {
                        await fs.unlink(filePath);
                        console.log(`Removed Windows locale file: ${file}`);
                    }
                } else {
                    // macOS 平台: 只处理 .lproj 目录
                    if (file.endsWith(".lproj")) {
                        const stats = await fs.stat(filePath);
                        if (stats.isDirectory() && file !== "zh_CN.lproj") {
                            await fs.rm(filePath, {
                                recursive: true,
                                force: true,
                            });
                            console.log(
                                `Removed macOS locale directory: ${file}`
                            );
                        }
                    }
                }
            } catch (error) {
                console.error(`Error processing ${file}:`, error);
            }
        }

        console.log(`Successfully processed locale files in: ${localeDir}`);
    } catch (error) {
        console.error("Error in locale processing:", error);
        throw error;
    }
};
