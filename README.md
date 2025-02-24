<h1  align="center">China's Charm of Mountains ⛰️ and Water 💧</h1>

[![CCCC_Project](https://img.shields.io/badge/GitHub-CCCC__Project-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/2311719626/CCCC_Project)

> English | [简体中文](/Other/README.zh-CN.md)

## Introduction

This is a project for the 2025 Chinese Collegiate Computing Competition (CCCC), aiming to showcase the charm of China's landscapes.

> **Official Website** of CCCC : [Link](https://jsjds.blcu.edu.cn/index.htm)

## Technology Stack

### Frontend

[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![React-DOM](https://img.shields.io/badge/react--dom-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
[![Zustand](https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Backend

[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Apifox](https://img.shields.io/badge/Apifox-FF6C37?style=for-the-badge&logo=apifox&logoColor=white)](https://www.apifox.cn/)
[![PicGo](https://img.shields.io/badge/PicGo-2C2E3B?style=for-the-badge&logo=picgo&logoColor=white)](https://github.com/Molunerfinn/PicGo)
[![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)](https://pm2.keymetrics.io/)

## Features

```mermaid
graph TD
    A[Page Features] --> B[Landscape Wiki]
    B --> C[Detailed Display]
    C --> D[Present high-definition images, precise descriptions, geographical features, and celebrity anecdotes of famous landscapes across the country. Each landscape is associated with multiple classic poems with annotations, and provides introductions and purchase links for local specialty products.]
    B --> E[Visualization]
    E --> F[Use Apache Echarts and Ant Design Charts to visually display data such as altitude, climbing time, visitor volume, and estimated budget in the form of bar charts, line charts, and 3D models. Show the historical changes of landscapes through a timeline, such as the travel routes of ancient literati and geomorphological evolution.]
    B --> G[Map Navigation]
    G --> H[Utilize the Gaode Open Platform API to accurately mark the location of landscapes on the map, provide route planning and navigation functions, support navigation from the user's current location to the scenic spot and within the scenic spot, and display surrounding facilities ，such as parking lots and restaurants.]
    A --> I[Travel Footprints]
    I --> J[Travel Notes]
    J --> K[Provide users with a convenient travel note writing interface, supporting mixed text and images, video insertion, automatically recording travel time and location, and associating with the visited landscapes to perform database CRUD operations, allowing users to review and edit their footprints at any time. Considering ICP filing restrictions, explore compliant interaction forms, such as generating static web pages for sharing or guiding to social platforms for sharing.]
    A --> L[Landscape Stories Forum]
    L --> M[Interactive Community]
    M --> N[Build a user posting and commenting system where users can share travel stories and cultural insights. The backend sets up a review mechanism to ensure healthy and compliant content. Also provide quick links to third-party platforms such as Zhihu and Xiaohongshu for users to expand their reading.]
```

## Web Page Routes

```mermaid
graph TD
A[首页 /] --> B[山水胜览 /pages]
B --> C[山水景点详情 /pages/:page-id]
A --> F[山水足迹 /notes]
F --> G[单个游记 /notes/:note-id]
A --> H[山水故事 /posts]
H --> I[单个帖子 /posts/:post-id]
A --> J[用户注册 /users/register]
A --> K[用户登录 /users/login]
A --> L[用户个人中心 /users/:user-id]
A --> M[搜索 /search]
A --> N[关于我们 /about]
```

## Announcement

This project is licensed under the `Apache 2.0` Open Source License.

In compliance with the open source license, this code can be used in various scenarios. However, it must not be copied and presented as personal work for competition purposes.

## Sub-repository

[![CCCC_Pic](https://img.shields.io/badge/GitHub-CCCC__Pic-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/2311719626/CCCC_Pic)

> Implement an image bed in combination with PicGo.

---

## Code Reading Guide

### Backend Core Code

> Backend\src

```
Backend/
├── .env                # 环境配置
├── .gitignore          # Git忽略规则
├── package.json        # 依赖配置
├── src/                # 核心代码
│   ├── config/         # 系统配置
│   ├── controllers/    # 业务控制器
│   ├── middlewares/    # 中间件
│   ├── models/         # 数据模型
│   ├── routes/         # API路由
│   ├── services/       # 业务服务
│   ├── utils/          # 工具类
│   └── server.js       # 服务入口
├── public/             # 静态资源
└── tests/              # 测试用例
```

```mermaid
%% 后端核心架构全景图
graph TD
classDef entry fill:#90EE90,stroke:#333;
classDef core fill:#87CEEB,stroke:#333;
classDef support fill:#FFA07A,stroke:#333;
classDef data fill:#FFB6C1,stroke:#333;
classDef task fill:#DDA0DD,stroke:#333;
classDef config fill:#778899,stroke:#333;

subgraph 入口层
    server.js[[server.js]]:::entry --> app.js[[app.js]]:::entry
end

subgraph 核心层
    app.js --> Routes
    Routes --> blog.route.js:::core
    Routes --> users.route.js:::core
    Routes --> poem.route.js:::core
    
    blog.route.js --> blog.controller.js:::core
    blog.controller.js --> blog.service.js:::core
    blog.service.js --> blog.model.js:::data
end

subgraph 支持模块
    app.js --> middlewares:::support
    middlewares --> jwt.middleware.js:::support
    middlewares --> multer.middleware.js:::support
    middlewares --> validators:::support
    
    app.js --> utils:::support
    utils --> log.util.js:::support
    utils --> cache.util.js:::support
    utils --> response.util.js:::support
end

subgraph 数据层
    blog.model.js --> MongoDB:::data
    redis.config.js:::config --> Redis:::data
end

subgraph 定时任务
    app.js --> logsclean.js:::task
    logsclean.js --> winston-logger:::support
end

subgraph 配置层
    server.js --> db.config.js:::config
    server.js --> redis.config.js:::config
    app.js --> jwt.config.js:::config
end

blog.route.js -.-> validators/blog.validator.js
blog.service.js -.-> cache.util.js
log.util.js -.-> winston-logger
jwt.middleware.js -.-> jwt.config.js
```