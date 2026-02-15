<!-- Backend README -->

# Portfolio Backend API

Node.js + Express backend for handling contact form submissions and email notifications.

## Features

- 📧 Email notifications via Nodemailer
- 🔒 Input validation and error handling
- 🚀 RESTful API endpoints
- 📝 Automated email responses
- 🔄 CORS enabled
- ⚡ Production-ready

## Tech Stack

- Node.js
- Express.js
- Nodemailer
- CORS
- Body Parser
- Dotenv

## Getting Started

### Install Dependencies

```bash
npm install
```

### Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your.email@example.com
NODE_ENV=development
```

### Start Development Server

```bash
npm run dev
```

Server runs on [http://localhost:5000](http://localhost:5000)

### Start Production Server

```bash
npm start
```

## API Endpoints

### Health Check

**GET** `/api/health`

Returns server status and timestamp.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-02-15T10:30:00.000Z"
}
```

### Contact Form

**POST** `/api/contact`

Submit contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in working together..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Email Setup

### Gmail

1. **Enable 2-Step Verification**
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Click Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select Mail → Windows Computer
   - Copy the 16-character password

3. **Update .env**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=<16-char-app-password>
   ```

### Alternative: SendGrid

```bash
npm install @sendgrid/mail
```

Update `server.js`:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In contact handler:
await sgMail.send({
  to: email,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: 'Message received',
  html: htmlContent
});
```

### Alternative: Mailgun

```bash
npm install mailgun.js
```

Update `server.js`:
```javascript
const mailgun = require('mailgun.js');
const mg = mailgun.client({...});

// In contact handler:
await mg.messages.create(domain, {...});
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `EMAIL_USER` | Sender email address |
| `EMAIL_PASSWORD` | Email service password/token |
| `ADMIN_EMAIL` | Where to send contact messages |
| `NODE_ENV` | Environment (development/production) |

## Project Structure

```
backend/
├── server.js           # Main server file
├── .env.example        # Environment template
├── package.json        # Dependencies
└── README.md          # This file
```

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start with auto-reload (requires nodemon)

## Error Handling

The API includes validation for:
- Missing required fields
- Invalid email format
- Server errors with proper status codes
- CORS policy enforcement

## Security Best Practices

1. **Never commit .env file**
   - Add `.env` to `.gitignore`
   - Use `.env.example` as template

2. **Environment Variables**
   - Store sensitive data in environment
   - Never hardcode credentials

3. **CORS Configuration**
   - Currently allows all origins in development
   - Restrict in production:
   ```javascript
   const corsOptions = {
     origin: process.env.FRONTEND_URL,
     credentials: true
   };
   app.use(cors(corsOptions));
   ```

4. **Input Validation**
   - Server validates all inputs
   - Email format checked
   - Message length could be limited

## Deployment

### Heroku

```bash
# Create app
heroku create your-app-name

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set ADMIN_EMAIL=your.email@example.com

# Deploy
git push heroku main
```

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Render

1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy

## Available Scripts

```bash
npm install              # Install dependencies
npm start               # Start production server
npm run dev             # Start development server with auto-reload
```

## Troubleshooting

**Port already in use:**
```bash
PORT=5001 npm run dev
```

**Gmail error "Invalid credentials":**
- Verify 2-Step Verification is enabled
- Regenerate App Password
- Check EMAIL_USER and EMAIL_PASSWORD in .env

**CORS errors:**
- Ensure frontend is included in CORS configuration
- Check backend URL in frontend API calls

**Email not sending:**
- Check spam/junk folders
- Verify email credentials
- Check console logs for errors

## Testing

### Manual API Testing

Using cURL:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

Using Postman:
1. Create new POST request
2. URL: `http://localhost:5000/api/contact`
3. Headers: `Content-Type: application/json`
4. Body: Raw JSON with contact data
5. Click Send

## Performance Tips

1. **Connection Pooling** - Reuse email connections
2. **Rate Limiting** - Add rate limiter for API protection
3. **Caching** - Cache static responses
4. **Logging** - Use proper logging library

## Additional Resources

- [Express.js Documentation](https://expressjs.com)
- [Nodemailer Guide](https://nodemailer.com)
- [CORS Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

## License

MIT License - feel free to use this template!

## Support

Need help? Check:
1. Logs in terminal
2. Error messages
3. .env configuration
4. Firewall/Network settings
