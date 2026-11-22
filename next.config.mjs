import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Standalone output keeps the Docker runtime image small
  output: 'standalone',
  async rewrites() {
    // Every page is also available as Markdown (`/powergems/faq.md`), along with
    // the per-wiki `llms.txt` / `llms-full.txt` files. Paths already under
    // `/llms.mdx` are left alone so a URL is never rewritten twice.
    return [
      {
        source: '/:path((?!llms\\.mdx/).+)\\.md',
        destination: '/llms.mdx/:path.md',
      },
      {
        source: '/:path((?!llms\\.mdx/).+)\\.txt',
        destination: '/llms.mdx/:path.txt',
      },
    ];
  },
};

export default withMDX(config);
