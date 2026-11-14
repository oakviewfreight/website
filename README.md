# Oakview Freight Services website

This repository contains the original static website for [Oakview Freight Services](https://www.oakviewfreight.com/).

## Website files

- `index.html` — complete website, including page content, styling, scripts, freight estimator and enquiry form.
- `CNAME` — custom domain configuration for `www.oakviewfreight.com`.
- `robots.txt` — search engine crawling instructions.
- `sitemap.xml` — XML sitemap for search engines.
- `.github/workflows/deploy.yml` — deploys the static website to GitHub Pages.

## Deployment

Changes pushed to `main` trigger the GitHub Pages deployment workflow. The workflow publishes the root `index.html` and the domain and SEO files.

The site is plain HTML/CSS/JavaScript; no Node.js build step is required.
