# Connect Your GoDaddy Domain to Your Website

This guide will walk you through connecting your GoDaddy domain to your Building a Better Brand® website.

## Overview

Your site is configured to deploy to Netlify (based on the `netlify.toml` file). Here's what you'll do:

1. **Deploy your site to Netlify** (if not already done)
2. **Configure your GoDaddy domain** to point to Netlify
3. **Set up SSL** for HTTPS (automatic with Netlify)

---

## Part 1: Deploy to Netlify

### Option A: Deploy via Netlify Drop (Easiest)

1. **Build your site locally**
   - If you're using Figma Make, the site is already built
   - Otherwise, run: `npm run build`

2. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign up or login (free account is fine)

3. **Deploy via Drag & Drop**
   - Look for "Sites" in the sidebar
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder
   - Netlify will deploy your site and give you a URL like: `https://your-site-name.netlify.app`

### Option B: Deploy via GitHub (Recommended for Updates)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Build settings should auto-detect (or use):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Note your Netlify URL**
   - After deployment, you'll get a URL like: `https://your-site-name.netlify.app`
   - Keep this handy for testing

---

## Part 2: Configure Your GoDaddy Domain

You have two options for connecting your domain:

### Option A: Using Netlify DNS (Recommended - Easier)

#### Step 1: Add Your Domain in Netlify

1. Go to your Netlify site dashboard
2. Click **Domain settings**
3. Click **Add a domain**
4. Enter your domain (e.g., `buildingabetterbrand.com`)
5. Click **Verify**
6. Netlify will provide you with **nameservers** (usually 4 nameservers)
7. **Copy these nameservers** - they'll look like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

#### Step 2: Update GoDaddy Nameservers

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Sign in to your account

2. **Navigate to Domain Settings**
   - Click on your profile icon (top right)
   - Select **"My Products"**
   - Find your domain in the list
   - Click the domain name or click the three dots → **"Manage DNS"**

3. **Change Nameservers**
   - Scroll down to the **"Nameservers"** section
   - Click **"Change"**
   - Select **"Enter my own nameservers (advanced)"**
   - Remove existing nameservers
   - Add the 4 Netlify nameservers (one in each field)
   - Click **"Save"**

