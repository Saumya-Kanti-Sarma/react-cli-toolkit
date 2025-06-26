# React CLI Toolkit 🛠️

![Lightweight](https://img.shields.io/badge/lightweight-✓-success) ![Dependency Free](https://img.shields.io/badge/dependency%20free-✓-success) ![Easy to Use](https://img.shields.io/badge/easy%20to%20use-✓-success)

**react-cli-toolkit** is a small, lightweight and dependency-free CLI tool that helps you create routes for your React app in a single command! ⚡

## 🚀 Features
- Zero dependencies
- Automatic route creation
- React Router DOM integration
- CSS file generation
- Global or project-level installation
- Automatic App.jsx updates

## 📦 Installation & Usage

### Method 1: Project Installation (Recommended)

# Step 1: Install as dev dependency
```bash
npm install -D react-cli-toolkit
```
# Step 2: Add this into package.json scripts
```bash
"scripts": {
"page": "reactcli"
},
```

# Step 3: Create routes with npm
```bash
npm run page <route>
# example
npm run page home
```


### Method 2: Global Installation
```bash
# Step 1: Install globally
npm install -g react-cli-toolkit
```

# Step 2: Use anywhere
```bash
reactcli <route>
```
## 🎯 Example
```bash
npm run page home
```

This will create:
```
src/pages/Home/
├── Home.jsx
└── Home.css
```

✨ **Bonus**: If you haven't installed `react-router-dom`, it will automatically:
1. Install the package
2. Update your App.jsx with the new route

## 👨‍💻 Author
Built with 💙 by **Saumya Sarma**



* [Instagram](https://www.instagram.com/developer_saumya)
* [LinkedIn](https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/)
* [X](https://x.com/devloper_saumya)
* [GitHub](https://github.com/Saumya-Kanti-Sarma/)
* [NPM Package](https://www.npmjs.com/package/@saumya-sarma/react-cli-toolkit)
* [Project Repository](https://github.com/Saumya-Kanti-Sarma/react-cli-toolkit)

---

**MIT License** — Free for personal and commercial use.