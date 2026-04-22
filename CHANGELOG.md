# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Rebrand] - 2026-04-22

### Changed

- Product name is **Drishti AI Tutor**.
- Replaced logo (`public/drishti-icon.png`), updated metadata, footer, and access modal.
- Access-code cookie is `drishti_access`. Existing sessions must re-verify once.
- Seedance TTS request uses `uid: 'drishti'`.
- Docker service and volume are `drishti` and `drishti-data`. If upgrading an existing deployment, use `docker volume rename <old-volume> drishti-data` to preserve data.
- npm package name (`package.json`) is `drishti-ai-tutor`.
- OpenClaw skill directory is `skills/drishti/`; the skill's `name` frontmatter is `drishti`. External OpenClaw configs referencing any older skill name must be updated.
- `home.slogan` in all 5 locales uses a generic "AI tutor for interactive learning" tagline.
