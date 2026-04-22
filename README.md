<p align="center">
  <img src="public/drishti-icon.png" alt="Drishti AI Tutor" width="120"/>
</p>

<p align="center">
  <strong>Drishti AI Tutor</strong>
  <br/>
  Your AI tutor for interactive learning
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

## 📖 Overview

**Drishti AI Tutor** is an AI-powered interactive classroom that turns any topic or document into a rich, multi-agent learning experience. Upload a PDF or describe what you want to learn — AI teachers and AI classmates lecture, illustrate on a shared whiteboard, run quizzes, and hold live discussions with you.

### Highlights

- **One-click lesson generation** — Describe a topic or attach your materials; the AI builds a full lesson in minutes
- **Multi-agent classroom** — AI teachers and peers lecture, discuss, and interact with you in real time
- **Rich scene types** — Slides, quizzes, interactive HTML simulations, and project-based learning (PBL)
- **Whiteboard & TTS** — Agents draw diagrams, write formulas, and explain out loud
- **Export anywhere** — Download editable `.pptx` slides or interactive `.html` pages

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 20.9
- **pnpm** >= 10

### 1. Install

```bash
pnpm install
```

### 2. Configure

```bash
cp .env.example .env.local
```

Fill in at least one LLM provider key:

```env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=...
```

Or configure providers via `server-providers.yml`:

```yaml
providers:
  openai:
    apiKey: sk-...
  anthropic:
    apiKey: sk-ant-...
```

Supported providers: **OpenAI**, **Anthropic**, **Google Gemini**, **DeepSeek**, **MiniMax**, **Grok (xAI)**, **Doubao**, **GLM (Zhipu)**, **Ollama** (local), and any OpenAI-compatible API.

> **Recommended model:** **Gemini 3 Flash** — best balance of quality and speed. Set `DEFAULT_MODEL=google:gemini-3-flash-preview`.

### 3. Run

```bash
pnpm dev
```

Open **http://localhost:3000** and start learning.

### 4. Build for Production

```bash
pnpm build && pnpm start
```

### Optional: ACCESS_CODE (Shared Deployments)

Protect your deployment with a site-level password by setting `ACCESS_CODE` in `.env.local`:

```env
ACCESS_CODE=your-secret-code
```

When set, visitors see a password prompt before accessing the app; all API routes are protected.

### Docker Deployment

```bash
cp .env.example .env.local
docker compose up --build
```

### Optional: MinerU (Advanced Document Parsing)

[MinerU](https://github.com/opendatalab/MinerU) provides enhanced parsing for complex tables, formulas, and OCR. Set `PDF_MINERU_BASE_URL` (and `PDF_MINERU_API_KEY` if needed) in `.env.local`.

---

## ✨ Features

### Lesson Generation

A two-stage pipeline turns your prompt (or uploaded PDF) into a full classroom:

| Stage | What Happens |
|-------|-------------|
| **Outline** | AI analyzes your input and generates a structured lesson outline |
| **Scenes** | Each outline item becomes a rich scene — slides, quizzes, interactive modules, or PBL activities |

### Classroom Components

- **🎓 Slides** — AI teachers deliver lectures with voice narration, spotlight effects, and laser pointer animations.
- **🧪 Quiz** — Interactive quizzes (single/multiple choice, short answer) with real-time AI grading and feedback.
- **🔬 Interactive Simulation** — HTML-based interactive experiments — physics simulators, flowcharts, and more.
- **🏗️ Project-Based Learning (PBL)** — Pick a role and collaborate with AI agents on structured projects with milestones and deliverables.

### Multi-Agent Interaction

- **Classroom Discussion** — Agents proactively initiate discussions; you can jump in anytime or get called on.
- **Roundtable Debate** — Multiple agents with different personas discuss a topic, with whiteboard illustrations.
- **Q&A Mode** — Ask questions freely; the AI teacher responds with slides, diagrams, or whiteboard drawings.
- **Whiteboard** — AI agents draw on a shared whiteboard in real time — solving equations step by step, sketching flowcharts, or illustrating concepts visually.

### Export

| Format | Description |
|--------|-------------|
| **PowerPoint (.pptx)** | Fully editable slides with images, charts, and LaTeX formulas |
| **Interactive HTML** | Self-contained web pages with interactive simulations |
| **Classroom ZIP** | Full classroom export (course structure + media) for backup or sharing |

### And More

- **Text-to-Speech** — Multiple voice providers with customizable voices
- **Speech Recognition** — Talk to your AI teacher using your microphone
- **Web Search** — Agents search the web for up-to-date information during class (Tavily, Perplexity)
- **i18n** — Interface supports English, Chinese, Japanese, Russian, and Arabic
- **Dark Mode** — Easy on the eyes for late-night study sessions

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. Bug reports, feature ideas, and pull requests are all welcome.

### Project Structure

```
drishti-ai-tutor/
├── app/                        # Next.js App Router
│   ├── api/                    #   Server API routes (~18 endpoints)
│   │   ├── generate/           #     Scene generation pipeline (outlines, content, images, TTS …)
│   │   ├── generate-classroom/ #     Async classroom job submission + polling
│   │   ├── chat/               #     Multi-agent discussion (SSE streaming)
│   │   ├── pbl/                #     Project-Based Learning endpoints
│   │   └── ...                 #     quiz-grade, parse-pdf, web-search, transcription, etc.
│   ├── classroom/[id]/         #   Classroom playback page
│   └── page.tsx                #   Home page (generation input)
│
├── lib/                        # Core business logic
│   ├── generation/             #   Two-stage lesson generation pipeline
│   ├── orchestration/          #   LangGraph multi-agent orchestration (director graph)
│   ├── playback/               #   Playback state machine (idle → playing → live)
│   ├── action/                 #   Action execution engine (speech, whiteboard, effects)
│   ├── ai/                     #   LLM provider abstraction
│   ├── store/                  #   Zustand state stores
│   ├── audio/                  #   TTS & ASR providers
│   ├── export/                 #   PPTX & HTML export
│   └── i18n/                   #   Internationalization
│
├── components/                 # React UI components
├── packages/                   # Workspace packages (pptxgenjs, mathml2omml)
├── skills/drishti/             # OpenClaw skill for chat-driven classroom generation
└── public/                     # Static assets
```

### Key Architecture

- **Generation Pipeline** (`lib/generation/`) — Two-stage: outline generation → scene content generation
- **Multi-Agent Orchestration** (`lib/orchestration/`) — LangGraph state machine managing agent turns and discussions
- **Playback Engine** (`lib/playback/`) — State machine driving classroom playback and live interaction
- **Action Engine** (`lib/action/`) — Executes 28+ action types (speech, whiteboard draw/text/shape/chart, spotlight, laser …)

---

## 📄 License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
