# EasyPod · 轻松愉快

The website for 轻松愉快, a Mandarin conversation podcast about films, games, and everyday life.

[Podcast website](https://podcast.chaoanli.com/) · [RSS feed](https://feed.xyzfm.space/6vnv3ae7g34t) · [Deployment guide](DEPLOY.md)

<img src="public/logo.png" alt="轻松愉快 podcast logo" width="160" />

## Features

- A featured episode and a full episode list built from the podcast RSS feed.
- Per-episode artwork synced from RSS on each build, with the show cover as a fallback.
- Browser audio playback and links to listening platforms.
- Responsive pages built with Astro, React, and Tailwind CSS.
- Static deployment to GitHub Pages.

The calendar and food pages are preserved in `src/archived-pages/`; they are not current routes in `src/pages/`.

## Local development

Use Node.js 22 and pnpm 10, as documented in [DEPLOY.md](DEPLOY.md).

```sh
git clone https://github.com/ChaoanLi/EasyPod.git
cd EasyPod
pnpm install --frozen-lockfile
pnpm run dev
```

Open the local URL printed by Astro.

```sh
pnpm run build
pnpm run preview
```

The build fetches the external podcast RSS feed and fonts for sharing images, so it requires network access.

## Editing the site

| Location | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage, RSS feed URL, and episode list |
| `src/config.ts` | Site title, description, language, and canonical domain |
| `src/constants.ts` | Social and listening-platform links |
| `src/components/` | Episode cards, player, navigation, and shared UI |
| `src/data/blog/` | Markdown content retained in the repository |
| `public/` | Logo and other static assets |
| `src/archived-pages/` | Retained calendar and food pages |

## Deployment

GitHub Actions builds and deploys the static site to GitHub Pages. See [DEPLOY.md](DEPLOY.md) for domain setup, scheduled RSS refreshes, and manual deployment.

## Contributing

Create a branch, make your changes, and open a pull request. Before submitting, run the relevant checks:

```sh
pnpm run lint
pnpm run build
```

## Credits and license

Based on the [AstroPaper](https://github.com/yyy0806/astro-paper) theme. See [LICENSE](LICENSE) for license terms.
