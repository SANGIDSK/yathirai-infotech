# 📘 YATHIRAI INFOTECH — Developer Guide

> **Complete guide for running, editing, and extending the Yathirai Infotech website.**  
> Tech Stack: React (Vite) + Node.js (Express) + Nodemailer | MERN-ready

---

## 📁 Project Structure

```
yathirai-infotech/
├── client/                        ← React Frontend (Vite)
│   ├── public/
│   │   ├── logo.png               ← ✅ Place your logo here
│   │   └── gallery/               ← ✅ Place gallery images here
│   │       ├── photo1.jpg
│   │       └── photo2.jpg ...
│   └── src/
│       ├── components/
│       │   ├── Loader.jsx          ← Loading animation on startup
│       │   ├── Loader.css
│       │   ├── Navbar.jsx          ← Top navigation bar
│       │   └── Navbar.css
│       ├── pages/
│       │   ├── Home.jsx            ← Landing page with hero + stats + social
│       │   ├── Home.css
│       │   ├── About.jsx           ← Company profile, gallery, timeline, team
│       │   ├── About.css
│       │   ├── Courses.jsx         ← Domain tiles + course detail
│       │   ├── Courses.css
│       │   ├── Contact.jsx         ← Contact form + social links
│       │   └── Contact.css
│       ├── App.jsx                 ← Main app, page routing logic
│       ├── App.css                 ← Global styles & CSS variables
│       └── main.jsx                ← React entry point
│
├── server/                        ← Node.js + Express Backend
│   ├── routes/
│   │   └── contact.js             ← POST /api/contact
│   ├── controllers/
│   │   └── contactController.js   ← Email sending logic
│   ├── middleware/
│   │   └── validateContact.js     ← Form validation & sanitization
│   ├── .env.example               ← ✅ Copy this to .env and fill values
│   ├── index.js                   ← Server entry point
│   └── package.json
│
├── package.json                   ← Root scripts (run both client + server)
├── .gitignore
└── DEVELOPER_GUIDE.md             ← This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** v9+

### Step 1 — Clone / Download the project
```bash
cd yathirai-infotech
```

### Step 2 — Install all dependencies
```bash
npm run install:all
```
This installs packages for the root, client, and server in one command.

### Step 3 — Set up environment variables
```bash
cd server
cp .env.example .env
```
Then open `server/.env` and fill in your SMTP credentials (see Email Setup below).

### Step 4 — Add your logo
Copy your logo file to:
```
client/public/logo.png
```
The navbar and browser tab will automatically use it.

### Step 5 — Run in development mode
From the root folder:
```bash
npm run dev
```
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 📧 Email Setup (Contact Form)

The contact form sends emails to `info@yathirai.in` using Nodemailer.

### Using Gmail (Recommended for beginners)
1. Go to your Google Account → Security → 2-Step Verification (enable it)
2. Go to: https://myaccount.google.com/apppasswords
3. Create a new App Password (select "Mail" + "Other")
4. Copy the 16-character password

In `server/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-16-char-app-password
```

### Using Zoho Mail
```env
SMTP_HOST=smtp.zoho.in
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yathirai.in
SMTP_PASS=your-zoho-password
```

### Using SendGrid (Production recommended)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

---

## 🎨 How to Customize the UI

### Change Brand Colors
Open `client/src/App.css` — all colors are CSS variables at the top:
```css
:root {
  --purple-bright: #8b2be2;   /* Main purple */
  --pink-hot: #cc44cc;         /* Accent pink */
  --purple-neon: #bf5fff;      /* Neon highlight */
  --bg: #0a0012;               /* Page background */
}
```
Change these values to retheme the entire site instantly.

### Change Fonts
In `App.css`, find the Google Fonts import and replace font names.  
Then update the font variables:
```css
--font-display: 'YourFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
```

---

## 🖼️ How to Add Gallery Images (About Page)

1. Place your images in: `client/public/gallery/`
   - Example: `photo1.jpg`, `photo2.jpg`, `team.jpg`, etc.

2. Open `client/src/pages/About.jsx`

3. Find the `galleryImages` array near the top:
```js
const galleryImages = [
  { src: "/gallery/photo1.jpg", caption: "Team Training Session" },
  { src: "/gallery/photo2.jpg", caption: "Robotics Workshop" },
  // ✅ Add more here:
  { src: "/gallery/your-photo.jpg", caption: "Your Caption" },
];
```

4. Save the file — the carousel auto-updates.

---

## ➕ How to Add a New Course

Open `client/src/pages/Courses.jsx`.  
Find the `domains` array and locate the domain you want to add to (e.g., `coding`):

```js
{
  id: "coding",
  courses: [
    // ✅ Add a new course object here:
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      icon: "🔗",
      level: "Intermediate",
      duration: "2 Months",
      topics: [
        "Arrays, Linked Lists, Stacks",
        "Trees & Graphs",
        "Sorting & Searching",
        "Dynamic Programming",
        "Problem Solving on LeetCode",
      ],
    },
  ]
}
```

---

## ➕ How to Add a New Domain

In `client/src/pages/Courses.jsx`, add a new object to the `domains` array:

```js
{
  id: "cybersecurity",
  title: "Cyber Security",
  icon: "🔐",
  color: "#00bcd4",
  glowColor: "rgba(0,188,212,0.5)",
  description: "Protect systems and learn ethical hacking",
  courses: [
    {
      id: "ethical-hacking",
      name: "Ethical Hacking",
      icon: "🕵️",
      level: "Intermediate",
      duration: "3 Months",
      topics: ["Network Basics", "Kali Linux", "Penetration Testing", ...],
    },
  ],
},
```

---

## 👥 How to Update Team Members (About Page)

Open `client/src/pages/About.jsx`, find the `team` array:

```js
const team = [
  {
    name: "Your Name",        // ← Full name or role title
    role: "Full Stack Dev",   // ← Sub-role
    icon: "💻",               // ← Emoji (or replace with <img>)
    desc: "Short bio here.",  // ← Description
  },
  // Add more team members here
];
```

---

## 🔗 How to Update Social Media Links

### On the Home page
Open `client/src/pages/Home.jsx`, find the social array:
```js
{ name: "Instagram", icon: "📸", url: "https://instagram.com/YOUR_HANDLE", color: "#E1306C" },
```
Replace `YOUR_HANDLE` with your actual Instagram handle, and so on for each platform.

### On the Contact page
Open `client/src/pages/Contact.jsx`, find `socialLinks` array and update URLs and handles similarly.

---

## 📱 How to Update Company Info

| Info | File | Variable/Location |
|---|---|---|
| Company name | `Navbar.jsx` | `navbar__brand` text |
| Email address | `Contact.jsx` | `mailOptions.to` + visible text |
| Phone number | `Contact.jsx` | WhatsApp URL + handle text |
| City/Location | `Contact.jsx` | `contact__info-item` for Location |
| Office hours | `Contact.jsx` | `contact__info-item` for Hours |
| Map link | `Contact.jsx` | Google Maps `href` |

---

## 🔧 Adding a New Page

1. Create `client/src/pages/NewPage.jsx` and `NewPage.css`
2. Import it in `client/src/App.jsx`:
```js
import NewPage from "./pages/NewPage";
```
3. Add it to the `renderPage()` function:
```js
case "newpage": return <NewPage />;
```
4. Add to the `navItems` array in `Navbar.jsx`:
```js
{ id: "newpage", label: "NEW PAGE", icon: "★" },
```

---

## 🌐 Deployment Guide

### Frontend (Vercel / Netlify)
```bash
cd client
npm run build
# Upload the `dist/` folder to Vercel or Netlify
```
On Vercel: set the root to `client/` and build command to `npm run build`.

### Backend (Render / Railway / VPS)
1. Upload the `server/` folder
2. Set environment variables in the dashboard (same as `.env`)
3. Start command: `node index.js`

### Full Stack on a VPS (DigitalOcean / EC2)
```bash
# Build frontend
cd client && npm run build && cd ..

