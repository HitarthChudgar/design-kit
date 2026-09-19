# Design MD

Shared design guidance for prototypes. This file is the source of truth for visual
design, layout, spacing, typography, components, and interaction.

When guidance here conflicts with a default from a UI library or a habit from another
codebase, this file wins.

## Principles

1. **Clarity over cleverness.** A person should understand the screen before they
   understand the design.
2. **One primary action per screen.** Everything else is secondary or tertiary.
3. **Content sets the layout**, not the other way around. Never invent filler to fill a
   grid.
4. **Default to fewer elements.** Removing a divider, a border, or a heading is usually
   an improvement.
5. **Calm by default.** Color and motion are for meaning, not decoration.

## Spacing

Use a 4px base scale. Only these values:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`

- Space *within* a component: 4–12
- Space *between* related elements: 16–24
- Space *between* sections: 48–96
- Related things sit closer together than unrelated things. If two groups look equally
  spaced, the grouping has failed.

## Layout

- Max content width: 1200px for app shells, 720px for reading-heavy pages.
- Page gutters: 16 on mobile, 24 on tablet, 32+ on desktop.
- Breakpoints: 640 / 768 / 1024 / 1280.
- Prefer flex and grid over absolute positioning.
- Design the narrow layout first; a wide layout is the narrow one with more room.
- Align to a consistent left edge. Centered body text is for hero sections only.

## Typography

- One typeface for UI. A second face only for display or code.
- Type scale: `12 · 14 · 16 · 18 · 20 · 24 · 30 · 36 · 48`
- Body text is 16px minimum. Never ship 13px body copy.
- Line height: 1.5 for body, 1.2 for headings 24px and up.
- Weights: 400 body, 500 for UI labels and emphasis, 600 for headings. Avoid 700+.
- Line length: 60–80 characters for paragraphs.
- Use sentence case for headings, labels, and buttons. Not Title Case. Never ALL CAPS
  except for small eyebrow labels with letter-spacing.

## Color

- Build from neutrals. Most of the interface is background, border, and text.
- Exactly one accent color for primary actions and active states.
- Semantic colors: success, warning, danger, info. Use them only for their meaning.
- Text contrast: 4.5:1 minimum for body, 3:1 for large text and icons.
- Never use color as the only signal. Pair it with an icon, label, or shape.
- Borders should be low contrast — a subtle neutral, not a hard black line.

## Elevation and shape

- Radius: 6px for controls, 8–12px for cards, 999px for pills and avatars.
- Keep radius consistent; a nested element's radius should be smaller than its parent's.
- Shadows are soft, large, and low opacity. Use them to signal layering
  (menus, popovers, modals), not to decorate static cards.
- Prefer a border over a shadow for resting-state separation.

## Components

**Buttons** — Three levels: primary (filled accent), secondary (neutral border),
tertiary (text only). One primary per view. Height 36–40px, horizontal padding 16.
Label is a verb: "Save changes", not "Submit" or "OK".

**Inputs** — Always paired with a visible label above the field. Placeholder text is a
hint, never a substitute for a label. Show validation errors below the field, in text,
after the user leaves the field, not on every keystroke.

**Cards** — A card must contain one coherent thing. Padding 16–24, consistent across
a set. Avoid nesting cards inside cards.

**Tables** — Left-align text, right-align numbers, align headers with their column.
Use tabular figures. Row height 44–52. Keep actions in a single trailing column.

**Modals** — Only for a decision that must block. Give them a title, one primary action,
and a dismiss path. Never open a modal from a modal.

**Empty states** — Every list has one. Say what goes here and provide the action that
creates the first item.

**Toasts** — For confirmation that doesn't need a decision. One at a time, bottom or top
right, auto-dismiss after 4–6s. Anything the user must act on is not a toast. Errors stay
until dismissed.

**Icons** — One icon set, one stroke weight. Size 16 or 20 to match adjacent text, and
align to the text baseline. Icons support a label; they replace one only when the meaning
is universal (close, search, menu).

**Tooltips** — Supplementary info only, never the only label or a required instruction.
Show on hover and focus, dismiss on Escape. Don't put errors or actions in a tooltip.

**Links** — Underline links in body text. Don't underline nav or button-style links.

## Interaction

- Every interactive element needs visible hover, active, focus, and disabled states.
- Focus rings are non-negotiable. Use `:focus-visible`, never `outline: none`.
- Touch targets: 44×44px minimum.
- Transitions: 120–200ms, ease-out. Entrances can be slightly slower than exits.
- Animate `transform` and `opacity` only. Not `width`, `height`, or `top`.
- Respect `prefers-reduced-motion` — drop movement, keep fades.
- Loading: skeletons for known layouts, spinners only for actions under a button.
- Optimistic updates for actions that almost always succeed; show a clear recovery path
  when they don't.
- Destructive actions require confirmation and should be styled as danger, not primary.

## Accessibility

- Semantic HTML first. A `button` is a `<button>`.
- One `<h1>` per page, with headings in order.
- All images need `alt`; decorative images get `alt=""`.
- Everything must be reachable and operable with a keyboard alone.
- Icon-only controls need an accessible name.

## Anti-patterns

- Arbitrary spacing values like 13px or 27px
- Multiple competing primary buttons
- Gradients, glows, or heavy shadows used as decoration
- Text below 14px anywhere, or below 16px for body
- Placeholder-only form labels
- Centered long-form text
- Motion longer than 300ms on routine interactions
- Disabled buttons with no explanation of what's missing
