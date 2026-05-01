# Vercel Deployment Guide

## Prerequisites
- GitHub account with the project repository
- Vercel account (free tier available)

---

## Step 1: Prepare Your Project (DONE ✓)

Your project is now ready with:
- ✓ `vercel.json` - Deployment configuration
- ✓ `.env.example` - Environment variables template
- ✓ `package.json` - Build and dev scripts configured
- ✓ TypeScript configuration
- ✓ ESLint setup

### Verify local build works:
```bash
npm install
npm run build
npm run preview
```

---

## Step 2: Push to GitHub

### Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website ready for deployment"
```

### Add Remote and Push
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPOSITORY` with your repository name

---

## Step 3: Deploy on Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Import"
6. Review settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm ci`
7. Click "Deploy"

---

## Step 4: Configure Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Update your domain provider's DNS settings

---

## Step 5: Environment Variables (If Needed)

1. Go to your Vercel project → "Settings" → "Environment Variables"
2. Add any environment variables your project needs
3. Redeploy or they'll be available for next deployment

---

## Continuous Deployment

Your project is now set up for **automatic deployments**:
- Every push to `main` branch → Automatic production deployment
- Pull requests → Preview deployments (preview URL generated)
- Merging PR to main → Production deployment

---

## Monitoring & Analytics

- **Vercel Dashboard:** Monitor performance, logs, and analytics
- **Vercel Analytics:** Integrated with `@vercel/analytics` package
- **Web Vitals:** View Core Web Vitals metrics

---

## Troubleshooting

### Build fails with TypeScript errors
```bash
npm run build  # Test locally first
npx tsc -b     # Check TypeScript compilation
```

### 404 errors on routes
- Vercel correctly routes single-page apps
- Configure `vercel.json` if needed:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Large assets (3D models, HDR files)
- Ensure files are not too large (recommended < 10MB each)
- Consider using CDN for very large assets
- Add to `.vercelignore` if needed (similar to `.gitignore`)

### Node modules too large
- Ensure `.gitignore` excludes `node_modules`
- Use `npm ci` instead of `npm install` for clean installs

---

## Post-Deployment

1. ✓ Test your live site on Vercel URL
2. ✓ Check console for errors (F12 Developer Tools)
3. ✓ Verify all interactive elements work (3D character, animations, etc.)
4. ✓ Test on mobile devices
5. ✓ Monitor Vercel analytics dashboard

---

## Useful Commands

```bash
# Local development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Deploy using Vercel CLI
vercel --prod

# Pull Vercel environment
vercel env pull
```

---

## Additional Resources

- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel Analytics Setup](https://vercel.com/docs/concepts/analytics)

