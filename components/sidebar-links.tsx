'use client';

import { usePathname } from 'next/navigation';

// Mirrors the classes Fumadocs applies to sidebar main links, so scoped
// links look identical to the built-in ones.
const linkClass =
  'relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none';

/**
 * A download link that only renders when the current route is under one of the
 * given path prefixes (e.g. show the Powergems download only on /powergems pages).
 */
export function ScopedDownloadLink({
  href,
  label,
  prefixes,
}: {
  href: string;
  label: string;
  prefixes: string[];
}) {
  const pathname = usePathname();
  const show = prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  if (!show) return null;

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={linkClass}>
      {label}
    </a>
  );
}
