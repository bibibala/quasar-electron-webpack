const koffi = require("koffi");

// ../../resources/dll/test.dylib

// 加载系统动态库
const libSystem = koffi.load("libSystem.dylib");

// 声明要使用的系统函数
const getpid = libSystem.func("getpid", "int", []);
const sleep = libSystem.func("sleep", "uint", ["uint"]);

// 使用示例
export function testPrintf() {
    // 获取当前进程 ID
    const pid = getpid();
    console.log("Current process ID:", pid);

    // 休眠 1 秒
    console.log("Sleeping...");
    sleep(1);
    console.log("Done!");
}
