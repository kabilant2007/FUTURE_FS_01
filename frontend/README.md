<!-- Frontend README -->

# Portfolio Frontend

Modern React-based frontend for your professional portfolio website.

## Features

- ⚡ Fast and responsive React application
- 🎨 Beautiful, customizable UI components
- 📱 Mobile-first responsive design
- 🌙 Dark mode support
- ♿ Accessible and semantic HTML
- 🔍 SEO-friendly structure
- 🚀 Production-ready build

## Tech Stack

- React 18
- React Router v6
- Axios for API calls
- React Icons
- CSS3 with CSS Variables

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Runs on [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.js
│   └── Footer.js
├── pages/              # Page components
│   ├── Home.js
│   ├── Projects.js
│   ├── About.js
│   └── Contact.js
├── styles/             # CSS files
├── App.js              # Main component
└── index.js            # Entry point
```

## Customization Guide

### Colors

Edit `src/styles/index.css`:

```css
:root {
  --primary-color: #0a66c2;
  --secondary-color: #00a8e0;
  --accent-color: #ff006e;
}
```

### Add Navigation Links

Edit `src/components/Navigation.js`:

```jsx
<Link to="/your-page" className="nav-links">
  Your Page
</Link>
```

### Create New Page

1. Create component in `src/pages/YourPage.js`
2. Add route in `src/App.js`
3. Add navigation link

## Environment Variables

Create `.env` file (optional):

```
REACT_APP_API_URL=http://localhost:5000
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

## Deployment

### Netlify

```bash
npm run build
```

Drag `build/` folder to Netlify dashboard

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

Update `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name"
```

## Available Scripts

- `npm start` - Start dev server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Use React DevTools Profiler
2. Lazy load components with `React.lazy()`
3. Optimize images before upload
4. Use CSS variables for theming
5. Implement code splitting

## Troubleshooting

**Port 3000 already in use:**
```bash
PORT=3001 npm start
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**API calls failing:**
- Check backend is running on port 5000
- Verify CORS is enabled
- Check .env configuration

## Additional Resources

- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## License

MIT License - feel free to use this template!
