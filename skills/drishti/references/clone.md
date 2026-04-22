# Clone Or Reuse Existing Repo

## Goal

Establish which Drishti AI Tutor checkout will be used for setup and runtime actions.

## Procedure

1. Check whether Drishti AI Tutor already exists locally.
2. If a checkout exists, show the path and ask whether to reuse it.
3. If no checkout exists, propose cloning the repo and ask for confirmation.
4. After clone, confirm dependency installation separately.

## Recommended Path

- Recommended: reuse an existing checkout if it is already on the target branch.
- Otherwise: clone a fresh checkout, then install dependencies.

## Commands

Clone:

```bash
git clone <drishti-ai-tutor-repo-url> drishti-ai-tutor
cd drishti-ai-tutor
```

Install dependencies:

```bash
pnpm install
```

## Confirmation Requirements

- Ask before `git clone`.
- Ask before `pnpm install`.
- If the repo is dirty, tell the user and ask whether to continue with that checkout.
