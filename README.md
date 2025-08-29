# 🕊️ Birds Perfume — A Cinematic Fragrance Experience

**Birds Perfume** is a luxury-inspired web experience that blends smooth frontend animations with robust backend logic. Designed to feel like a digital fragrance ad, it features scroll-based transitions, freeze-on-touch effects, and a minimalist UI that evokes elegance and nature.

## Live Demo : https://mellow-blancmange-204e89.netlify.app/

## ✨ Features

- Scroll-triggered animations using **Framer Motion**
- Freeze-on-touch interaction logic for immersive UX
- Cinematic transitions and luxury-inspired design
- Perfume data model with scent notes, bird inspiration, and bottle design
- Responsive layout across devices
- Error boundaries and graceful fallback animations

## 🧰 Tech Stack

| Frontend         || Animation Logic     |
|------------------||---------------------|
| React.js         || Framer Motion       |
| Styled-Components|| Custom scroll logic |



## 🚀 Getting Started

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/birds-perfume.git

cd birds-perfume
npm install
cd client
npm install
npm run dev

👤 Author
Harshit — Full Stack Developer | Animation Enthusiast | CodeChef 2⭐ 📷 @harshit.codes 🐦 @harshit_dev
Linkedin : https://www.linkedin.com/in/harshit-7217-chaudhary/
X : https://x.com/cha84587
Leetcode : https://leetcode.com/u/harshit7217/
CodeChef : https://www.codechef.com/users/harshit7217


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
