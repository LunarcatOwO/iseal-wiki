# ISeal Wiki

A [Fumadocs](https://fumadocs.dev) documentation site that hosts the wikis for ISeal's Minecraft
plugins. Readers switch between wikis with the **switcher at the top of the sidebar**.

Currently included:

- **PowerGems**: gems with unique abilities (`content/docs/powergems`)
- **Parkour Project**: free-running moves and style scoring (`content/docs/parkour`)

## Adding a wiki

Each wiki is a **root folder** in `content/docs/`. A folder shows up in the switcher when its
`meta.json` sets `"root": true`, along with a `title`, `description` and optional Lucide `icon`:

```json
{
  "title": "Parkour Project",
  "description": "Free-running moves and style scoring",
  "root": true,
  "pages": ["index", "quick-start", "..."]
}
```

See the [sidebar docs](https://fumadocs.dev/docs/ui/navigation/sidebar) for more. To add another
wiki, create a new root folder in `content/docs/` and it appears in the switcher automatically.

## Development

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Project layout

- `content/docs/index.mdx`: the home page that links to each wiki.
- `content/docs/<wiki>/`: one root folder per wiki.
- `lib/source.ts`: loads the content ([`loader()`](https://fumadocs.dev/docs/headless/source-api)) and sets up the `llms.txt` files.
- `lib/layout.shared.tsx`: shared layout options (nav title, download links).
- `lib/shared.ts`: app name, routes and GitHub info.
- `app/api/search/route.ts`: the search endpoint.

Every page is also available as Markdown by adding `.md` to its URL (for example `/powergems/faq.md`),
and `/llms.txt` lists every page for AI tools.

## Learn more

- [Fumadocs](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This project is licensed under the **GNU General Public License v3.0 or later**. See the
[LICENSE](./LICENSE) file for the full text.
