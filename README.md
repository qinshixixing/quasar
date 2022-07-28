# {{name}}

{{description}}

配置文件：build.config.js

### 开发步骤

1. 安装依赖

```shell
npm i
```

2. 运行项目

```shell
npm run dev
```

### 目录说明

#### src

存放源代码（逻辑代码和局部类型说明）

src 子目录说明：

##### request

存放数据请求和处理逻辑（与后端或原生）

##### components

组件目录

##### layout

布局目录

##### pages

页面目录

##### store

全局公共动态数据存储

#### data

全局公共静态数据存储

##### style

全局样式目录

##### util

全局工具函数和数据

##### index.tsx

入口文件

##### index.html

全局 html

#### env.ts

打包时从 node 带来的环境变量

#### type

全局类型说明

#### static

静态资源

### 打包

```shell
npm run build
```

### 参考文档

1. 项目代码规范配置
   https://github.com/qinshixixing/ebullience/tree/master/packages/webpack-project-config

2. 项目打包规则配置（build.config.js）
   https://github.com/qinshixixing/ebullience/tree/master/packages/webpack

3. 项目脚手架配置
   https://github.com/qinshixixing/lunarlight/tree/master/packages/cli

   https://github.com/qinshixixing/ebullience/tree/master/packages/init

4. 工具库参考文档（每个库文档在对应 packages/库名文件夹的 README.md 中）
   https://github.com/qinshixixing/fortissimo
