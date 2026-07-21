# KivoPlan v1

A Vercel-ready Next.js MVP for an AI-powered life planning platform.

## Included

- Responsive SaaS landing page
- Six planning categories
- AI roadmap onboarding flow
- Demo roadmap generation without an API key
- OpenAI-powered roadmap route when configured
- Dashboard preview
- Stripe Checkout-ready subscription button
- Vercel configuration

## Upload to GitHub

1. Open your empty `kivoplan-app` repository.
2. Select **Add file → Upload files**.
3. Open this unzipped project folder.
4. Upload everything inside the folder, including `app`, `components`, `public`, and the files at the root.
5. Commit the changes.

Do not upload a `.env` or `.env.local` file. Secret values belong in Vercel.

## Deploy to Vercel

1. Sign in to Vercel with GitHub.
2. Select **Add New → Project**.
3. Import `kivoplan-app`.
4. Vercel should detect Next.js automatically.
5. Click **Deploy**.

The website works in demo mode before any API keys are added.

## Add live AI

In Vercel, open **Project → Settings → Environment Variables** and add:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional; defaults to `gpt-4.1-mini`)
- `NEXT_PUBLIC_SITE_URL` (use `https://kivoplan.com` after the domain is connected)

Redeploy after saving variables.

## Add Stripe payments

Create a Stripe account and a recurring subscription product. Then add:

- `STRIPE_SECRET_KEY`
- `STRIPE_PRICE_ID`
- `NEXT_PUBLIC_SITE_URL`

The Pro button will then open Stripe Checkout. Until configured, it safely returns to the homepage.

## Connect kivoplan.com

In Vercel, open **Settings → Domains**, add `kivoplan.com`, and follow the DNS records Vercel provides. Enter those records in Porkbun.

## Important production work still needed

This package is a launchable MVP, not the completed subscription platform. Before accepting paying customers, add:

- Authentication and database storage
- Stripe webhook verification
- Subscription entitlement checks
- Privacy policy and terms
- Rate limiting and abuse protection
- Error monitoring
- Account deletion and data export
- Human review for sensitive planning areas

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
