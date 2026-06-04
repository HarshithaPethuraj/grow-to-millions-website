# 🚀 Grow to Millions — Agency Website + AI Lead Gen Chatbot

A professional digital marketing agency website built with React, Vite, and Tailwind CSS. Features an AI-powered lead generation chatbot that qualifies prospects and books strategy calls automatically.

🌐 **Live Site:** [growtomillions.com](https://www.growtomillions.com)

---

## ✨ Features

- **Multi-page React website** — Home, Services, About, Blog, Contact
- **AI Lead Gen Chatbot** — Floating chat widget that collects name, email, phone & business goal
- **Automated booking** — Calendly integration for strategy call scheduling
- **Animated UI** — Framer Motion animations throughout
- **Individual Blog & Service pages** — Dynamic routing with React Router
- **Lead capture forms** — Contact, Newsletter & Questionnaire via Formspree
- **SEO ready** — React Helmet Async, sitemap.xml, robots.txt
- **Mobile responsive** — Fully optimized for all screen sizes

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React 18, Vite |
| Styling | Tailwind CSS, Framer Motion |
| Routing | React Router v6 |
| Forms | Formspree |
| Chatbot | NLP-powered AI lead gen widget |
| Booking | Calendly |
| Hosting | Hostinger (Apache + .htaccess) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatBot.jsx       # AI lead gen chatbot widget
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── GrowthGraph.jsx
│   ├── ServiceCard.jsx
│   └── Questionnaire.jsx
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   └── Contact.jsx
├── layouts/
│   └── MainLayout.jsx
├── routes/
│   └── AppRoutes.jsx
└── constants/
    └── index.js
```

---

## 🤖 AI Chatbot Flow

```
Greeting → Collect Name → Collect Email → Collect Phone → Business Goal → Calendly Booking
```

- Leads automatically saved to Formspree dashboard
- Calendly link shown after lead is collected
- Typing indicators and smooth animations

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## 📬 Contact

**Grow to Millions** — Chennai's Digital Growth Agency  
📧 yogeshrpdigital@gmail.com  
🌐 [growtomillions.com](https://www.growtomillions.com)
