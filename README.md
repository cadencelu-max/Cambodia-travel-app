# 🇰🇭 柬埔寨旅行指南 · Cambodia Travel Guide

> Hola！
>我是一名对编程与计算机零基础的社科学生、人类学爱好者、兼职「地球街溜子」的 Cadence Lu，这是我做的第一个 vibe coding 作品。
> 从一次柬埔寨旅行计划出发，把一份 Markdown 攻略，一步步变成了一款能看、能玩、能规划路线的旅行指南 App——也是我学习AI编程的第一块里程碑。
> 我对人类学与「文化与艺术产业创业」方向的兴趣，让我更关心一件事：**一个普通人如何与陌生的地方相遇**。这个 App 是工具，也是我观察世界的方式。

🔗 **在线体验**：https://cadencelu-max.github.io/Cambodia-travel-app/

---

## 📸 预览

| 首页 | 助手 | 美食 |
|---|---|---|
| ![首页](assets/screenshots/home.jpg) | ![攻略](assets/screenshots/guide.jpg) | ![美食](assets/screenshots/food.jpg) |

| 地图路线 | 深色模式 |
|---|---|
| ![地图](assets/screenshots/map.jpg) | ![深色模式](assets/screenshots/home-dark.jpg) |

---

## ✨ 功能

- **🏠 首页**：顶部全文搜索框（搜景点 / 美食 / 攻略正文，点结果直接跳转）+ 4 张轮播大图（中文·英文·高棉语标题，可滑动）
- **🏛️ 景点**：多层导航（暹粒 → 城市/吴哥窟 → 小圈·大圈·外圈），**35 个景点**带图片、历史介绍，详情页含**门票费用 + 官网购票链接**（可点击直跳）与「怎么去」交通板块
- **🍜 美食**：每道菜配照片和「口感 / 做法 / 价格」详情
- **📋 助手**（原「攻略」）：签证（临时免签标注）、落地流程、交通、常用语速查、行前清单、安全贴士、天气季节
- **🗺️ 地图**：小圈/大圈/外圈预设路线 + 自己点红心 DIY 路线；**多天「我的行程」**（经典 5 日/7 日一键生成，可自由编辑每天景点与顺序）；全程导航支持 **Google Maps / 高德地图** 双选择；行程可**一键保存为图片**（下载 / 分享）
- **💰 记账（多货币）**：按美元/人民币/瑞尔分别记录，自动合计
- **🌙 深色模式**：右上角一键切换，自动记住偏好
- **🌐 中英双语**：右上角一键切换 中文 / English——界面框架、美食页、景点详情页和助手正文均已翻译

## 🛠️ 技术

- 纯 **HTML / CSS / JavaScript**，无框架、无构建步骤
- **Leaflet** 地图（本地加载）+ 高德地图瓦片（国内可稳定访问）
- **GitHub Pages** 免费部署
- 所有数据都存在浏览器本地（localStorage），无需服务器

## 🚀 本地运行

直接双击 `index.html`，或用 VS Code 的 Live Server 打开。

## 🗺️ 路线图

- [x] 上线 GitHub Pages
- [x] 深色模式 / 预算计算器 / 地图导航双选择
- [x] 离线模式（PWA：无网也能看）
- [ ] 「我的旅行」页面：旅行后加入自己的照片与手记

## 📮 联系

- 邮箱：luqiutong.skywalker@gmail.com
- GitHub：[cadencelu-max/Cambodia-travel-app](https://github.com/cadencelu-max/Cambodia-travel-app)

---

*Made by Cadence Lu · 我的第一个编程作品*
