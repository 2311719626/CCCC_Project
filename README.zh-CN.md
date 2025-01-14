<h1 align="center">⛰️💧 山水韵中国</h1>

[![CCCC_Project](https://img.shields.io/badge/GitHub-CCCC__Project-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/2311719626/CCCC_Project)

> [English](./README.md) | 简体中文

## 介绍

这是一个为 2025 年中国大学生计算机竞赛（CCCC）准备的参赛项目，旨在展示中国山水的魅力。

> 中国大学生计算机设计大赛 **官网**：[链接](https://jsjds.blcu.edu.cn/index.htm)

## 技术栈

### 前端

[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![React-DOM](https://img.shields.io/badge/react--dom-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
[![Zustand](https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### 后端

[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Apifox](https://img.shields.io/badge/Apifox-FF6C37?style=for-the-badge&logo=apifox&logoColor=white)](https://www.apifox.cn/)
[![PicGo](https://img.shields.io/badge/PicGo-2C2E3B?style=for-the-badge&logo=picgo&logoColor=white)](https://github.com/Molunerfinn/PicGo)
[![VS Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![PM2](https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=pm2&logoColor=white)](https://pm2.keymetrics.io/)

## 特性

```mermaid
graph TD
    A[功能需求] --> B[山水胜览 Wiki]
    B --> C[详细展示]
    C --> D[针对全国知名山水，呈现高清图片、精准简述、地理特征介绍、名人轶事分享，每处山水关联多首经典诗词并附赏析，提供当地特色农产品介绍及购买链接。]
    B --> E[可视化显现]
    E --> F[利用Apache Echarts和Ant Design Charts，将海拔、攀登时间、游客访问量、预估预算等数据以柱状图、折线图、3D模型等形式直观显现，通过时间轴展示山水的历史变迁，如古代文人游历轨迹、地貌演变。]
    B --> G[地图导航]
    G --> H[借助高德开放平台API，在地图上精准标注山水位置，提供线路规划与导航功能，支持从用户当前位置到景区及景区内各景点导航，显示周边配套设施（如停车场、餐厅）。]
    A --> I[山水足迹 游记]
    I --> J[游记记录]
    J --> K[为用户提供便捷的游记撰写界面，支持图文混排、视频插入，自动记录旅游时间、地点，可关联所游历山水，实现数据库的增删改查操作，便于用户随时回顾、编辑足迹。考虑到ICP备案限制，探索合规的交互形式，如生成静态网页分享或引导至社交平台分享。]
    A --> L[山水故事 论坛]
    L --> M[互动社区]
    M --> N[搭建用户发帖、评论系统，用户可分享旅行故事、文化感悟，后台设置审核机制，确保内容健康合规。同时提供跳转至知乎、小红书等第三方平台的快捷入口，方便用户拓展阅读。]
```

## 页面路由

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

## 声明

本项目使用 `Apache 2.0` 开源协议。

在遵守开源协议的基础下，可以在各种场景下使用此代码，但是不得复制此代码作为个人作品参与比赛。

## 子仓库

[![CCCC_Pic](https://img.shields.io/badge/GitHub-CCCC__Pic-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/2311719626/CCCC_Pic)

> 结合 PicGo 实现图床功能。
