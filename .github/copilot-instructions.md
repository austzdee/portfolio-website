<!-- Repository-specific instructions for AI coding agents -->
# Copilot / AI Agent Guidance — portfolio-website

Purpose: provide immediate, actionable context to make safe edits to this static portfolio site.

- **Project type:** plain static site (no build tooling). Files live at repository root: index.html, about.html, project.html, contact.html. Styles are in css/styles.css; images in images/; downloadable CV in assets/docs/Daniel_Okafor_CV.pdf.
- **Deployment:** Hosted via GitHub Pages at https://austzdee.github.io/portfolio-website/. There is no CI/build step — a `git push` to `main` triggers Pages. Do not add build tooling unless asked.

Key patterns and conventions (concrete examples):
- Semantic HTML + accessibility: the site uses a visible `a.skip-link` (index.html) and ARIA attributes (e.g. `aria-current="page"`, `aria-labelledby`). Preserve these when refactoring.
- CSS naming: lightweight BEM-like patterns are used. Example classes: `site-nav`, `nav__links`, `hero`, `hero__title`, `hero__actions`, `btn`, `btn--primary`, `btn--secondary` (see css/styles.css).
- Mobile menu pattern: a hidden checkbox `.menu-toggle` is used with the sibling selector ` .menu-toggle:checked + .hamburger + nav ul` to toggle the mobile nav—keep this structure if editing navigation behavior.
- Responsive breakpoints: CSS relies on `@media (max-width: 768px)` and `@media (max-width: 480px)`; test changes at these widths.
- Downloads/assets: the CV is referenced in multiple places as `assets/docs/Daniel_Okafor_CV.pdf`. When changing filenames, update every reference (nav, hero actions, main CV section).
- Open Graph / social images: index.html includes absolute OG links pointing to the GitHub Pages URL (e.g. `images/og-image.png`). If changing repo name or username, update these meta tags.

Developer workflows (what to do locally and checks):
- Preview the site with a static server (recommended):
  - Windows: `python -m http.server 8000` (run in project root) or use the VS Code Live Server extension.
- Quick sanity checks before commit:
  - Open browser devtools, check console for JS errors, verify responsive layout at 768px and 480px, validate the skip-link appears when focused.
  - Verify downloads and internal links (CV, project pages, image paths) work locally.
- Deploy: commit and push to `main`. GitHub Pages is already configured to serve from this branch.

What agents should not do (project-specific):
- Do not introduce package managers (npm/yarn) or build pipelines unless the user requests them — this repository is intentionally minimal.
- Do not rename or relocate `assets/docs` without updating all HTML references.

Helper examples (concrete edits):
- To mark a different nav item as active: move `aria-current="page"` to the desired `<a>` inside `.nav__links`. CSS rule: `.nav__links a[aria-current="page"]` provides styling.
- To add a new project card: add an element with class `gallery-item` inside the `.gallery` container; images should be added to `images/` and referenced by relative path.
- To fix mobile nav not opening: ensure a visually-hidden checkbox with class `menu-toggle` exists immediately before the `.hamburger` and `<nav>` elements (preserve the sibling selector order).

Important files to inspect when making changes:
- [index.html](index.html) — main layout, meta tags, navigation examples
- [about.html](about.html) — about section structure and timeline example
- [project.html](project.html) — projects gallery markup and link patterns
- [contact.html](contact.html) — contact form/links and link colours in CSS
- [css/styles.css](css/styles.css) — global styles, breakpoints, BEM-like selectors
- [assets/docs/Daniel_Okafor_CV.pdf](assets/docs/Daniel_Okafor_CV.pdf) — downloadable CV referenced in multiple places

When updating documentation (README.md / screenshots):
- Keep README screenshot file paths in sync with the `images/` filenames. The README currently references URL-encoded names (e.g. `About%20Page.png`) — prefer renaming files to remove spaces and update both README and HTML if you change names.

If anything is unclear or you need deeper instructions (tests, adding a build step, or refactoring patterns), ask before making large structural changes.

Please review and tell me if you'd like more examples (e.g., exact nav checkbox markup, or a sample gallery-item snippet) or changes to the tone/length of this file.
