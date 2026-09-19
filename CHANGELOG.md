# Changelog

## 1.1.3

- Design MD: added link guidance (underline in body text, not in nav or buttons).

## 1.1.2

- Install and update from GitHub (`npx --prefer-online github:OWNER/design-kit#main`)
  instead of the npm registry.

## 1.1.1

- Design MD: added tooltip guidance (hover/focus, Escape to dismiss, never the only
  label).

## 1.1.0

- Updating now prints what changed since the version the project was on, read from this
  changelog.
- Design MD: added toast guidance (when to use one, placement, timing, errors).

## 1.0.1

- Design MD: added icon guidance (set, stroke weight, sizing, when an icon can replace a
  label).

## 1.0.0

- Initial release.
- `design-kit` CLI installs Design MD and skills into the current project.
- Installs `.design-kit/design.md` and `.design-kit/manifest.json`.
- Installs the `prototype` and `copy` skills into `.claude/skills/`.
- Re-running the command syncs the managed files to the installed version.