# Set NODE_ENV=production in server/.env
# Start server (it serves React from /client/dist)
cd server && node index.js
```
Use **PM2** to keep the server running:
```bash
npm install -g pm2
pm2 start server/index.js --name yathirai
pm2 save
```

---

## 🔐 Security Features Built In

| Feature | Details |
|---|---|
| Helmet.js | Sets secure HTTP headers |
| CORS | Restricts to allowed origins only |
| Rate Limiting | 100 req/15min globally; 10 emails/hour |
| Input Validation | Server-side validation + sanitization |
| Body Size Limit | Max 10KB request body |
| .env Secrets | Never exposed to frontend |

---

## 🛠️ Common Commands

| Command | What it does |
|---|---|
| `npm run install:all` | Install all dependencies |
| `npm run dev` | Start both frontend + backend |
| `npm run dev:client` | Start only React frontend |
| `npm run dev:server` | Start only Express backend |
| `npm run build` | Build React for production |
| `npm start` | Start production server |

---

## 🆘 Troubleshooting

**Q: Fonts not loading?**  
A: Make sure you have internet connection — fonts load from Google Fonts CDN.

**Q: Contact form not sending emails?**  
A: Check your `server/.env` SMTP credentials. For Gmail, make sure you're using an App Password, not your regular password.

**Q: Logo not showing in navbar?**  
A: Make sure your logo file is at `client/public/logo.png`. The fallback "YI" text shows if the file is missing.

**Q: Gallery images not showing?**  
A: Place images in `client/public/gallery/` and ensure filenames match exactly (case-sensitive on Linux).

**Q: API not connecting in dev?**  
A: Make sure the backend is running on port 5000 and Vite config has the proxy set (it's already configured).

---

*Built with 💜 for Yathirai Infotech — Chennai, Tamil Nadu*
