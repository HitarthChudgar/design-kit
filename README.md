# Design Kit

One command that drops the latest shared design guidance and AI skills into a project.

```
Design team updates → git push → one command → design.md + skills → AI prototyping
```

Replace `OWNER` with your GitHub user or org before anyone else uses this.

## Install / update

Run inside any project:

```bash
npx --prefer-online github:OWNER/design-kit#main
```

`--prefer-online` skips a stale npx cache. `#main` is the branch tip, not a tag.

It writes:

```
.design-kit/
├── design.md        # Design MD — source of truth for UI work
└── manifest.json    # { "version": "1.1.2" }

.claude/skills/
├── prototype/SKILL.md
└── copy/SKILL.md
```

Run it again any time to sync. It overwrites only the files above and never touches
your source code or `package.json`.

Requires Node.js 18+.

## Local development

```bash
git clone <repo> && cd design-kit
npm link
```

`npm link` registers the `design-kit` command globally from this folder.

### Test it in another folder

```bash
mkdir /tmp/test-app && cd /tmp/test-app
design-kit
```

Check the result with `ls -R .design-kit .claude`. Edits to `guidance/` or `skills/`
apply immediately — no rebuild, no reinstall.

Unlink when you're done:

```bash
npm unlink -g @org/design-kit
```

## Releasing

1. Update `guidance/design.md` or the skills.
2. Add a `CHANGELOG.md` heading and bump the version: `npm version patch|minor|major`
3. Push `main`.

Users pick it up on their next `npx --prefer-online github:OWNER/design-kit#main`.
Bump the version or they get the new files with no "What's new" notes.
