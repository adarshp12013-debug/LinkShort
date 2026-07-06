# 🔗 LinkShort

> A modern URL Shortener built using **Next.js**, **MongoDB**, and **Tailwind CSS**.

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8)

---

## 📖 About

**LinkShort** is a full-stack URL shortening application that allows users to create custom, memorable short links for long URLs.

Built with **Next.js App Router**, **MongoDB**, and **Tailwind CSS**, the application provides a clean interface and fast URL redirection.

---

## ✨ Features

- 🔗 Generate custom short URLs
- 🚀 Instant URL redirection
- 🗄️ MongoDB database integration
- 📱 Fully responsive design
- ⚡ Fast API routes using Next.js
- 🎨 Clean and modern UI
- 🔍 Duplicate short URL validation

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- MongoDB
- JavaScript (ES6+)

---

## 📂 Project Structure

```text
LINKSHORT/
│
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js
│   ├── shorten/
│   ├── about/
│   ├── contact/
│   ├── [shortUrl]/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   └── Navbar.js
│
├── lib/
│   └── mongodb.js
│
├── public/
│
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/adarshp12013-debug/LinkShort.git
```

### Navigate to the project

```bash
cd LinkShort
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a **`.env.local`** file in the project root.

```env
MONGODB_URI=your_mongodb_connection_string
```

You can obtain a MongoDB connection string by creating a free cluster on **MongoDB Atlas**.

### Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🎯 Learning Objectives

This project helped in practicing:

- Next.js App Router
- API Route Handlers
- Dynamic Routing
- MongoDB Integration
- Environment Variables
- React Hooks
- Tailwind CSS
- Full-Stack Development

---

## 🔮 Future Improvements

- 🔐 User Authentication
- 📊 Link Analytics
- 📅 Link Expiration
- 📱 QR Code Generation
- ⭐ Favorite Links
- 📂 User Dashboard
- 🌐 Custom Domains
- 📈 Click Statistics

---

## ⚙️ Environment Variables

The following environment variable is required:

```env
MONGODB_URI=your_mongodb_connection_string
```

For security reasons, **`.env.local`** is not included in the repository.

---

## 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more information.

---

## 👨‍💻 Author

**Adarsh Patel**

- GitHub: https://github.com/adarshp12013-debug

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!