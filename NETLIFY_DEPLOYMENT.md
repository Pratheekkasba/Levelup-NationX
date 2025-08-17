# Deploying to Netlify

This document provides instructions for deploying the LevelUpNationX website to Netlify.

## Prerequisites

- A Netlify account
- Git repository with your project

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, Bitbucket)
4. Select the repository containing this project
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Follow the prompts to either create a new site or connect to an existing one
5. Deploy your site: `netlify deploy --prod`

## Configuration

The project includes a `netlify.toml` file with the following configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

# Environment variables
[build.environment]
  NEXT_TELEMETRY_DISABLED = "1"

# For Next.js routing
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

This configuration:
- Sets the build command to `npm run build`
- Sets the publish directory to `.next` (Next.js output)
- Disables Next.js telemetry
- Uses the Netlify Next.js plugin for proper routing

## Additional Configuration

### Environment Variables

If your project requires environment variables, you can add them in the Netlify UI:
1. Go to Site settings > Build & deploy > Environment
2. Add your environment variables

### Custom Domain

To set up a custom domain:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Troubleshooting

- If you encounter build errors, check the build logs in the Netlify UI
- Ensure all dependencies are properly listed in `package.json`
- Make sure the Netlify Next.js plugin is installed: `npm install -D @netlify/plugin-nextjs`

## Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Netlify Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs)