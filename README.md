# reactv

一个基于 **React 16 + Redux + React Router** 开发的移动端图书阅读应用学习项目。

项目围绕图书浏览、书城、内容发现、用户中心及账号管理等场景展开，使用 Axios 处理网络请求，并通过 JSON Server 和 Mock.js 搭建本地模拟数据服务。

本项目主要用于学习 React 组件化开发、前端路由、状态管理、接口交互和移动端页面开发。

## 🛠 技术栈

| 技术 | 版本 | 说明 |
| --- | --- | --- |
| React | 16.13 | 前端 UI 框架 |
| React Router DOM | 5.2 | 页面路由管理 |
| Redux | 4.0 | 全局状态管理 |
| Redux Thunk | 2.3 | Redux 异步操作 |
| Axios | 0.19 | HTTP 请求 |
| Mock.js | 1.1 | 模拟数据生成 |
| JSON Server | 0.16 | 本地模拟 REST API |
| Webpack | 4.42 | 模块打包 |
| Babel | 7 | JavaScript 转译 |
| Jest | 24.9 | 测试工具 |
| Multer | 1.4 | Mock 服务文件上传处理 |

## ✨ 项目功能

### 📚 首页与书城

- 图书内容展示
- 图书分类及列表
- 图书推荐数据展示
- Banner 内容展示
- 图书详情页面

### 🔍 发现模块

- 发现页面
- 图书及推荐内容展示
- 基于 Mock API 的数据请求

### 👤 用户中心

- 用户登录
- 用户注册
- 用户个人中心
- 用户设置页面
- 用户信息状态管理
- 使用 LocalStorage 辅助保存用户状态

### 🔄 状态管理与接口交互

- 使用 Redux 管理应用状态
- 使用 Redux Thunk 支持异步操作
- 使用 Axios 处理 HTTP 请求
- 通过 JSON Server 提供模拟接口
- 使用 Mock.js 生成测试数据

> 本项目为学习练习代码。以上内容根据页面路由、依赖和模拟接口整理，部分业务交互的完整程度需要结合实际运行效果确认。

## 📁 项目结构

```text
reactv/
├── config/                 # Webpack 及开发环境配置
├── mock/                   # Mock API 服务
│   ├── app.js              # 模拟服务器入口
│   └── db.js               # 模拟数据配置
├── public/                 # 静态资源
├── scripts/                # 启动、构建和测试脚本
├── src/                    # React 源代码
│   ├── assets/             # 样式与资源
│   ├── components/         # 公共组件
│   ├── layouts/            # 页面布局
│   ├── pages/              # 业务页面
│   │   ├── home/           # 首页
│   │   ├── bookMall/       # 书城
│   │   ├── find/           # 发现
│   │   ├── user/           # 用户中心
│   │   ├── detail/         # 图书详情
│   │   ├── signIn/         # 登录
│   │   ├── reg/            # 注册
│   │   └── error/          # 错误页面
│   ├── plugins/            # Axios、Redux 等配置
│   ├── App.js              # 应用主组件及路由
│   └── index.js            # 应用入口
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/s1626197353/reactv.git
cd reactv
```

### 2. 安装依赖

确保本地已安装 Node.js 和 Yarn。

```bash
yarn install
```

项目使用较早版本的 React、Webpack 和相关依赖。建议使用兼容的 Node.js 环境。

### 3. 启动前端服务

```bash
yarn start
```

默认访问地址：

```text
http://localhost:3000
```

### 4. 启动 Mock 数据服务

项目包含独立的模拟 API 服务。

打开另一个终端，运行：

```bash
yarn mock
```

Mock 服务默认监听：

```text
http://localhost:3335
```

注意：`mock` 脚本依赖 `nodemon` 命令。如果系统提示找不到该命令，需要先安装 Nodemon。

### 5. 构建生产版本

```bash
yarn build
```

构建完成后，文件输出至 `build/` 目录。

### 6. 运行测试

```bash
yarn test
```

项目使用 Jest 及 React Testing Library 相关工具进行测试。

## 📡 Mock API

项目通过 JSON Server 和 Mock.js 模拟后端接口。

### 主要数据资源

| 资源 | 说明 |
| --- | --- |
| `/mock/book` | 图书数据 |
| `/mock/banner` | Banner 数据 |
| `/mock/likeData` | 图书推荐数据 |
| `/mock/find` | 发现页面数据 |
| `/mock/user` | 模拟用户数据 |

### 用户接口

| 请求方式 | 接口 | 说明 |
| --- | --- | --- |
| POST | `/mock/signIn` | 模拟用户登录 |
| POST | `/mock/reg` | 模拟用户注册 |

### 登录请求示例

```http
POST http://localhost:3335/mock/signIn
Content-Type: application/json

{
  "username": "hello",
  "password": "hello"
}
```

Mock 服务中预设了测试账号：

```text
Username: hello
Password: hello
```

登录成功后，模拟接口会返回用户信息及 Token。

该 Token 仅用于本地模拟接口流程，不具备正式身份认证系统的安全性。

### 模拟数据

`mock/db.js` 中配置了以下测试数据：

- 200 条图书数据
- 20 条 Banner 数据
- 20 条图书推荐数据
- 50 条发现模块数据
- 1 组模拟用户数据

这些数据通过 Mock.js 生成，用于开发调试和页面展示。

## 🧩 前端路由

项目通过 React Router 管理页面。

| 路由 | 对应页面 |
| --- | --- |
| `/home` | 首页 |
| `/bookMall` | 书城 |
| `/find` | 发现 |
| `/user` | 用户中心 |
| `/detail/:_id` | 图书详情 |
| `/signIn` | 登录 |
| `/reg` | 注册 |
| `/set` | 用户设置 |

访问根路径 `/` 时，自动重定向到 `/home`。

应用还会根据当前路由控制顶部 Header 和底部 Footer 的展示状态。

## ⚙️ 开发说明

### Redux 状态管理

项目通过 Redux 管理应用共享状态，并在入口文件中接入 Store。

应用初始化时，会尝试从浏览器 LocalStorage 读取用户信息，并同步到 Redux。

### Axios 网络请求

项目在 `src/plugins/axios` 中集中引入 Axios 相关配置，用于处理前端接口请求。

### 本地模拟服务

Mock 服务基于 JSON Server 搭建，支持模拟用户登录注册、数据查询、文件上传处理和接口响应延迟。

## 📚 学习内容

本项目涉及以下前端开发知识：

- React 类组件与生命周期
- JSX 页面开发
- React Router 路由管理
- Redux 全局状态管理
- Redux Thunk 异步操作
- Axios 请求封装与接口交互
- LocalStorage 本地数据存储
- Mock.js 模拟数据生成
- JSON Server 本地接口开发
- Webpack 构建与配置
- 移动端页面布局

## ⚠️ 注意事项

1. 本项目是早期 React 学习项目，使用 React 16 及较早版本的 Webpack。
2. 部分依赖已较旧，可能无法在最新 Node.js 环境下直接运行。
3. 前端页面依赖的接口可能需要本地 Mock 服务配合。
4. Mock 登录仅用于测试，不适合真实用户认证。
5. 项目未经过完整的生产环境安全审查，不建议未经修改直接用于正式业务。

## 📝 项目说明

本仓库为个人早期 React 前端开发学习与实践项目。

主要用于保存代码、回顾 React 技术知识，以及学习前端组件开发、路由、状态管理和模拟接口交互。

## 👤 Author

GitHub: [@s1626197353](https://github.com/s1626197353)
