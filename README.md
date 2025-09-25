# React + TypeScript + Vite App

This project is a React application built with **Vite** for fast development, **TypeScript** for type safety, **Tailwind CSS** for styling, and **Framer Motion** for animations.

---

## 🚀 Getting Started

### Resources
Demo: [https://muzukuru-assessment.netlify.app/](https://muzukuru-assessment.netlify.app/).

Design: [https://www.figma.com/design/0ifkZeO4NnddaYQyOwumVw/Mzukuru-Assessment?node-id=0-1&t=UPg4cSDSkkE2oyUo-1](https://www.figma.com/design/0ifkZeO4NnddaYQyOwumVw/Mzukuru-Assessment?node-id=0-1&t=UPg4cSDSkkE2oyUo-1).

### 1. Clone the Repository
```bash
git clone https://github.com/PixelRaptor/muzukuru-assessment.git
cd muzukuru-assessment
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
```
This will start the app locally at [http://localhost:5173](http://localhost:5173).

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Tech Stack

- **React** – Frontend framework
- **TypeScript** – Static typing
- **Vite** – Next-generation frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animation library

---

## 📂 Project Structure
```
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page-level components
│   ├── App.tsx      # Root app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles (includes Tailwind)
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
└── tailwind.config.js # Tailwind configuration
```

---

## 🎨 Styling
Tailwind CSS is configured in `tailwind.config.js` and included via `index.css`.  
You can use utility classes directly in your components.

---

## 🎬 Animations
Framer Motion is installed and can be used like:
```tsx
import { motion } from "framer-motion";

export const Example = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    Hello World
  </motion.div>
);
```

---

## 📜 Scripts

- `npm run dev` – Start development server  
- `npm run build` – Build for production  
- `npm run preview` – Preview production build  

---

## ✅ Requirements

- **Node.js** >= 21
- **npm**, **yarn**, or **pnpm**

---