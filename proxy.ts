import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';

// The docs live at the site root, so `/powergems/faq` maps to `/powergems/faq.md`,
// which the rewrites in the Next.js config then serve.
const { rewrite: rewriteDocs } = rewritePath('/{*path}', '/{*path}.md');

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const result =
    isMarkdownPreferred(request) &&
    !/\.(md|txt)$/.test(pathname) &&
    (pathname === '/' ? '/index.md' : rewriteDocs(pathname));

  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl), {
      // this URL has two representations, selected by `Accept`
      headers: { Vary: 'Accept' },
    });
  }

  return NextResponse.next();
}

export const config = {
  // skip Next.js internals, API/OG/LLM routes and static files
  matcher: ['/((?!_next|api|og|llms\\.mdx|images|.*\\..*).*)'],
};
