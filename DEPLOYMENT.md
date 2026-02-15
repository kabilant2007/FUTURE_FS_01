# Deployment Guide

## 🚀 Deploying Your Portfolio Website

This guide walks you through deploying both frontend and backend to production.

## Table of Contents

1. [Frontend Deployment](#frontend-deployment)
2. [Backend Deployment](#backend-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Troubleshooting](#troubleshooting)

---

## Frontend Deployment

### Option 1: Netlify (Recommended)

**Step 1: Build your project**

```bash
cd frontend
npm run build
```

This creates an optimized `build/` folder.

**Step 2: Deploy to Netlify**

#### Method A: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Log in
3. Drag the `build` folder to the deploy area
4. Your site is live!

#### Method B: Git Integration
1. Push code to GitHub
2. On Netlify, click "New site from Git"
3. Select your repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click Deploy

**Step 3: Update Backend URL**

Edit `frontend/src/pages/Contact.js`:

```javascript
// Change this:
const response = await axios.post('http://localhost:5000/api/contact', formData);

// To this:
const response = await axios.post('https://your-backend-domain.com/api/contact', formData);
```

### Option 2: Vercel

**Step 1: Install Vercel CLI**

```bash
npm i -g vercel
```

**Step 2: Deploy**

```bash
cd frontend
vercel
```

Follow the prompts to configure and deploy.

### Option 3: GitHub Pages

**Step 1: Update package.json**

Add this line:
```json
"homepage": "https://yourusername.github.io/portfolio-website"
```

**Step 2: Install GitHub Pages package**

```bash
npm install --save-dev gh-pages
```

**Step 3: Add deploy scripts**

In `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

**Step 4: Deploy**

```bash
npm run deploy
```

---

## Backend Deployment

### Option 1: Heroku

**Step 1: Create Heroku Account**

Sign up at [heroku.com](https://heroku.com)

**Step 2: Install Heroku CLI**

```bash
npm install -g heroku
```

**Step 3: Login to Heroku**

```bash
heroku login
```

**Step 4: Create Heroku App**

```bash
cd backend
heroku create your-app-name
```

**Step 5: Set Environment Variables**

```bash
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=your.email@example.com
```

**Step 6: Deploy**

```bash
git push heroku main
# or
git push heroku master
```

**Step 7: Check Logs**

```bash
heroku logs --tail
```

### Option 2: Railway

**Step 1: Sign up at Railway**

Visit [railway.app](https://railway.app)

**Step 2: Install Railway CLI**

```bash
npm i -g @railway/cli
```

**Step 3: Login**

```bash
railway login
```

**Step 4: Initialize Project**

```bash
cd backend
railway init
```

**Step 5: Add Environment Variables**

```bash
railway add
```

Or set via Railway dashboard:
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `ADMIN_EMAIL`
- `NODE_ENV=production`

**Step 6: Deploy**

```bash
railway up
```

### Option 3: Render

**Step 1: Push code to GitHub**

```bash
git push origin main
```

**Step 2: Sign up at Render**

Visit [render.com](https://render.com)

**Step 3: Create New Web Service**

1. Click "New +"
2. Select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: `your-app-name`
   - Environment: `Node`
   - Build command: `npm install`
   - Start command: `npm start`

**Step 4: Add Environment Variables**

In Render dashboard:
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `ADMIN_EMAIL`
- `NODE_ENV=production`

**Step 5: Deploy**

Click "Create Web Service"

---

## Custom Domain Setup

### Using Netlify + Heroku

**Step 1: Buy Domain**

Options:
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)

**Step 2: Configure Netlify Domain**

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow instructions to verify ownership
5. Update DNS records:
   - For Netlify: Add `_acme-challenge` record
   - For Heroku backend: Create CNAME record

**Step 3: Setup SSL Certificate**

Netlify automatically provides free SSL via Let's Encrypt.

**Step 4: Update API URL**

Update your frontend code:

```javascript
// frontend/src/pages/Contact.js
axios.post('https://api.yourdomain.com/api/contact', formData)
```

---

## Environment Variables Checklist

### Frontend

```bash
# .env (frontend)
REACT_APP_API_URL=https://your-backend-domain.com
```

### Backend

```bash
# .env (backend)
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your.email@example.com
NODE_ENV=production
```

---

## Production Checklist

- [ ] Frontend built successfully
- [ ] Backend environment variables set
- [ ] SSL certificate configured
- [ ] Contact form tested
- [ ] Emails sending correctly
- [ ] All links working
- [ ] Responsive design verified
- [ ] Performance optimized
- [ ] Analytics configured (optional)
- [ ] Monitoring enabled (optional)

---

## Troubleshooting

### "Port already in use"

```bash
# Find process using port 5000
lsof -i :5000

# Kill process (macOS/Linux)
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### "CORS error in production"

Update backend CORS:

```javascript
// backend/server.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
```

### "Email not sending"

1. Verify Gmail app password
2. Check spam folder
3. Verify 2-Step Verification is enabled
4. Check logs: `heroku logs --tail`

### "Build failed"

```bash
# Clear build cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### "Can't connect to backend"

1. Check backend is deployed and running
2. Verify API URL in frontend code
3. Check CORS configuration
4. Verify environment variables

---

## Performance Optimization

### Frontend

```bash
# Analyze bundle size
npm install --save-dev source-map-explorer

# Run analysis
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

### Backend

```bash
# Add compression middleware
npm install compression
```

```javascript
// backend/server.js
const compression = require('compression');
app.use(compression());
```

---

## Monitoring & Maintenance

### Heroku Monitoring

```bash
# View logs
heroku logs --tail

# Check dyno hours
heroku ps

# View app dashboard
heroku apps:open
```

### Error Tracking

Consider adding:
- [Sentry](https://sentry.io) for error tracking
- [LogRocket](https://logrocket.com) for session replay
- [New Relic](https://newrelic.com) for performance monitoring

---

## Security Best Practices

1. **Never commit .env file**
   - Use environment variables instead
   - Add `.env` to `.gitignore`

2. **Use HTTPS everywhere**
   - Enable SSL/TLS certificate
   - Redirect HTTP to HTTPS

3. **Validate all inputs**
   - Backend validation in place
   - Add frontend validation

4. **Hide sensitive data**
   - API keys in environment variables
   - Database credentials secured

5. **Keep dependencies updated**
   ```bash
   npm outdated
   npm audit
   npm update
   ```

---

## Cost Estimation

| Service | Free Tier | Cost |
|---------|-----------|------|
| Netlify | Yes | $19+/month |
| Vercel | Yes | $20+/month |
| Heroku | No | $7-50/month |
| Railway | Limited | $5+/month |
| Render | Limited | $7+/month |

---

## Support Resources

- [Netlify Docs](https://docs.netlify.com)
- [Heroku Docs](https://devcenter.heroku.com)
- [Railway Docs](https://railway.app/docs)
- [Render Docs](https://render.com/docs)

---

Good luck deploying! 🚀
