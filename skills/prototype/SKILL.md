---
name: prototype
description: Build or modify UI in this project. Use whenever creating screens, components, layouts, or styles, or when changing anything a user sees. Reads the project's Design MD first and treats it as the source of truth.
---

# Prototype

## Step 1 — Read Design MD first

Before writing or editing any UI code, read:

```
.design-kit/design.md
```

This is non-negotiable. Read it at the start of the task, not after drafting. If the
file is missing, tell the user to run
`npx --prefer-online github:OWNER/design-kit#main` and stop.

Design MD is the source of truth for visual design, layout, spacing, typography,
components, and interaction. When it conflicts with a UI library default, a framework
convention, or a pattern from another codebase, **Design MD wins**.

## Step 2 — Match the existing project

Design MD defines the rules; the codebase defines how they are expressed. Before adding
anything new, look for what already exists:

- Design tokens, theme files, or CSS variables
- An existing component that does most of what you need
- The styling approach in use — do not introduce a second one

Extend what is there. Only build a new component when nothing close exists.

## Step 3 — Build

- Start from the content and the primary action, then lay out around them.
- Use only values from the Design MD spacing and type scales. No arbitrary numbers.
- Build the narrow layout first, then widen.
- Use semantic HTML. Interactive elements get real hover, active, focus, and disabled
  states.
- Include the states that are easy to forget: loading, empty, error, and long content.

## Step 4 — Check before finishing

Re-read the anti-patterns section of Design MD and verify your work against it. Then
confirm:

- Every spacing and font size comes from the scale
- Exactly one primary action in the view
- Keyboard reachable, with a visible focus ring
- Text contrast meets 4.5:1
- Transitions are 120–200ms on `transform` or `opacity` only
- Empty and loading states exist for anything that fetches

## Reporting

When you finish, say which Design MD rules shaped the result, and flag anything you had
to deviate from along with the reason.
