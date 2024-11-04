# Surveyor Adjustment

## 功能说明

### build 优化
- 在afterPack钩子里,我删除了出中文外的语言包,适配了 win 和 mac,我自己尝试过很多次,删除之后大概可以减少 30mb
- 对 koffi 的优化,我删除了 除 build 之外的所有目录 只保留了,koffi/build/koffi,我所需要的平台的架构.node


### 调用 dll 方法和 路径动态处理
- 我使用的是koffi

### 数据存储
- 我采用的方案是 indexDB, 数据量的问题可以保证
- 同时还不不需要build的时候rebuild,配置比较简单
- 更加容易上手,多方考虑没有采用 sqlite3

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