4. **Wait for Propagation**
   - DNS changes can take **24-48 hours** to propagate worldwide
   - Usually takes 1-4 hours
   - You can check status at [whatsmydns.net](https://www.whatsmydns.net)

5. **Verify in Netlify**
   - Go back to Netlify → Domain settings
   - Netlify will automatically verify and set up SSL
   - You'll see a green checkmark when it's ready

### Option B: Using GoDaddy DNS (More Control)

If you want to keep GoDaddy as your DNS provider:

#### Step 1: Get Netlify's IP Address

1. In Netlify, go to **Domain settings**
2. Add your custom domain
3. Netlify will show you DNS records to add

#### Step 2: Configure GoDaddy DNS Records

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Navigate to **My Products** → Your domain → **Manage DNS**

2. **Add A Record (for root domain)**
   - Click **"Add"** in the DNS Records section
   - Type: **A**
   - Name: **@** (this represents your root domain)
   - Value: Netlify's Load Balancer IP: **75.2.60.5**
   - TTL: **600 seconds** (or default)
   - Click **"Save"**

3. **Add CNAME Record (for www)**
   - Click **"Add"**
   - Type: **CNAME**
   - Name: **www**
   - Value: **your-site-name.netlify.app** (your Netlify URL without https://)
   - TTL: **1 Hour** (or default)
   - Click **"Save"**

4. **Wait for Propagation**
   - DNS changes take 30 minutes to 48 hours
   - Usually takes 1-2 hours

---

## Part 3: Set Up SSL Certificate (HTTPS)

Netlify provides free SSL certificates automatically!

1. **In Netlify Dashboard**
   - Go to **Domain settings**
   - Scroll to **HTTPS** section
   - Click **"Verify DNS configuration"**
   - Once verified, click **"Provision certificate"**
   - Wait a few minutes for SSL to activate

2. **Enable HTTPS Redirect**
   - In the same HTTPS section
   - Toggle on **"Force HTTPS"**
   - This redirects all HTTP traffic to HTTPS

3. **Test Your Site**
   - Visit `https://yourdomain.com`
   - You should see a lock icon in the browser
   - Your site is now secure!

---

## Part 4: Configure WWW Redirect (Optional but Recommended)

You'll want both `buildingabetterbrand.com` and `www.buildingabetterbrand.com` to work.

### In Netlify:

1. Go to **Domain settings**
2. Under **Custom domains**, you should see both:
   - `buildingabetterbrand.com` (primary)
   - `www.buildingabetterbrand.com`
3. Set one as **Primary domain**
4. Netlify will automatically redirect the other to the primary

### Common Setup:
- **Primary**: `buildingabetterbrand.com`
- **Redirect**: `www.buildingabetterbrand.com` → `buildingabetterbrand.com`

---

## Troubleshooting

### Issue: "Domain already registered to another account"
**Solution**: 
- The domain might be claimed by another Netlify account
- Contact Netlify support or remove it from the other account

### Issue: DNS not propagating
**Solution**:
- Wait longer (up to 48 hours)
- Clear your browser cache
- Try incognito/private browsing mode
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)

### Issue: SSL certificate not provisioning
**Solution**:
- Verify DNS records are correct
- Make sure CAA records in GoDaddy aren't blocking Let's Encrypt
- Wait 24 hours and try again
- Contact Netlify support

### Issue: Site shows "404 Not Found"
**Solution**:
- Check that your `dist` folder was deployed
- Verify the publish directory in Netlify is set to `dist`
- Check `netlify.toml` configuration

### Issue: Email stops working after changing nameservers
**Solution**:
- If using Option A (Netlify DNS), you need to add email DNS records in Netlify
- Or use Option B (GoDaddy DNS) to keep email working
- For GoDaddy email, keep the MX records in GoDaddy DNS

---

## Quick Checklist

- [ ] Site deployed to Netlify
- [ ] Netlify URL is working (https://your-site.netlify.app)
- [ ] Custom domain added in Netlify
- [ ] Nameservers updated in GoDaddy (Option A) OR DNS records added (Option B)
- [ ] DNS propagation complete (check whatsmydns.net)
- [ ] SSL certificate provisioned
- [ ] HTTPS redirect enabled
- [ ] Both www and non-www versions working
- [ ] Test on multiple devices

---

## DNS Propagation Timeline

⏱️ **Expected Timeline:**
- **Immediate**: Changes saved in GoDaddy
- **30 min - 2 hours**: Most users will see changes
- **4 - 8 hours**: 95% of users will see changes
- **24 - 48 hours**: 100% worldwide propagation

---

## Important Notes

### About Email
- If you have GoDaddy email (or any email) on your domain:
  - **Option A (Netlify DNS)**: You'll need to migrate email DNS records to Netlify
  - **Option B (GoDaddy DNS)**: Your email will continue working normally

### About Subdomains
- If you want subdomains (like `app.buildingabetterbrand.com`):
  - Add them in Netlify Domain settings
  - Add corresponding DNS records in your DNS provider

### Cost
- ✅ **Netlify hosting**: FREE (up to 100GB bandwidth/month)
- ✅ **SSL Certificate**: FREE (automatic via Let's Encrypt)
- ✅ **Custom domain**: Already owned (GoDaddy)
- 💰 **Domain renewal**: Annual cost through GoDaddy

---

## Need More Help?

### Netlify Resources
- [Netlify Docs - Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Netlify Support](https://www.netlify.com/support/)

### GoDaddy Resources
- [GoDaddy DNS Management](https://www.godaddy.com/help/manage-dns-records-680)
- [GoDaddy Support](https://www.godaddy.com/contact-us)

### DNS Checking Tools
- [whatsmydns.net](https://www.whatsmydns.net) - Check DNS propagation
- [dnschecker.org](https://dnschecker.org) - Alternative DNS checker
- [ssllabs.com](https://www.ssllabs.com/ssltest/) - Test SSL certificate

---

## What Domain Are You Connecting?

Let me know your actual domain name and I can provide more specific instructions!

Examples:
- `buildingabetterbrand.com`
- `buildabetterbrand.com`
- `babbrand.com`

Once you share the domain, I can give you exact DNS records to configure. 🚀
