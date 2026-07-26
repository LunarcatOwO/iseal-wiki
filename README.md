# ISeal Wikis

A unified [Fumadocs](https://fumadocs.dev) documentation site hosting multiple wikis for ISeal's
Minecraft plugins. Readers switch between wikis using the **sidebar docs switcher**.

Currently included:

- **Powergems** — custom ability gems (`content/docs/powergems`)
- **Parkour Project** — movement & flow-scoring plugin (`content/docs/parkour`)

## How the multi-wiki switcher works

Each wiki is a **root folder** under `content/docs/`. A folder becomes a switcher entry by setting
`"root": true` in its `meta.json`, along with a `title`, `description`, and Lucide `icon`:

```json
{
  "title": "Parkour Project",
  "description": "Movement, flow & style scoring",
  "icon": "Footprints",
  "root": true,
  "pages": ["index", "quick-start", "..."]
}
```

Fumadocs then renders the root folders as a dropdown at the top of the sidebar (see the
[sidebar tabs docs](https://fumadocs.dev/docs/ui/navigation/sidebar)). To add another wiki, create a
new root folder under `content/docs/` and it appears in the switcher automatically.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project layout

- `content/docs/index.mdx` — the landing hub that links into each wiki.
- `content/docs/<wiki>/` — one root folder per wiki.
- `lib/source.ts` — content source adapter ([`loader()`](https://fumadocs.dev/docs/headless/source-api)); the `lucideIconsPlugin` resolves `icon` names in `meta.json`.
- `lib/layout.shared.tsx` — shared layout options (nav title, links).
- `lib/shared.ts` — app name and GitHub info.
- `source.config.ts` — Fumadocs MDX config / frontmatter schema.
- `app/api/search/route.ts` — search route handler.

## Learn more

- [Fumadocs](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is licensed under the **GNU General Public License v3.0 or later**. See the
[LICENSE](./LICENSE) file for the full text.
