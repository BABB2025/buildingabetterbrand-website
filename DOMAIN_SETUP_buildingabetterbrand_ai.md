# Setup Guide for buildingabetterbrand.ai

Your specific guide to connect **buildingabetterbrand.ai** to your Netlify site.

---

## 🎯 Your Domain: buildingabetterbrand.ai

**.ai domains** are popular for AI/tech brands and work exactly like .com domains with Netlify!

---

## Quick Setup (Choose One Method)

### ✅ Method 1: Netlify DNS (RECOMMENDED - Easiest)

This is the simplest approach - let Netlify handle everything.

#### Step 1: Deploy to Netlify

1. **Go to Netlify**
   - Visit: [app.netlify.com](https://app.netlify.com)
   - Sign up/login (free account)

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag your entire project folder
   - OR connect via GitHub for automatic updates
   - Wait for deployment
   - Your site will be at: `https://your-site.netlify.app`

#### Step 2: Add Custom Domain in Netlify

1. **In Netlify Dashboard**
   - Go to your site
   - Click **"Domain settings"**
   - Click **"Add domain"**
   - Type: `buildingabetterbrand.ai`
   - Click **"Verify"**

2. **Get Nameservers**
   - Netlify will show you 4 nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
   - **Copy these** - you'll need them in the next step

#### Step 3: Update GoDaddy Nameservers

1. **Login to GoDaddy**
   - Go to: [godaddy.com](https://www.godaddy.com)
   - Sign in

2. **Find Your Domain**
   - Click your profile → **"My Products"**
   - Find **buildingabetterbrand.ai**
   - Click **"DNS"** or **"Manage"**

3. **Change Nameservers**
   - Scroll to **"Nameservers"** section
   - Click **"Change"**
   - Select **"I'll use my own nameservers"** or **"Enter my own nameservers (advanced)"**
   - Delete existing nameservers
   - Add the 4 Netlify nameservers (paste them one by one)
   - Click **"Save"**

4. **Confirmation**
   - GoDaddy may warn you about losing email/website
   - Click **"Continue"** or **"I understand"**
   - Changes are saved immediately

#### Step 4: Wait for Propagation

1. **DNS Propagation** (30 min - 2 hours typically)
   - Check status: [whatsmydns.net](https://whatsmydns.net)
   - Type: `buildingabetterbrand.ai`
   - Select: `NS` (Nameserver)
   - Look for Netlify's nameservers to appear

2. **SSL Certificate** (automatic)
   - Once DNS propagates, Netlify automatically provisions SSL
   - Usually within 30 minutes of DNS propagation
   - Go to Netlify → Domain settings → HTTPS
   - You'll see "Your site has HTTPS enabled"

#### Step 5: Enable HTTPS Redirect

1. **In Netlify**
   - Go to **Domain settings**
   - Scroll to **HTTPS** section
   - Toggle **"Force HTTPS"** to ON
   - This ensures all visitors use the secure version

#### Step 6: Configure WWW Redirect

1. **Add www subdomain** (optional but recommended)
   - In Netlify Domain settings
   - Click **"Add domain alias"**
   - Type: `www.buildingabetterbrand.ai`
   - Set `buildingabetterbrand.ai` as **Primary domain**
   - Netlify will redirect `www` to non-www automatically

#### ✅ Done!
Your site will be live at:
- ✅ `https://buildingabetterbrand.ai`
- ✅ `https://www.buildingabetterbrand.ai` (redirects to non-www)

---

### Method 2: Keep GoDaddy DNS

If you prefer to keep GoDaddy managing your DNS (e.g., for email):

#### Step 1: Deploy to Netlify
Same as Method 1, Step 1

#### Step 2: Add Domain in Netlify
1. In Netlify, click **"Domain settings"** → **"Add domain"**
2. Enter: `buildingabetterbrand.ai`
3. Netlify will show DNS configuration instructions

#### Step 3: Configure GoDaddy DNS

1. **Login to GoDaddy**
   - Navigate to: My Products → buildingabetterbrand.ai → **Manage DNS**

2. **Add A Record** (for root domain)
   - Click **"Add"** in DNS Records section
   - **Type**: `A`
   - **Name**: `@`
   - **Value**: `75.2.60.5` (Netlify's load balancer)
   - **TTL**: `600` seconds or `1 hour`
   - Click **"Save"**

3. **Add CNAME for www**
   - Click **"Add"**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `your-site-name.netlify.app` (replace with your actual Netlify URL)
   - **TTL**: `1 hour`
   - Click **"Save"**

4. **Example:**
   If your Netlify URL is `buildingabetterbrand.netlify.app`, your DNS should be:
   ```
   A Record:
   Name: @
   Value: 75.2.60.5
   
   CNAME Record:
   Name: www
   Value: buildingabetterbrand.netlify.app
   ```

#### Step 4: Wait & Verify
- Wait 30 min - 2 hours for DNS propagation
- Check: [whatsmydns.net](https://whatsmydns.net)
- In Netlify, go to Domain settings → Verify DNS configuration
- Provision SSL certificate

---

## Special Notes for .ai Domains

### DNS Propagation
- **.ai domains** can take 2-6 hours for full DNS propagation
- Sometimes up to 24 hours (normal for some TLDs)
- Be patient - this is normal!

### Email Considerations
- If you have email on `buildingabetterbrand.ai`:
  - **Method 1**: Need to add MX records in Netlify DNS after setup
  - **Method 2**: Email continues working normally
  
### WHOIS Privacy
- .ai domains may have different WHOIS privacy rules
- Check GoDaddy settings if privacy is important

---

## Testing Checklist

After DNS propagates, test these URLs:

- [ ] `http://buildingabetterbrand.ai` → redirects to HTTPS ✅
- [ ] `https://buildingabetterbrand.ai` → site loads ✅
- [ ] `http://www.buildingabetterbrand.ai` → redirects to HTTPS ✅
- [ ] `https://www.buildingabetterbrand.ai` → redirects to non-www ✅
- [ ] SSL certificate shows as valid (green lock) ✅
- [ ] Test on mobile device ✅
- [ ] Test Mailchimp form submission ✅

---

## Your Exact Configuration

Based on your setup, here's what you need:

### If Using Netlify DNS (Method 1):

**In GoDaddy:**
```
Nameservers:
- dns1.p01.nsone.net
- dns2.p01.nsone.net  
- dns3.p01.nsone.net
- dns4.p01.nsone.net
```
*(Replace with actual nameservers from Netlify)*

**In Netlify:**
- Primary domain: `buildingabetterbrand.ai`
- Domain alias: `www.buildingabetterbrand.ai`
- HTTPS: Enabled + Force HTTPS

### If Using GoDaddy DNS (Method 2):

**In GoDaddy DNS:**
```
A Record:
Name: @
Value: 75.2.60.5
TTL: 1 hour

CNAME Record:
Name: www
Value: [your-netlify-url].netlify.app
TTL: 1 hour
```

---

## Troubleshooting

### "DNS Not Propagating"
**Solution:**
- Wait longer (up to 24 hours for .ai domains)
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private mode
- Check different device/network
- Use [DNS Checker](https://dnschecker.org)

### "SSL Certificate Not Provisioning"
**Solution:**
- Verify DNS is fully propagated first
- In Netlify: Domain settings → HTTPS → "Verify DNS configuration"
- Wait 1 hour after DNS propagates
- Try "Renew certificate" button
- Contact Netlify support if still issues

### "Site Shows Netlify URL Instead of My Domain"
**Solution:**
- Set custom domain as Primary in Netlify
- Check domain settings in Netlify
- Verify DNS records are correct

### "Losing Email After Nameserver Change"
**Solution:**
- If using Method 1, add MX records in Netlify DNS:
  1. Go to Netlify → Domain settings → DNS panel
  2. Add your email provider's MX records
  3. Usually looks like: `mx.example.com` with priority 10
- Or switch to Method 2 (keep GoDaddy DNS)

---

## Timeline Expectations

**For buildingabetterbrand.ai:**

⏱️ **Today:**
- ✅ Deploy to Netlify: 5-10 minutes
- ✅ Update DNS in GoDaddy: 2 minutes

⏱️ **1-2 Hours Later:**
- ✅ DNS starts propagating
- ✅ Some users can access via your domain

⏱️ **4-6 Hours Later:**
- ✅ Most users worldwide can access
- ✅ SSL certificate provisioned

⏱️ **24 Hours Later:**
- ✅ 100% worldwide propagation
- ✅ All DNS servers updated

---

## Email Setup (If Needed)

### If You Have GoDaddy Email:

**Option A - Using Netlify DNS:**
After changing nameservers, add these in Netlify DNS panel:

1. Get MX records from GoDaddy:
   - Usually: `smtp.secureserver.net` (priority 0)
   - And: `mailstore1.secureserver.net` (priority 10)

2. Add them in Netlify → Domain settings → DNS panel

**Option B - Keep GoDaddy DNS:**
Use Method 2 instead - your email will work without changes

---

## Next Steps After Domain is Live

1. **Test Everything**
   - Waitlist form submissions
   - Mailchimp integration
   - Mobile responsiveness
   - All links work

2. **Set Up Analytics** (Optional)
   - Add Google Analytics
   - Or use Netlify Analytics

3. **Configure Contact Email**
   - Make sure INFO@BUILDINGABETTERBRAND.AI works
   - Set up email forwarding in GoDaddy if needed

4. **Share Your Site!**
   - Update social media profiles
   - Update business cards
   - Send to your network

---

## Need Help?

**Recommended approach for you:**
✅ Use **Method 1 (Netlify DNS)** - it's simpler and Netlify handles everything

**Time commitment:**
- 5 min to deploy
- 2 min to update nameservers  
- 1-6 hours waiting for DNS
- ✅ Total active work: ~7 minutes!

---

## Quick Command Reference

### Check DNS Propagation:
Visit: https://whatsmydns.net/?query=buildingabetterbrand.ai&type=A

### Check Nameservers:
Visit: https://whatsmydns.net/?query=buildingabetterbrand.ai&type=NS

### Test SSL:
Visit: https://www.ssllabs.com/ssltest/analyze.html?d=buildingabetterbrand.ai

---

**Ready to go live?** Follow Method 1 and you'll be live in a few hours! 🚀

Let me know if you need help with any specific step!
