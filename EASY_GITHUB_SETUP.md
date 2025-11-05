# Easy GitHub Setup - 3 Simple Steps

**100% FREE** - Get your project on GitHub in 15 minutes!

---

## 🎯 The Plan

1. **Run export script** → Creates local copy of all files
2. **Create GitHub repo** → Free account, takes 2 minutes
3. **Upload files** → Drag & drop to GitHub

---

## Step 1: Export Your Project (5 minutes)

I've created an export script that copies all your essential files!

### Option A: If You Have Node.js Installed

**Check if you have Node.js:**
```bash
node --version
```

**If you see a version number (e.g., v18.x.x):**

1. Save the `export-project.js` file (I created it above)
2. Open terminal in your project folder
3. Run:
   ```bash
   node export-project.js
   ```
4. Done! You'll have a folder: `buildingabetterbrand-export/` with all your files ✅

### Option B: Manual File Collection (No Node.js Needed)

If you don't have Node.js, I'll give you a simpler approach below.

---

## Step 2: Create GitHub Repository (2 minutes)

### A. Sign up for GitHub (if needed)

1. Go to: https://github.com/signup
2. Enter your email
3. Create password
4. Choose username
5. Verify email
6. Select **FREE** plan ✅

### B. Create Repository

1. **Login to GitHub**: https://github.com
2. **Click "+" button** (top right) → "New repository"
3. **Fill in details:**
   ```
   Repository name: buildingabetterbrand-website
   Description: Landing page for Building a Better Brand®
   Visibility: ☑️ Private (recommended)
   
   ☑️ Add a README file
   ☑️ Add .gitignore: Node
   License: None
   ```
4. **Click "Create repository"** 🎉

---

## Step 3: Upload Your Files (8 minutes)

### Method 1: Drag & Drop (Easiest!)

1. **In your GitHub repository page:**
   - Look for the "uploading an existing file" link
   - OR click "Add file" → "Upload files"

2. **Drag your files:**
   - Open the `buildingabetterbrand-export/` folder on your computer
   - Select ALL files and folders
   - Drag them to the GitHub upload area
   - Wait for upload to complete

3. **Commit changes:**
   - Add commit message: "Initial commit - Building a Better Brand website"
   - Click "Commit changes"

4. **Done!** ✅ All your files are on GitHub!

### Method 2: Git Commands (If You Know Git)

```bash
cd buildingabetterbrand-export
git init
git add .
git commit -m "Initial commit - Building a Better Brand website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/buildingabetterbrand-website.git
git push -u origin main
```

---

## 🎉 You're Done!

Your project is now on GitHub! Here's what you can do:

### Download as ZIP Anytime
1. Go to your GitHub repo
2. Click green "Code" button
3. Select "Download ZIP"
4. Extract and work locally!

### Connect to Netlify (Auto-Deploy)
1. Go to Netlify: https://app.netlify.com
2. "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your `buildingabetterbrand-website` repo
5. Settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Now every Git push = automatic deployment!** 🚀

---

## 📦 Files Included in Export

**Your export includes 78 essential files:**

✅ Configuration (7 files)
- package.json, vite.config.ts, tsconfig files, netlify.toml, etc.

✅ Source Code (3 files)
- App.tsx, main.tsx, globals.css

✅ Components (50 files)
- Your custom components (3)
- UI components (47)

✅ Imports (11 files)
- All SVG and container components

✅ Public Assets (7 files)
- Images and redirect components

❌ Skipped: Documentation .md files (not needed for deployment)

---

## 🚫 Common Issues & Solutions

### "I don't have Node.js"

**No problem!** Use the manual method:

1. **Create GitHub repo** (Step 2 above)
2. **Upload files one by one** using GitHub web interface:
   - Click "Add file" → "Create new file"
   - Type filename with path: `src/main.tsx`
   - Paste content (I'll provide below if needed)
   - Commit
3. Takes longer but works perfectly!

### "Git is not recognized"

You don't need Git! Use the drag & drop method in the web interface.

### "Upload failed"

- GitHub has a 100 file limit per upload
- Solution: Upload in batches:
  - Batch 1: Core files (package.json, config files)
  - Batch 2: Components folder
  - Batch 3: UI components
  - Batch 4: Everything else

---

## 💡 What's Next?

### Option A: Work Locally
```bash
cd buildingabetterbrand-export
npm install
npm run dev
# Site opens at http://localhost:5173
```

### Option B: Deploy to Netlify
- Connect GitHub repo to Netlify
- Every push = automatic deployment
- Your domain (buildingabetterbrand.ai) stays connected

### Option C: Keep Using Figma Make
- Make changes in Figma Make
- Export updated files
- Push to GitHub
- Netlify auto-deploys

---

## 🎯 Need Help?

**If you don't have Node.js and want manual instructions:**

Reply "manual" and I'll provide step-by-step instructions with file contents to copy-paste for each file.

**If export script didn't work:**

Reply "help" with the error message and I'll troubleshoot.

**If you want to skip GitHub:**

Let me know and I can show you other options!

---

## ✅ Quick Checklist

- [ ] Export project files (run script OR manual copy)
- [ ] Create GitHub account (free!)
- [ ] Create repository (buildingabetterbrand-website)
- [ ] Upload all files (drag & drop)
- [ ] Download as ZIP OR connect to Netlify
- [ ] Celebrate! 🎉

---

**Ready to start?** Let me know if you:
- ✅ Successfully ran the export script
- ❓ Need manual file-by-file instructions
- ❓ Have questions about any step

You're so close to having full control of your codebase! 🚀
