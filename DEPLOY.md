# GitHub Pages deployment

The podcast is a static Astro site at `https://podcast.chaoanli.com/`.

## One-time GitHub setup

1. In this repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. Set **Custom domain** to `podcast.chaoanli.com` and save it **before** changing DNS.
3. Run **Deploy podcast to GitHub Pages** from the Actions tab, or push to `main`.
4. At the existing DNS provider, add `podcast CNAME chaoanli.github.io`.
5. After DNS validation and certificate issuance, enable **Enforce HTTPS**.

The `public/CNAME` file documents the intended domain. With a custom Actions
deployment, GitHub's Pages settings control the domain; the file alone does not
configure the domain.

## Automatic updates

Pushes to `main` build and deploy the site. A daily scheduled build at 03:23 UTC
refreshes the external podcast RSS feed. Scheduled runs can be delayed by GitHub.
GitHub disables scheduled workflows in public repositories after 60 days without
repository activity; if necessary, re-enable the workflow in Actions. No service
token or paid hosting is needed for this public repository's standard Pages build.

Build or RSS failures leave the last successful deployment in place. To refresh
manually, use **Actions → Deploy podcast to GitHub Pages → Run workflow**.

## Local verification

Use Node.js 22 and pnpm 10:

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run preview
```

The build requires network access to the podcast RSS and Google Fonts used to
generate sharing images. Audio, artwork, and the music player still use their
existing external services; changing website hosting does not move those assets.

The existing Vercel project and old domain can remain active during migration.
The new GitHub deployment does not delete or reconfigure that project.
