# Contributing to Drishti AI Tutor

Thank you for your interest in contributing to Drishti AI Tutor! This guide will help you get started.

## How to Contribute

| Contribution type | What to do |
| --- | --- |
| **Bug fix** | Open a PR directly (link the issue if one exists) |
| **Extending existing features** (e.g. adding a new model provider, new TTS engine) | Open a PR directly |
| **New feature or architecture change** | Open an issue to discuss **before** opening a PR |
| **Design / UI change** | Open an issue first — include mockups or screenshots |
| **Refactor-only PR** | Not accepted unless a maintainer explicitly requests it |
| **Documentation** | Open a PR directly |

## Claiming Issues

To avoid duplicate effort, **comment on an issue** to claim it before you start working. A maintainer will assign you.

- If **no PR or meaningful update** (WIP commit, progress comment) appears within **1 day**, the issue may be reassigned.
- If an issue is already assigned, reach out to the assignee first to coordinate.
- If you can no longer work on a claimed issue, please leave a comment so others can pick it up.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20.9.0
- [pnpm](https://pnpm.io/) (latest)
- A copy of `.env.local` — see [`.env.example`](.env.example) for reference

## Getting Started

```bash
pnpm install
cp .env.example .env.local
# Edit .env.local with your API keys
pnpm dev
```

## Development Workflow

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feat/your-feature main
   ```
2. **Branch naming convention:**
   - `feat/` — new features or enhancements
   - `fix/` — bug fixes
   - `docs/` — documentation changes
3. Make your changes and **test locally**.
4. Run **all CI checks** before committing (see below).
5. Open a **Pull Request** against `main`.

## Before You Submit a PR

Run the following checks locally:

```bash
pnpm format
pnpm lint --fix
npx tsc --noEmit
pnpm check:i18n-keys
```

If formatting or lint auto-fixes produce changes, include them in your commit.

### Local Testing

Before marking a PR as **Ready for Review**, you **must**:

1. **Verify your goal** — confirm the PR achieves what it set out to do.
2. **Regression test** — manually check existing functionality still works.
3. **Run CI checks locally** (see above).

Keep the PR in **Draft** until you're confident it works.

### PR Guidelines

- **Link to an issue** — use `Closes #123` or `Fixes #456` in the PR description.
- **Keep PRs focused** — one concern per PR; do not mix unrelated changes.
- **Describe what and why** — fill out the PR template.
- **Include screenshots** — for UI changes, show before/after.
- **Ensure CI passes** before requesting review.
- **All UI text must be internationalized (i18n)** — do not hardcode user-facing strings.

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`, `perf`, `style`

Examples:

```
feat(tts): add Azure TTS provider
fix(whiteboard): prevent canvas from resetting on window resize
docs: update CONTRIBUTING.md
```

## AI-Assisted PRs 🤖

PRs built with AI tools (Claude, Codex, Cursor, etc.) are welcome. We ask for transparency and self-review:

- **Mark it** — note in the PR title or description that the PR is AI-assisted.
- **AI-review your own code first** — run an AI code review on your changes and address the findings before requesting human review.
- **You are responsible for what you submit** — understand the code, not just the prompt.

AI-assisted PRs are held to the same quality standard as any other PR.

## Project Structure

```
drishti-ai-tutor/
├── app/              # Next.js app router pages and API routes
├── components/       # React components
├── lib/              # Shared utilities and core logic
├── packages/         # Internal packages (mathml2omml, pptxgenjs)
├── public/           # Static assets
├── lib/i18n/locales/ # i18n translation files (en, zh, ja, ru, ar)
└── .github/          # Issue templates, PR template, CI workflows
```

## Security Vulnerabilities

Please report security vulnerabilities privately rather than opening a public issue. See [SECURITY.md](SECURITY.md).

## License

By contributing to Drishti AI Tutor, you agree that your contributions will be licensed under the [AGPL-3.0 License](LICENSE).
