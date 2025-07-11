# Cloudflare Deployment Guide

This project is configured to deploy easily to Cloudflare Workers + Pages using the static assets feature.

## Prerequisites

1. **Cloudflare Account**: Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Wrangler CLI**: Already installed as a dev dependency

## Setup

1. **Login to Cloudflare**:

   ```bash
   npx wrangler login
   ```

2. **Update project name** (optional):
   Edit `wrangler.toml` and change the `name` field to your preferred project name.

## Build and Deploy Commands

### Build for Cloudflare

```bash
npm run build:cloudflare
```

This command:

- Builds the React SPA to `/dist`
- Builds the Cloudflare Worker to `/dist/_worker.js`

### Deploy to Cloudflare

```bash
npm run deploy:cloudflare
```

This command:

- Runs the build process
- Deploys using Wrangler CLI

## Architecture

- **Static Assets**: React SPA files served directly by Cloudflare's edge
- **API Routes**: Handled by Cloudflare Worker (`/api/*` routes)
- **Fallback**: All non-API routes serve the React app for client-side routing

## API Routes Available

- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint with typed response

## Environment Variables

To add environment variables for production:

1. **Via Wrangler CLI**:

   ```bash
   npx wrangler secret put MY_SECRET_KEY
   ```

2. **Via Dashboard**: Go to Workers & Pages → Your Worker → Settings → Variables

3. **Access in Worker**:
   ```typescript
   // In server/cloudflare-worker.ts
   const apiKey = env.MY_SECRET_KEY;
   ```

## Custom Domain

1. Go to Cloudflare Dashboard → Workers & Pages
2. Select your deployed worker
3. Go to Settings → Triggers
4. Add your custom domain

## Development vs Production

- **Development**: Uses Express server via Vite plugin
- **Production**: Uses Cloudflare Worker for API + static assets

Both environments provide the same API contract for seamless development experience.
