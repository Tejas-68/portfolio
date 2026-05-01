# Pre-Deployment Checklist

## Local Testing
- [ ] Run `npm install` - all dependencies install without errors
- [ ] Run `npm run build` - build completes successfully
- [ ] Run `npm run preview` - preview runs without errors
- [ ] Test 3D character loads and renders correctly
- [ ] Test all navigation links work
- [ ] Test animations (GSAP) work smoothly
- [ ] Test responsive design on mobile
- [ ] Run `npm run lint` - no ESLint errors (fix any warnings)
- [ ] Check console in DevTools - no console errors
- [ ] Test on different browsers (Chrome, Firefox, Safari)

## Git & GitHub
- [ ] Initialize git: `git init`
- [ ] Create `.gitignore` ✓ (already configured)
- [ ] Add all files: `git add .`
- [ ] Create initial commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin https://github.com/USERNAME/REPO.git`
- [ ] Push to main: `git push -u origin main`

## Vercel Setup
- [ ] Create Vercel account (if not already done)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Connect GitHub account to Vercel
- [ ] One of the following:
  - [ ] Deploy via Vercel CLI: `vercel --prod`
  - [ ] OR import project from Vercel dashboard

## Post-Deployment
- [ ] Visit your Vercel deployment URL
- [ ] Test all features on live site:
  - [ ] 3D character loads
  - [ ] All animations work
  - [ ] Navigation works
  - [ ] Contact form (if applicable)
  - [ ] Mobile responsiveness
- [ ] Check Vercel Analytics dashboard
- [ ] Monitor deployment logs for any errors
- [ ] Set up custom domain (optional)

## Optimization (Optional)
- [ ] Add custom domain
- [ ] Set up automatic deployments (already configured)
- [ ] Configure environment variables if needed
- [ ] Set up preview deployments for PRs
- [ ] Enable Web Analytics
- [ ] Add project description in Vercel

## Performance
- [ ] Check Lighthouse score
- [ ] Monitor Core Web Vitals in Vercel Analytics
- [ ] Test load time on slow 3G (Chrome DevTools)
- [ ] Verify 3D assets load efficiently

---

## Quick Start Commands

```bash
# Local testing
npm install
npm run build
npm run preview

# Git setup
git init
git add .
git commit -m "Initial commit: Portfolio ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Deploy to Vercel
npm i -g vercel
vercel login
vercel --prod
```

