#!/usr/bin/env node

/**
 * ================================================================================================
 * BUILDING A BETTER BRAND® - SUPER FAST PROJECT GENERATOR
 * ================================================================================================
 * 
 * This script creates your complete project structure with all essential configuration files.
 * 
 * WHAT IT DOES:
 * ✅ Creates complete folder structure
 * ✅ Generates all config files (package.json, vite, tsconfig, etc.)
 * ✅ Creates placeholder files for components
 * ✅ Gives you clear instructions for copying your code from Figma Make
 * 
 * HOW TO USE:
 * 1. Save this file to your computer as "generate-project.js"
 * 2. Open terminal/command prompt
 * 3. Run: node generate-project.js
 * 4. Follow the on-screen instructions
 * 
 * TIME: ~5 minutes total
 * ================================================================================================
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_NAME = 'buildingabetterbrand';
const OUTPUT_DIR = PROJECT_NAME;

console.log('\n🚀 Building a Better Brand® - Project Generator\n');
console.log('━'.repeat(80));
console.log('This will create your complete project structure in:', OUTPUT_DIR);
console.log('━'.repeat(80) + '\n');

// ================================================================================================
// FILE CONTENTS
// ================================================================================================

const FILES = {
  'package.json': `{
  "name": "buildingabetterbrand",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sonner": "2.0.3",
    "lucide-react": "^0.263.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.4",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.3",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.4",
    "@radix-ui/react-dialog": "^1.0.4",
    "@radix-ui/react-dropdown-menu": "^2.0.5",
    "@radix-ui/react-hover-card": "^1.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.3",
    "@radix-ui/react-navigation-menu": "^1.1.3",
    "@radix-ui/react-popover": "^1.0.6",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.4",
    "@radix-ui/react-select": "^1.2.2",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.4",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.6",
    "cmdk": "^0.2.0",
    "embla-carousel-react": "^8.0.0",
    "input-otp": "^1.2.4",
    "react-day-picker": "^8.8.0",
    "react-resizable-panels": "^0.0.55",
    "recharts": "^2.7.2",
    "vaul": "^0.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "@tailwindcss/vite": "^4.0.0-alpha.20"
  }
}`,

  'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['sonner']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 8080
  }
})`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "App.tsx", "components", "imports"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,

  'tsconfig.node.json': `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`,

  'netlify.toml': `[build]
  # Directory to change to before starting a build
  base = "."
  
  # Directory that contains the deploy-ready HTML files and assets generated by the build
  publish = "dist"
  
  # Default build command
  command = "npm run build"

[build.environment]
  # Node version for build
  NODE_VERSION = "18"

# Redirect rules for SPA (Single Page Application)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for security and performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Custom headers for assets
[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.woff2"
  [headers.values]
    Cache-Control = "public, max-age=31536000"`,

  'build.js': `#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Building a Better Brand® Landing Page...\\n');

try {
  // Check if node_modules exists
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Run the build
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('\\n✅ Build complete! Your dist folder is ready for deployment.');
  console.log('\\n📁 You can now:');
  console.log('   • Drag the dist folder to netlify.com/drop');
  console.log('   • Use "netlify deploy --prod --dir=dist"');
  console.log('   • Upload to any static hosting service');

} catch (error) {
  console.error('\\n❌ Build failed:', error.message);
  process.exit(1);
}`,

  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Building A Better Brand® - AI-Powered Platform for Brand Builders</title>
    <meta name="description" content="The AI-powered platform to launch, learn, build and grow your brand. Everything emerging entrepreneurs need to turn influence into equity." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

  'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import '../styles/globals.css'
import { Toaster } from '../components/ui/sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
)`,

  '.gitignore': `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Misc
.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Netlify
.netlify/`,

  'README.md': `# Building A Better Brand®

AI-powered platform for emerging entrepreneurs and independent brand builders.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 🌐 Live Site

Visit: [buildingabetterbrand.ai](https://buildingabetterbrand.ai)

## 📧 Features

- Modern React + TypeScript
- Tailwind CSS styling
- Mailchimp integration for waitlist
- Responsive design
- Netlify deployment ready

## 🎨 Brand Colors

- Royal: #2212AB
- Teal: #00A8A8
- Orange: #F96B09
- Gold: #FFBD4A

## 📦 Deployment

This site is configured for Netlify deployment. See \`netlify.toml\` for configuration.

## 📄 License

© Building a Better Brand® - All rights reserved.
`,

  '_TO_COPY_FROM_FIGMA_MAKE.txt': `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEP: COPY YOUR FILES FROM FIGMA MAKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your project structure is ready! Now you need to copy your actual code from 
Figma Make.

COPY THESE FILES (in order of priority):

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 1 - CORE FILES (5 files - CRITICAL!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ ALREADY CREATED:
   ✓ package.json
   ✓ vite.config.ts
   ✓ tsconfig.json
   ✓ tsconfig.node.json
   ✓ index.html
   ✓ src/main.tsx
   ✓ netlify.toml

📋 COPY FROM FIGMA MAKE:

1. App.tsx
   Location in Figma Make: Root folder → App.tsx
   Destination: ${PROJECT_NAME}/App.tsx
   
2. styles/globals.css
   Location in Figma Make: styles/ → globals.css
   Destination: ${PROJECT_NAME}/styles/globals.css

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 2 - YOUR CUSTOM COMPONENTS (3 files)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. components/ContactFormModal.tsx
4. components/FloatingEmailCapture.tsx
5. components/figma/ImageWithFallback.tsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 3 - UI COMPONENTS (47 files from components/ui/)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Copy ALL files from: components/ui/ folder in Figma Make
To: ${PROJECT_NAME}/components/ui/

Files to copy:
- accordion.tsx
- alert-dialog.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- badge.tsx
- breadcrumb.tsx
- button.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- input.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx
- textarea.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx
- use-mobile.ts
- utils.ts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 4 - IMPORTS (11 files)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Copy ALL files from: imports/ folder in Figma Make
To: ${PROJECT_NAME}/imports/

Files to copy:
- Container-113-2874.tsx
- Container-113-3339.tsx
- Container-113-923.tsx
- Container.tsx
- Frame307.tsx
- Frame308.tsx
- svg-1jtbj4ifh4.ts
- svg-22w2f94f7c.ts
- svg-j0swvdttp1.ts
- svg-lnp0444ftu.ts
- svg-ve6rtmtkd9.ts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 5 - PUBLIC ASSETS (7 files)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Copy these files/images:
- public/avatar-woman.jpg
- public/avatar-woman-2.jpg  
- public/vite.svg
- public/_redirects/Code-component-1-113.tsx
- public/_redirects/Code-component-1-127.tsx
- public/_redirects/Code-component-1-133.tsx
- public/_redirects/Code-component-1-151.tsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY 6 - WORKFLOWS (1 file - Optional)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- workflows/deploy.yml (for GitHub Actions auto-deploy)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO COPY FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

METHOD 1 - Manual Copy (Recommended for beginners):
1. In Figma Make, click on a file
2. Select all content (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)
4. Create the file in your local project folder
5. Paste (Ctrl+V / Cmd+V)
6. Save

METHOD 2 - Batch Select:
1. Open both Figma Make and your file explorer side by side
2. Click file in Figma Make
3. Copy content
4. Create and paste in local folder
5. Repeat for all files

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AFTER COPYING FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open terminal in the ${PROJECT_NAME}/ folder
2. Run: npm install
3. Run: npm run dev
4. Your site opens at http://localhost:3000
5. SUCCESS! 🎉

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME ESTIMATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Priority 1-2 (Core + Components): ~5 minutes
Priority 3 (UI Components): ~15 minutes  
Priority 4-5 (Imports + Public): ~5 minutes
Total: ~25 minutes for complete copy

TIP: Start with Priority 1-2 to get site running, then add the rest!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
};

// Directory structure
const DIRECTORIES = [
  'components/ui',
  'components/figma',
  'imports',
  'public/_redirects',
  'src',
  'styles',
  'workflows'
];

// ================================================================================================
// HELPER FUNCTIONS
// ================================================================================================

function createDirectory(dir) {
  const fullPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
}

function writeFile(filePath, content) {
  const fullPath = path.join(OUTPUT_DIR, filePath);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
}

function cleanOutputDir() {
  if (fs.existsSync(OUTPUT_DIR)) {
    console.log(`📁 Output directory already exists: ${OUTPUT_DIR}`);
    console.log('   Cleaning and recreating...\\n');
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
}

// ================================================================================================
// MAIN EXECUTION
// ================================================================================================

try {
  // Clean and create output directory
  cleanOutputDir();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  console.log('✅ Created project directory\\n');
  
  // Create directory structure
  console.log('📂 Creating folder structure...');
  DIRECTORIES.forEach(dir => {
    createDirectory(dir);
    console.log(`   ✓ ${dir}/`);
  });
  console.log('');
  
  // Write all files
  console.log('📝 Generating configuration files...');
  let filesCreated = 0;
  Object.entries(FILES).forEach(([filePath, content]) => {
    writeFile(filePath, content);
    console.log(`   ✓ ${filePath}`);
    filesCreated++;
  });
  console.log('');
  
  // Success message
  console.log('━'.repeat(80));
  console.log('🎉 PROJECT STRUCTURE CREATED SUCCESSFULLY!');
  console.log('━'.repeat(80));
  console.log('');
  console.log(`📁 Project location: ./${OUTPUT_DIR}/`);
  console.log(`📋 Files created: ${filesCreated}`);
  console.log(`📂 Folders created: ${DIRECTORIES.length}`);
  console.log('');
  console.log('━'.repeat(80));
  console.log('📖 NEXT STEPS - SUPER IMPORTANT!');
  console.log('━'.repeat(80));
  console.log('');
  console.log('1️⃣  READ THE INSTRUCTIONS:');
  console.log(`    Open: ${OUTPUT_DIR}/_TO_COPY_FROM_FIGMA_MAKE.txt`);
  console.log('');
  console.log('2️⃣  COPY YOUR FILES FROM FIGMA MAKE:');
  console.log('    - Priority 1: App.tsx & globals.css (2 files)');
  console.log('    - Priority 2: Your 3 custom components');
  console.log('    - Priority 3: 47 UI components');
  console.log('    - Priority 4: 11 imports');
  console.log('    - Priority 5: 7 public assets');
  console.log('');
  console.log('3️⃣  INSTALL & RUN:');
  console.log(`    cd ${OUTPUT_DIR}`);
  console.log('    npm install');
  console.log('    npm run dev');
  console.log('');
  console.log('━'.repeat(80));
  console.log('⏱️  ESTIMATED TIME');
  console.log('━'.repeat(80));
  console.log('');
  console.log('• Copy Priority 1-2 files: ~5 min → Get site running!');
  console.log('• Copy remaining files: ~20 min → Complete project');
  console.log('• Total: ~25 minutes for full setup');
  console.log('');
  console.log('━'.repeat(80));
  console.log('💡 PRO TIP');
  console.log('━'.repeat(80));
  console.log('');
  console.log('Start by copying ONLY Priority 1-2 files first!');
  console.log('This gets your site running in 5 minutes.');
  console.log('Then add the rest while your dev server is running.');
  console.log('');
  console.log('━'.repeat(80));
  console.log('');
  console.log('Happy building! 🚀');
  console.log('');
  
} catch (error) {
  console.error('\\n❌ Error creating project:', error.message);
  process.exit(1);
}
