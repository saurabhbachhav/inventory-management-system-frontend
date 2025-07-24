# 🖥️ Inventory Management System - Frontend

A simple React + Vite frontend for the Inventory Management System (IMS).  
Built with plain CSS and React Router, connects to the backend via Axios.

---

## 🚀 Getting Started

1. **Install dependencies**  
   ```bash
   cd frontend
   npm install
````

2. **Run in development**

   ```bash
   npm run dev
   ```

   Open your browser at `http://localhost:5173`

---

## 🗂️ Folder Structure

```
frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AddProduct.jsx
│   │   └── UpdateProduct.jsx
│   ├── api.js
│   ├── auth.js
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── main.jsx
│   └── styles/
│       └── main.css
└── vite.config.js
```

---

## 🔌 Configuration

* **API Base URL**: In `src/api.js`, set

  ```js
  baseURL: "http://localhost:8080"
  ```

---

## 🔑 Features

* **Login / Signup** pages
* **Protected Routes** (Dashboard, Add/Update Product)
* **Global Navbar** with Logout
* **Toasts** for success & error messages

---

## 📘 Scripts

* `npm run dev` – start development server
* `npm run build` – build for production

---

## 👤 About Me

**Saurabh Bachhav**
IIIT Nagpur | CSE ‘25
