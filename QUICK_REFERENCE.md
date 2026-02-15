# 📋 Quick Reference - Portfolio Website

## 🚀 Start in 5 Minutes

### 1. Install (2 min)
```bash
cd portfolio-website/frontend && npm install
cd ../backend && npm install
```

### 2. Configure Email (2 min)
```bash
cd backend
cp .env.example .env
# Edit .env with your Gmail app password
```

### 3. Run (1 min)
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```

✅ **Done!** Visit http://localhost:3000

---

## 📁 What's Where?

| Component | Location | Purpose |
|-----------|----------|---------|
| Home Page | `frontend/src/pages/Home.js` | Your introduction |
| Projects | `frontend/src/pages/Projects.js` | Your work samples |
| About | `frontend/src/pages/About.js` | Your background |
| Contact Form | `frontend/src/pages/Contact.js` | Visitor messages |
| Navigation | `frontend/src/components/Navigation.js` | Menu bar |
| Footer | `frontend/src/components/Footer.js` | Social links |
| All Styles | `frontend/src/styles/` | CSS files |
| Backend API | `backend/server.js` | Contact endpoint |
| Email Setup | `backend/.env` | Gmail config |

---

## ✏️ Key Things to Customize

### Must Update
- [ ] Your name (Navigation.js)
- [ ] Your bio (Home.js)
- [ ] Your skills (About.js)
- [ ] Your projects (Projects.js)
- [ ] Your contact info (Contact.js)
- [ ] Social media links (Footer.js + Contact.js)
- [ ] Gmail credentials (.env)

### Nice to Update
- [ ] Profile picture (add to public/images/)
- [ ] Brand colors (index.css)
- [ ] Project screenshots
- [ ] Email templates

---

## 🎨 Colors to Customize

Edit `frontend/src/styles/index.css`:

```css
:root {
  --primary-color: #0a66c2;    /* Change this! */
  --secondary-color: #00a8e0;  /* And this! */
  --accent-color: #ff006e;     /* And this! */
}
```

---

## 📧 Gmail Setup (3 Steps)

1. **Go to** myaccount.google.com/apppasswords
2. **Generate** an app password
3. **Paste** 16-char password into `.env`

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=<paste-16-chars-here>
```

---

## 🚀 Deploy to Production

### Frontend (Netlify)
```bash
npm run build
# Drag build/ to netlify.com
```

### Backend (Heroku)
```bash
heroku create your-app-name
heroku config:set EMAIL_USER=...
git push heroku main
```

---

## 📱 Responsive Breakpoints

| Device | Width | Test With |
|--------|-------|-----------|
| Mobile | 375px | Phone |
| Tablet | 768px | iPad |
| Desktop | 1440px | Laptop |

---

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `PORT=3001 npm start` |
| Port 5000 in use | `PORT=5001 npm run dev` |
| Dependencies fail | `rm -rf node_modules && npm install` |
| Email not sending | Check .env & Gmail settings |
| CORS error | Check backend CORS config |

---

## 📖 Documentation Quick Links

| Document | Purpose |
|----------|---------|
| START_HERE.md | Begin here! |
| README.md | Full guide |
| SETUP.md | Quick setup |
| DEPLOYMENT.md | Deploy guide |
| CHECKLIST.md | Task list |
| VISUAL_GUIDE.md | Layout preview |
| PROJECT_SUMMARY.md | Overview |

---

## 🔗 File Edit Checklist

### Frontend Changes
```
frontend/src/
├── pages/
│   ├── Home.js          ← Update intro
│   ├── Projects.js      ← Add your projects
│   ├── About.js         ← Update bio/skills
│   └── Contact.js       ← Update contact info
├── components/
│   ├── Navigation.js    ← Update your name
│   └── Footer.js        ← Update social links
└── styles/
    └── index.css        ← Update colors
```

### Backend Changes
```
backend/
├── .env                 ← Add email config
└── server.js            ← Modify if needed
```

---

## 💻 Command Cheat Sheet

```bash
# Start development
npm run dev           # Backend (port 5000)
npm start             # Frontend (port 3000)

# Build for production
npm run build

# Install dependencies
npm install

# Remove node_modules
rm -rf node_modules

# Check what's running on a port
lsof -i :3000         # macOS/Linux
netstat -ano | ...    # Windows

# Deploy to Heroku
heroku create app-name
git push heroku main

# View Heroku logs
heroku logs --tail
```

---

## 🎯 Project Customization Order

1. **Update Navigation** - Your name
2. **Update Home** - Your intro
3. **Update Projects** - Your work
4. **Update About** - Your skills
5. **Update Contact** - Your info
6. **Configure Email** - Gmail setup
7. **Test Everything** - All pages
8. **Deploy** - Go live!

---

## 📊 File Size Reference

| Component | Size | Lines |
|-----------|------|-------|
| Home.js | ~4KB | 150 |
| Projects.js | ~6KB | 180 |
| About.js | ~5KB | 170 |
| Contact.js | ~4KB | 140 |
| Navigation.js | ~2KB | 60 |
| Footer.js | ~2KB | 50 |
| server.js | ~3KB | 100 |
| CSS (total) | ~15KB | 600 |

---

## 🌐 Deployment Platforms

### Frontend
- **Netlify** - Easiest, drag & drop
- **Vercel** - Fast, optimized for React
- **GitHub Pages** - Free, easy setup

### Backend
- **Heroku** - Popular, reliable
- **Railway** - Fast, simple
- **Render** - Easy integration

---

## 📞 Support Resources

| Resource | URL |
|----------|-----|
| React Docs | react.dev |
| React Router | reactrouter.com |
| Express Docs | expressjs.com |
| Nodemailer | nodemailer.com |
| Netlify Docs | docs.netlify.com |
| Heroku Docs | devcenter.heroku.com |

---

## ✅ Pre-Launch Checklist

- [ ] All content updated
- [ ] Images optimized
- [ ] Links working
- [ ] Contact form tested
- [ ] Mobile responsive
- [ ] Dark mode working
- [ ] No console errors
- [ ] Performance good
- [ ] Deployed
- [ ] Domain configured

---

## 🎉 Launch Checklist

- [ ] Frontend deployed
- [ ] Backend deployed
- [ ] API endpoints verified
- [ ] Email notifications working
- [ ] Domain pointing to frontend
- [ ] SSL certificate active
- [ ] Analytics configured (optional)
- [ ] Shared on LinkedIn
- [ ] Added to resume
- [ ] GitHub repo public

---

## 💡 Tips for Success

1. **Personalize Everything** - Make it uniquely yours
2. **Add Real Projects** - Show your best work
3. **Keep It Updated** - Add new projects regularly
4. **Mobile First** - Test on phones
5. **Fast Performance** - Optimize images
6. **SEO Friendly** - Use proper tags
7. **Professional Tone** - Impress employers
8. **Easy Navigation** - Simple menu

---

## 🚀 You're Ready!

This cheat sheet covers everything you need to get started, customize, and deploy your portfolio. 

**Next Step:** Read START_HERE.md or SETUP.md

Good luck! 💪
