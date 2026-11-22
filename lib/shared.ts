import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'ISeal Wiki';
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';

export const gitConfig = {
  user: 'lunarcatowo',
  repo: 'iseal-wiki',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}

/** The `.md` file of a page: `<page>.md`, or `/index.md` for the home page. */
export function getPageMarkdownUrl(page: { url: string }) {
  return page.url === '/' ? '/index.md' : `${page.url.replace(/\/$/, '')}.md`;
}
