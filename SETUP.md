## Getting Started Guide

### Quick Setup (5 minutes)

#### 1. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend (in new terminal)
cd backend
npm install
```

#### 2. Configure Backend

```bash
cd backend
cp .env.example .env
# Edit .env with your Gmail credentials
```

#### 3. Start Development Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

### Personalize Your Portfolio

1. **Update Navigation** (`frontend/src/components/Navigation.js`)
2. **Edit Home Page** (`frontend/src/pages/Home.js`)
3. **Add Your Projects** (`frontend/src/pages/Projects.js`)
4. **Update About Section** (`frontend/src/pages/About.js`)
5. **Add Contact Info** (`frontend/src/pages/Contact.js`)

### Deploy to Production

**Frontend to Netlify:**
```bash
cd frontend
npm run build
# Drag build folder to Netlify or connect GitHub
```

**Backend to Heroku:**
```bash
heroku create your-app-name
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
git push heroku main
```

### Need Help?

- Check README.md for detailed documentation
- Visit [React Docs](https://react.dev)
- Visit [Express Docs](https://expressjs.com)

Good luck! 🚀
