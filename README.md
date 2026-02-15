# 🚀 Personal Professional Portfolio Website

> A modern, responsive, full-stack portfolio website built with React and Node.js. Showcase your projects, skills, and connect with potential clients and employers.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact Form Setup](#contact-form-setup)
- [License](#license)

## ✨ Features

- **🎨 Modern Design** - Clean, professional, and responsive UI
- **📱 Mobile-First** - Fully responsive on all devices
- **🌙 Dark Mode** - Built-in dark mode toggle
- **📧 Contact Form** - Functional contact form with email notifications
- **🎯 Project Showcase** - Display your best work with descriptions and links
- **📊 About Section** - Share your skills, experience, and education
- **⚡ Fast Performance** - Optimized for speed and SEO
- **🔄 Smooth Navigation** - React Router for seamless page transitions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Navigation
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties and animations
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

### Tools & Services
- **Git/GitHub** - Version control
- **Netlify/Vercel** - Frontend hosting
- **Heroku/Railway** - Backend hosting
- **Gmail** - Email service

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (v14.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended
- **Gmail Account** - For contact form emails

## 💻 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

### 3. Backend Setup

```bash
cd ../backend
npm install
```

## ⚙️ Configuration

### Frontend Configuration

The frontend requires no special configuration out of the box. Update these files with your information:

1. **Navigation** - `src/components/Navigation.js`
   - Change `<Your_Name />` to your actual name

2. **Home Page** - `src/pages/Home.js`
   - Update hero section with your introduction
   - Add your real image to `src/assets/profile.jpg`

3. **Projects** - `src/pages/Projects.js`
   - Add your actual projects with descriptions
   - Update GitHub and live demo links
   - Add project images/screenshots

4. **About** - `src/pages/About.js`
   - Update your bio and experience
   - Add your real skills
   - Include your education details

5. **Contact** - `src/pages/Contact.js`
   - Update contact information
   - Add your social media links
   - Configure email service

### Backend Configuration

#### Step 1: Gmail Setup

1. Go to [Google Account](https://myaccount.google.com/)
2. Click **Security** in left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords**
5. Select **Mail** and **Windows Computer** (or your device)
6. Generate and copy the 16-character password

#### Step 2: Create `.env` file

```bash
cd backend
cp .env.example .env
```

#### Step 3: Update `.env` with your credentials

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=your.email@example.com
NODE_ENV=development
```

## 🚀 Usage

### Development Mode

#### Terminal 1 - Start Backend

```bash
cd backend
npm run dev
```

Expected output:
```
✓ Server running on http://localhost:5000
✓ Contact form endpoint: POST /api/contact
```

#### Terminal 2 - Start Frontend

```bash
cd frontend
npm start
```

The frontend will open at `http://localhost:3000`

### Testing Contact Form

1. Navigate to Contact page
2. Fill in the form
3. Click "Send Message"
4. Check your email for confirmation
5. Check admin email for the contact message

## 📁 Project Structure

```
portfolio-website/
├── frontend/                    # React application
│   ├── public/
│   │   └── index.html          # Main HTML file
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navigation.js
│   │   │   └── Footer.js
│   │   ├── pages/              # Page components
│   │   │   ├── Home.js
│   │   │   ├── Projects.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── styles/             # CSS files
│   │   │   ├── index.css
│   │   │   ├── Navigation.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Projects.css
│   │   │   ├── About.css
│   │   │   └── App.css
│   │   ├── App.js              # Main app component
│   │   └── index.js            # React entry point
│   └── package.json
│
├── backend/                     # Node.js API
│   ├── server.js               # Express server
│   ├── .env.example            # Environment variables template
│   └── package.json
│
└── README.md                    # This file
```

## 🎨 Customization

### Change Colors

Edit `frontend/src/styles/index.css` to modify CSS variables:

```css
:root {
  --primary-color: #0a66c2;      /* Main brand color */
  --secondary-color: #00a8e0;    /* Accent color */
  --accent-color: #ff006e;       /* Highlight color */
  /* ... more variables ... */
}
```

### Add Projects

Edit `frontend/src/pages/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    category: "fullstack",
    technologies: ["React", "Node.js"],
    image: "Project 1",
    github: "https://github.com/...",
    live: "https://...",
    details: "Detailed description..."
  },
  // Add more projects...
];
```

### Update Skills

Edit `frontend/src/pages/About.js`:

```javascript
const skills = {
  Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express', 'MongoDB'],
  Tools: ['Git', 'Docker', 'AWS']
};
```

### Add Profile Image

1. Place your image in `frontend/public/images/profile.jpg`
2. Update `src/pages/Home.js`:

```javascript
<img src="/images/profile.jpg" alt="Profile" className="profile-image" />
```

## 📤 Deployment

### Frontend Deployment (Netlify)

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag & drop the `build` folder to Netlify
   - Or connect your GitHub repo to Netlify for automatic deployments

3. **Update Backend URL**
   - In `src/pages/Contact.js`, update the API endpoint:
   ```javascript
   axios.post('https://your-backend-domain.com/api/contact', formData)
   ```

### Backend Deployment (Heroku)

1. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Set environment variables**
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASSWORD=your-app-password
   heroku config:set ADMIN_EMAIL=your.email@example.com
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Alternative: Railway, Render, Fly.io

Similar steps apply. Check documentation on their respective platforms.

## ✉️ Contact Form Setup

### Gmail Configuration

1. **Enable 2FA** on your Google Account
2. **Generate App Password**:
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   
3. **Update `.env` in backend**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ADMIN_EMAIL=your.email@example.com
   ```

### Alternative Email Services

#### SendGrid
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

#### Mailgun
```javascript
const mailgun = require('mailgun.js');
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});
```

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📧 Contact & Support

- **Email**: your.email@example.com
- **LinkedIn**: linkedin.com/in/yourprofile
- **GitHub**: github.com/yourprofile

---

**Made with ❤️ by You**

### Quick Checklist Before Deployment

- [ ] Updated all personal information
- [ ] Added real projects with screenshots
- [ ] Configured email service
- [ ] Tested contact form
- [ ] Optimized images
- [ ] Checked responsive design on mobile
- [ ] Set up GitHub repository
- [ ] Deployed frontend to Netlify/Vercel
- [ ] Deployed backend to Heroku/Railway
- [ ] Updated API endpoints
- [ ] Added custom domain (optional)
- [ ] Set up SSL certificate
- [ ] Tested all functionality
- [ ] Shared on LinkedIn

Good luck! 🚀
