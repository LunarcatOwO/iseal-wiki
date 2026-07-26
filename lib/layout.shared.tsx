import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { ScopedDownloadLink } from '@/components/sidebar-links';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    // Download links are scoped to their wiki — each only appears on its own
    // pages. SealLib is a dependency of both plugins, so it shows on both.
    links: [
      {
        type: 'custom',
        children: (
          <ScopedDownloadLink
            href="https://modrinth.com/plugin/powergems"
            label="Download Powergems"
            prefixes={['/powergems']}
          />
        ),
      },
      {
        type: 'custom',
        children: (
          <ScopedDownloadLink
            href="https://modrinth.com/plugin/parkourproject"
            label="Download Parkour Project"
            prefixes={['/parkour']}
          />
        ),
      },
      {
        type: 'custom',
        children: (
          <ScopedDownloadLink
            href="https://modrinth.com/plugin/seallib"
            label="Download SealLib"
            prefixes={['/powergems', '/parkour']}
          />
        ),
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
