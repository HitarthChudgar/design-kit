---
name: copy
description: Write or review product copy — button labels, headings, empty states, error messages, tooltips, onboarding, and notifications. Use whenever user-facing text is being added or changed.
---

# Copy

Product copy is interface, not decoration. It should help someone act, and then get out
of the way.

## Voice

Clear, direct, and human. Speak to the user as "you" and to the product as "we" only
when we are genuinely doing something on their behalf.

- Plain words over jargon: "delete" not "purge", "sign in" not "authenticate"
- Active voice: "We couldn't save your changes" not "Changes could not be saved"
- Present tense
- Sentence case everywhere — headings, buttons, labels, menu items
- No exclamation points, no emoji, no jokes in flows where something can go wrong

## Length

Cut every sentence to its shortest honest form.

- Buttons: 1–3 words
- Headings: under 8 words
- Body and helper text: one or two sentences
- Error messages: one sentence, plus a fix

Delete these on sight: "simply", "just", "easily", "please note", "in order to",
"powerful", "seamless", "robust", "unleash".

## Buttons and labels

Start with a verb and name the outcome. The label should be understandable without the
surrounding sentence.

| Instead of | Write |
| --- | --- |
| Submit | Send invite |
| OK | Got it |
| Yes / No | Delete project / Cancel |
| Click here | View report |

For destructive actions, name what is being destroyed: "Delete 3 files", not "Confirm".

## Errors

Every error answers three things: what happened, why, and what to do next. Never blame
the user, and never expose a raw error code as the whole message.

- Bad: "Error 403: Forbidden"
- Good: "You don't have access to this project. Ask an admin for an invite."

- Bad: "Invalid input"
- Good: "Enter an email address, like name@company.com"

## Empty states

Say what belongs here, why it's useful, and give the action that fills it.

> **No projects yet**
> Projects keep your prototypes and team in one place.
> [Create project]

## Headings and body

The heading carries the meaning; the body adds only what the heading can't. If the body
text repeats the heading, delete it. Front-load the important words — people scan the
first two or three.

## Consistency

One name per concept, used everywhere. If it's a "project" in the nav, it is not a
"workspace" in the settings page. Keep the same word in the UI, the docs, and the error
messages.

## Before you ship

- Read it aloud. If you wouldn't say it, rewrite it.
- Cover the boundaries: zero, one, many, very long, and failed.
- Check that numbers, dates, and units are formatted consistently.
- Confirm every term matches what the rest of the product calls it.
