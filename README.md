# Oakview Freight Services website

React + Vite migration for the Oakview Freight Services website.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## UI components

This project is configured for shadcn/ui-style components in `src/components/ui`, with the shared class helper at `src/lib/utils.js`. Add further components with the shadcn CLI after installing dependencies.

## Deployment safety

- The React migration is being developed on `feature/react-shadcn-migration`.
- The existing static website is preserved at `legacy/index.html`.
- The custom domain remains in the root `CNAME` file and is copied into the build output by the Pages workflow.
- The production deployment workflow is restricted to pushes to `main`. Do not merge the migration until the preview, form delivery, SEO files, analytics and GitHub Pages configuration have been checked.
- GitHub Pages must use **GitHub Actions** as its publishing source when the migration is approved for production.

## Important launch checks

1. Verify the contact form with FormSubmit and confirm its activation email, if required.
2. Compare all service and compliance copy with the current approved website.
3. Test the built site on mobile and desktop.
4. Confirm Google Tag Manager, canonical URL, structured data, robots.txt and sitemap.xml.
5. Confirm the custom domain and HTTPS after the production deployment is deliberately switched.
