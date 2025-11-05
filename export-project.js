#!/usr/bin/env node

/**
 * Building a Better Brand® - Project Export Script
 * 
 * This script creates a local copy of all essential project files.
 * Run this in Node.js to export your project for GitHub upload.
 * 
 * Usage:
 *   node export-project.js
 * 
 * It will create a folder: buildingabetterbrand-export/
 * with all your essential files ready to upload to GitHub.
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Building a Better Brand® - Project Export Tool\n');

// Define output directory
const OUTPUT_DIR = 'buildingabetterbrand-export';

// Essential files to export (excluding .md documentation)
const ESSENTIAL_FILES = [
  // Core configuration
  'package.json',
  'index.html',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.node.json',
  'netlify.toml',
  'build.js',
  
  // Source files
  'src/main.tsx',
  'App.tsx',
  'styles/globals.css',
  
  // Components
  'components/ContactFormModal.tsx',
  'components/FloatingEmailCapture.tsx',
  'components/figma/ImageWithFallback.tsx',
  
  // UI Components (all of them)
  'components/ui/accordion.tsx',
  'components/ui/alert-dialog.tsx',
  'components/ui/alert.tsx',
  'components/ui/aspect-ratio.tsx',
  'components/ui/avatar.tsx',
  'components/ui/badge.tsx',
  'components/ui/breadcrumb.tsx',
  'components/ui/button.tsx',
  'components/ui/calendar.tsx',
  'components/ui/card.tsx',
  'components/ui/carousel.tsx',
  'components/ui/chart.tsx',
  'components/ui/checkbox.tsx',
  'components/ui/collapsible.tsx',
  'components/ui/command.tsx',
  'components/ui/context-menu.tsx',
  'components/ui/dialog.tsx',
  'components/ui/drawer.tsx',
  'components/ui/dropdown-menu.tsx',
  'components/ui/form.tsx',
  'components/ui/hover-card.tsx',
  'components/ui/input-otp.tsx',
  'components/ui/input.tsx',
  'components/ui/label.tsx',
  'components/ui/menubar.tsx',
  'components/ui/navigation-menu.tsx',
  'components/ui/pagination.tsx',
  'components/ui/popover.tsx',
  'components/ui/progress.tsx',
  'components/ui/radio-group.tsx',
  'components/ui/resizable.tsx',
  'components/ui/scroll-area.tsx',
  'components/ui/select.tsx',
  'components/ui/separator.tsx',
  'components/ui/sheet.tsx',
  'components/ui/sidebar.tsx',
  'components/ui/skeleton.tsx',
  'components/ui/slider.tsx',
  'components/ui/sonner.tsx',
  'components/ui/switch.tsx',
  'components/ui/table.tsx',
  'components/ui/tabs.tsx',
  'components/ui/textarea.tsx',
  'components/ui/toggle-group.tsx',
  'components/ui/toggle.tsx',
  'components/ui/tooltip.tsx',
  'components/ui/use-mobile.ts',
  'components/ui/utils.ts',
  
  // Imports
  'imports/Container-113-2874.tsx',
  'imports/Container-113-3339.tsx',
  'imports/Container-113-923.tsx',
  'imports/Container.tsx',
  'imports/Frame307.tsx',
  'imports/Frame308.tsx',
  'imports/svg-1jtbj4ifh4.ts',
  'imports/svg-22w2f94f7c.ts',
  'imports/svg-j0swvdttp1.ts',
  'imports/svg-lnp0444ftu.ts',
  'imports/svg-ve6rtmtkd9.ts',
  
  // Public files
  'public/avatar-woman.jpg',
  'public/avatar-woman-2.jpg',
  'public/vite.svg',
  'public/_redirects/Code-component-1-113.tsx',
  'public/_redirects/Code-component-1-127.tsx',
  'public/_redirects/Code-component-1-133.tsx',
  'public/_redirects/Code-component-1-151.tsx',
  
  // Workflows
  'workflows/deploy.yml',
  
  // README for the export
  'README.md'
];

// Files to skip (documentation)
const SKIP_FILES = [
  'Attributions.md',
  'CREATE_LOCAL_PROJECT.md',
  'DEPLOYMENT_QUICK_START.md',
  'DESIGN_REVIEW.md',
  'DOMAIN_SETUP_buildingabetterbrand_ai.md',
  'DOWNLOAD_PROJECT_GUIDE.md',
  'EMAIL_SETUP.md',
  'FIND_MAILCHIMP_PARAMS.md',
  'GITHUB_UPLOAD_GUIDE.md',
  'GODADDY_DOMAIN_SETUP.md',
  'LOCAL_PROJECT_SETUP.md',
  'MAILCHIMP_SETUP.md',
  'NETLIFY_DEPLOY_CHECKLIST.md',
  'guidelines/Guidelines.md',
  'export-project.js'
];

// Create output directory
function createOutputDir() {
  if (fs.existsSync(OUTPUT_DIR)) {
    console.log(`📁 Output directory already exists: ${OUTPUT_DIR}`);
    console.log('   Cleaning and recreating...\n');
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✅ Created output directory: ${OUTPUT_DIR}\n`);
}

// Copy file with directory creation
function copyFile(sourcePath, destPath) {
  try {
    // Create destination directory if it doesn't exist
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Copy file
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      return true;
    } else {
      console.log(`   ⚠️  File not found: ${sourcePath}`);
      return false;
    }
  } catch (error) {
    console.log(`   ❌ Error copying ${sourcePath}: ${error.message}`);
    return false;
  }
}

// Create a basic README for the export
function createExportReadme() {
  const readmeContent = `# Building a Better Brand®

Landing page for Building a Better Brand® - helping emerging entrepreneurs and independent brand builders.

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
`;

  const readmePath = path.join(OUTPUT_DIR, 'README.md');
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ Created README.md');
}

// Create .gitignore
function createGitignore() {
  const gitignoreContent = `# Dependencies
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
.netlify/
`;

  const gitignorePath = path.join(OUTPUT_DIR, '.gitignore');
  fs.writeFileSync(gitignorePath, gitignoreContent);
  console.log('✅ Created .gitignore');
}

// Main export function
function exportProject() {
  console.log('📋 Exporting essential files...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  ESSENTIAL_FILES.forEach((file) => {
    // Skip README.md from source (we'll create our own)
    if (file === 'README.md') return;
    
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(OUTPUT_DIR, file);
    
    if (copyFile(sourcePath, destPath)) {
      successCount++;
    } else {
      failCount++;
    }
  });
  
  // Create additional files
  createExportReadme();
  createGitignore();
  
  console.log(`\n✨ Export complete!\n`);
  console.log(`   ✅ ${successCount} files exported successfully`);
  if (failCount > 0) {
    console.log(`   ⚠️  ${failCount} files not found (may be optional)`);
  }
  console.log(`\n📁 Output directory: ${OUTPUT_DIR}/`);
  console.log(`\n🎯 Next steps:`);
  console.log(`   1. Open the ${OUTPUT_DIR}/ folder`);
  console.log(`   2. Upload to GitHub (drag & drop or git commands)`);
  console.log(`   3. Or run locally: cd ${OUTPUT_DIR} && npm install && npm run dev`);
  console.log(`\n🚀 Ready to deploy to buildingabetterbrand.ai!\n`);
}

// Run the export
try {
  createOutputDir();
  exportProject();
} catch (error) {
  console.error('❌ Export failed:', error.message);
  process.exit(1);
}
