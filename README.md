# 👑 Bawarchi — Fine Indian Dining & Nizami Hospitality

Bawarchi is a premium, high-fidelity web application celebrating authentic Hyderabadi Dum Biryani, Mughlai, Seafood, and Tandoori culinary heritages. Developed using React 19, TypeScript, Tailwind CSS, and Vite, the platform delivers an immersive, luxury sensory dining experience on the web.

---

## ✨ Features

- **🏆 Regal Aesthetic Design**: Tailored visual tokens featuring a deep charcoal base, warm ivory text, and premium antique gold accents.
- **✨ Fluid Micro-Animations**: Smooth, floating aurora mesh glow orbs and dynamic interactive transitions powered by `motion/react`.
- **🖱️ Customized Desktop Cursor**: An interactive, custom-animated desk cursor that reacts to clickable interface elements.
- **📱 Responsive & Mobile-First**: Native-style mobile navigation bar with floating tab controls, tactile touch support, and seamless layout transitions.
- **🍲 Heritage Multi-Cuisine Menu**: An elegant digital menu showcasing categorized delicacies, vegetarian filters, and sorting by pricing metrics.
- **👜 Nizami Feast Planner**: Pre-select favorite dishes to build a custom dining course, saved dynamically using persistent browser `localStorage`.
- **📅 Table Reservation System**: A complete booking workflow containing table locks, pax size adjustments, receipt codes, and booking history.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)

---

## 🚀 Local Development

Follow these steps to run the Bawarchi application on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended) installed.

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd Bawarchi
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Set your Gemini API key (if server-side integrations are enabled)
   GEMINI_API_KEY="your_api_key_here"
   
   # Set the URL where the app is hosted
   APP_URL="http://localhost:3000"
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

5. **Typecheck & Code Linting:**
   ```bash
   npm run lint
   ```

6. **Build for Production:**
   ```bash
   npm run build
   ```
   This generates the static, optimized web bundle in the `dist` folder.

---

## 📦 Deployment Guides

The Bawarchi application builds as a fully static React SPA (`dist` folder output), making it highly compatible with modern serverless hosting providers.

### ⚡ Option 1: Vercel (Recommended)

#### Via GitHub Integration (Easiest)
1. Push this repository to GitHub.
2. Sign in to your [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your `Bawarchi` repository.
4. Vercel automatically detects the Vite config. Verify the following:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

#### Via Vercel CLI
1. Install the Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root directory and follow the prompts.

---

### 🌐 Option 2: Netlify

#### Via Netlify UI
1. Sign in to [Netlify](https://www.netlify.com/) and click **Add new site > Import from Git**.
2. Connect your Git provider and select the repository.
3. Configure the build settings:
   - **Branch to deploy:** `main` (or `master`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.

#### Handling SPA Routing (Optional)
If you add routing pathways later, create a `public/_redirects` file with:
```text
/*    /index.html   200
```
This forces Netlify to redirect all SPA requests back to `index.html`.

---

### 🐙 Option 3: GitHub Pages

To deploy this Vite app to GitHub Pages using GitHub Actions:

1. In `vite.config.ts`, if deploying to a repository subdirectory (e.g., `https://username.github.io/repo-name/`), add the `base` property:
   ```typescript
   export default defineConfig({
     base: '/repo-name/', // Change 'repo-name' to your actual repo name
     // ... rest of config
   });
   ```
2. Go to your GitHub repository settings under **Pages**. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Create a workflow file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main, master ]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload Artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

---

### ☁️ Option 4: Render

1. Log in to [Render](https://render.com/) and click **New > Static Site**.
2. Connect your GitHub repository.
3. Set the following options:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

---

## 📄 License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for the full text.

```text
Copyright 2026 Bawarchi Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
```
