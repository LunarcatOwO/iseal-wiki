import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { ScopedDownloadLink } from '@/components/sidebar-links';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    // Each download link only shows on its own wiki's pages. SealLib is needed
    // by both plugins, so it shows on both.
    links: [
      {
        type: 'custom',
        children: (
          <ScopedDownloadLink
            href="https://modrinth.com/plugin/powergems"
            label="Download PowerGems"
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
