<p align="center">
  <img src="public/drishti-icon.png" alt="Drishti AI Tutor" width="120"/>
</p>

<p align="center">
  <strong>Drishti AI Tutor</strong>
  <br/>
  你的互动式 AI 学习助手
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=flat-square" alt="License: AGPL-3.0"/></a>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/LangGraph-1.1-purple?style=flat-square" alt="LangGraph"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

<p align="center">
  <a href="./README.md">English</a> | <a href="./README-zh.md">简体中文</a>
</p>

## 📖 项目简介

**Drishti AI Tutor** 是一个 AI 驱动的互动课堂，能够将任何主题或文档转化为丰富的多智能体学习体验。上传 PDF 或描述你想学的内容——AI 教师和 AI 同学会进行讲解、在共享白板上绘图、组织测验、并与你展开实时讨论。

### 核心亮点

- **一键生成课堂** — 描述一个主题或附上学习材料,AI 几分钟内构建完整课堂
- **多智能体课堂** — AI 老师和智能体同学实时授课、讨论、互动
- **丰富的场景类型** — 幻灯片、测验、HTML 交互式模拟、项目制学习(PBL)
- **白板 & 语音** — 智能体实时绘制图表、书写公式、语音讲解
- **灵活导出** — 下载可编辑的 `.pptx` 幻灯片或交互式 `.html` 网页

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 20.9
- **pnpm** >= 10

### 1. 安装

```bash
pnpm install
```

### 2. 配置

```bash
cp .env.example .env.local
```

至少填写一个 LLM 服务商的 API Key:

```env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...
```

或通过 `server-providers.yml` 配置:

```yaml
providers:
  openai:
    apiKey: sk-...
  anthropic:
    apiKey: sk-ant-...
```

支持的服务商:**OpenAI**、**Anthropic**、**Google Gemini**、**DeepSeek**、**MiniMax**、**Grok (xAI)**、**豆包**、**智谱 GLM**、**Ollama**(本地),以及任意兼容 OpenAI 的 API。

> **推荐模型:Gemini 3 Flash** — 质量与速度的最佳平衡。设置 `DEFAULT_MODEL=google:gemini-3-flash-preview`。

### 3. 运行

```bash
pnpm dev
```

打开 **http://localhost:3000** 开始学习。

### 4. 生产构建

```bash
pnpm build && pnpm start
```

### 可选:ACCESS_CODE(共享部署)

在 `.env.local` 中设置 `ACCESS_CODE` 可为你的部署启用站点级密码:

```env
ACCESS_CODE=your-secret-code
```

设置后,访问者在进入应用前需输入密码,所有 API 路由也会受保护。

### Docker 部署

```bash
cp .env.example .env.local
docker compose up --build
```

---

## ✨ 功能特性

### 课堂生成

两阶段流水线将你的提示或 PDF 转化为完整课堂:

| 阶段 | 说明 |
|------|------|
| **大纲** | AI 分析输入并生成结构化课程大纲 |
| **场景** | 每个大纲项生成为一个具体场景——幻灯片、测验、交互模块或 PBL 活动 |

### 课堂组件

- **🎓 幻灯片** — AI 教师进行语音讲解,支持聚光灯、激光笔等动画
- **🧪 测验** — 单选/多选/简答互动测验,AI 实时打分与反馈
- **🔬 交互式模拟** — 基于 HTML 的交互实验、物理模拟器、流程图等
- **🏗️ 项目制学习(PBL)** — 选择角色,与 AI 智能体协作完成带里程碑的结构化项目

### 多智能体互动

- **课堂讨论** — 智能体主动发起讨论,你可随时插话或被点名发言
- **圆桌辩论** — 多个智能体以不同人设讨论主题,白板配图
- **问答模式** — 自由提问,AI 教师用幻灯片、图表或白板绘图作答
- **白板** — AI 智能体在共享白板上实时绘图——分步求解方程、绘制流程图、可视化概念

### 导出

| 格式 | 说明 |
|------|------|
| **PowerPoint (.pptx)** | 可编辑幻灯片,包含图像、图表、LaTeX 公式 |
| **交互式 HTML** | 自包含网页,内嵌交互模拟 |
| **课堂 ZIP** | 完整课堂导出(课程结构 + 媒体),用于备份或分享 |

### 其他

- **文本转语音** — 多种语音服务商,支持自定义音色
- **语音识别** — 使用麦克风与 AI 教师对话
- **网络搜索** — 上课过程中搜索最新信息(Tavily、Perplexity)
- **多语言** — 支持英文、中文、日文、俄文、阿拉伯文
- **深色模式** — 适合夜间学习

---

## 🤝 参与贡献

参见 [CONTRIBUTING.md](CONTRIBUTING.md)。欢迎提交 Bug 报告、功能建议和 Pull Request。

---

## 📄 许可证

本项目采用 [GNU Affero General Public License v3.0](LICENSE) 许可。
