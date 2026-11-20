# Rahul Paswan — Portfolio

Personal site for Rahul Paswan: Software Engineer (backend & cloud), SaaS builder, and
writer. React + Vite + Tailwind CSS + Framer Motion.

Built to the taste skill's rules (`.claude/skills/taste-skill`): plain headings that name
things, one accent colour, real logos and real product screenshots, every text readable at
every moment, and crisp hover and press states on everything you can click. Motion is
balanced: hero words rise on load, project cards stack as you scroll, the system diagrams
run live pulses, one statement lights word by word, and the theme wipes in as a circle.
All of it rests under `prefers-reduced-motion`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Adding your photo

Put the file in `public/` (for example `public/portrait.jpg`, about 1000x800) and set
`profile.avatarImage: "/portrait.jpg"` in `src/data/content.js`. The hero card swaps the
monogram for it.

## Editing content

**Almost every change you want to make is in [`src/data/content.js`](src/data/content.js).**
Copy, links, project details, experience bullets, tags and article URLs all live there;
the components just render it.

A few specifics:

| I want to…                        | Do this                                                                 |
| --------------------------------- | ----------------------------------------------------------------------- |
| Update the resume                 | Replace `public/resume.pdf`. Nothing else changes — both buttons follow it. |
| Publish the notification article  | Set `articles.notificationPipeline.url`. The "Coming soon" card becomes a live link automatically, and so does the link under the case study. |
| Add or change a project           | Edit the `projects` array.                                              |
| Change social links               | Edit the `links` object.                                                |
| Set the live domain for social previews | `index.html` — set `og:url` and make `og:image` an absolute URL. |
| Refresh a project screenshot      | Replace `public/shot-<project>.jpg` (1400×875). |
| Change a palette                  | `src/index.css` — the two blocks at the top are the whole colour system. |

## Structure

```
src/
├── App.jsx              page order
├── index.css            Tailwind layers, both themes' colour tokens, buttons, cards, links
├── data/content.js      ALL copy and links
├── theme/               provider (circle-wipe theme switch) and the useTheme hook
├── ui/                  Arrow, Logo, SectionHead, ThemeToggle, Reveal, FlowDiagram
└── sections/            Nav, Hero, WhatIDo, Projects, Pipeline, Experience, Ai, About,
                         Writing, Founders, Contact
public/icons/            real brand logos (CC0, Gil Barbara's logos) fetched with the
                         taste skill: node .claude/skills/taste-skill/scripts/icons.mjs fetch <name> --out public/icons --base /icons
```

## Colours

`src/index.css` holds the whole colour system: two blocks of RGB channels (`:root` for
light, `[data-theme="dark"]` for dark). Components only use the Tailwind names `bg`,
`surface`, `raised`, `ink`, `muted`, `line` and `accent`. If you change `--ink` or
`--muted`, update the matching hex values in `ui/Reveal.jsx` too.

## Diagrams

`ui/FlowDiagram.jsx` draws a live system diagram from a list of nodes and edges, with a
wide (left to right) and a narrow (top to bottom) layout. Pulses run along the edges every
3.2 s, and a pause button stops them. Pass `groups` to make it a router that lights one
branch per cycle (see `sections/Ai.jsx`).
