# Quick Start: Deploy & Connect Domain

The fastest way to get your site live with your GoDaddy domain.

## 🚀 5-Minute Setup

### Step 1: Deploy to Netlify (2 minutes)

1. **Go to Netlify Drop**
   - Visit: [app.netlify.com/drop](https://app.netlify.com/drop)
   - Sign up if needed (it's free!)

2. **Drag & Drop**
   - Drag your entire project folder to the upload area
   - Wait for deployment to complete
   - You'll get a URL like: `random-name-123.netlify.app`

3. **Rename Your Site (Optional)**
   - Click "Site settings"
   - Click "Change site name"
   - Choose something like: `buildingabetterbrand`
   - Your URL becomes: `buildingabetterbrand.netlify.app`

### Step 2: Connect Your Domain (3 minutes)

1. **Add Domain in Netlify**
   - In your Netlify site dashboard
   - Click "Domain settings" → "Add domain"
   - Type your domain (e.g., `buildingabetterbrand.com`)
   - Click "Verify"

2. **Copy Nameservers**
   - Netlify shows you 4 nameservers
   - Copy them (they look like `dns1.p01.nsone.net`)

3. **Update GoDaddy**
   - Login to [GoDaddy](https://godaddy.com)
   - Go to: My Products → Your Domain → Manage DNS
   - Scroll to "Nameservers" → Click "Change"
   - Select "Enter my own nameservers"
   - Paste the 4 Netlify nameservers
   - Click "Save"

### Step 3: Wait & Test

1. **Wait for DNS** (30 min - 2 hours)
   - Check propagation: [whatsmydns.net](https://whatsmydns.net)

2. **SSL Auto-Setup** (automatic)
   - Netlify will automatically provision SSL
   - Your site will be HTTPS within an hour

3. **Test Your Site**
   - Visit: `https://yourdomain.com`
   - ✅ You're live!

---

## Alternative: Keep GoDaddy DNS

If you want to keep GoDaddy as your DNS provider:

### In Netlify:
1. Add your domain
2. Note your Netlify site URL: `your-site.netlify.app`

### In GoDaddy DNS:
1. Go to: Manage DNS
2. **Add A Record:**
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5`
   - Save

3. **Add CNAME Record:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`
   - Save

4. Wait 1-2 hours for DNS propagation

---

## ✅ Checklist

- [ ] Deployed to Netlify
- [ ] Custom domain added
- [ ] Nameservers updated (or DNS records added)
- [ ] Waiting for DNS propagation
- [ ] SSL certificate active
- [ ] Site accessible via your domain

---

## Need Help?

See the full guide: `GODADDY_DOMAIN_SETUP.md`

---

**Questions?** Drop your domain name and I'll give you specific instructions!
