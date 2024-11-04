# Quasar Electron Template

## 功能说明

### build 优化
- 在afterPack钩子里,我删除了除了中文外的语言包,适配了 win 和 mac,我自己尝试过很多次,删除之后大概可以减少 30mb
- 对 koffi 的优化,我删除了 除 build 之外的所有目录 只保留了,koffi/build/koffi,我所需要的平台的架构.node文件
- 删除了之后可以减少 70mb 左右,无用的文件很多


### 调用 dll 方法和 路径动态处理
- 我使用的是koffi

####
```js
    // 如下方，你的文件名称必须为
    // win32     test-win32.dll
    // win64     test-win64.dll
    // mac-arm       test-arm.dylib
    // mac-x86       test-x86.dylib

    const path = getLibraryPath('test')
    // 返回  "path/to/test.dylib"
    koffi.load(path)
```
- path 是最终打包后的动态路径
- 我还对架构进行了区分,只区分了 mac 和 win; 只不过需要采用我的明明规则


### 数据存储
- 我采用的方案是 indexDB, 数据量的问题可以保证
- 同时还不需要rebuild或者一些其他的复杂配置,更加容易上手,多方考虑没有采用 sqlite3

### 日志捕获
- 我准备采用 Sentry
- 不采用 electron-log 的原因,我觉得最终还是要,上传日志到自己的服务器,比较繁琐,不如直接用人家的解决方案;
- 功能非常全面,推荐接入
- 配置比较简单可以看看官方文档,我这里没有添加

## Install the dependencies

```bash
pnpm i
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
pnpm run lint
```

### Format the files

```bash
pnpm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).
