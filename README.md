# FindIt — AI-Powered Lost & Found

A responsive campus lost-and-found platform built with Next.js, TypeScript, Tailwind CSS and optional Supabase cloud persistence.

## Features
- Report lost and found belongings with photos, category, date and location.
- Search and filter reports by keyword, category, status and report type.
- Browser-based visual similarity matching using image fingerprints (average hash).
- Location-aware match scoring when coordinates are provided.
- Suggested matches with explainable visual and location scores.
- Claim requests and status management.
- Demo mode works immediately using browser local storage.
- Optional Supabase database and Storage integration for shared cloud data.
- Responsive dashboard and mobile-friendly interface.

## Run locally
Requires Node.js 18.17+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the default Next.js build settings and deploy.
4. For a shared multi-user deployment, configure Supabase (below) and add the environment variables in Vercel.

## Enable shared cloud storage (recommended)
1. Create a project at https://supabase.com.
2. Open the Supabase SQL Editor and run `supabase/schema.sql`.
3. Create a public Storage bucket named `item-photos` (or run the storage SQL policy section in the schema).
4. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` and Vercel Project Settings → Environment Variables.
5. Redeploy.

Without Supabase keys, FindIt automatically runs in Demo Mode. Demo data is stored in the current browser only; different users/devices will not share it. Cloud mode stores reports and photos in Supabase.

## AI matching notes
The project includes an explainable visual similarity engine. It computes a 64-bit average-hash fingerprint from uploaded images in the browser and combines visual similarity with location proximity and category agreement. This is lightweight computer-vision-style matching, not a trained neural network or proof of ownership. Match suggestions should be reviewed by a person.

## Important production notes
- This starter uses the Supabase anon key and Row Level Security policies for public report creation and reading. For a real campus rollout, add Supabase Auth, moderation, rate limiting, private contact details and verified claim workflows.
- Do not publish sensitive personal information in item descriptions. Meet in a safe, staffed campus location to return belongings.
