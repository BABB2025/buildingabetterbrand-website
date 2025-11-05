# Netlify Deployment Checklist for buildingabetterbrand.ai

Quick reference checklist to deploy your site and connect your domain.

---

## Pre-Deployment Checklist

- [x] Mailchimp integration configured ✅
- [x] All images loading correctly ✅
- [x] Contact form working ✅
- [x] Responsive design tested ✅
- [x] netlify.toml configured ✅

---

## Deployment Steps

### 1️⃣ Deploy to Netlify

**Option A: Drag & Drop (Fastest)**
- [ ] Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- [ ] Drag your entire project folder
- [ ] Wait for deployment (2-5 minutes)
- [ ] Get your Netlify URL: `___________________.netlify.app`

**Option B: GitHub (Better for Updates)**
- [ ] Push code to GitHub
- [ ] Connect GitHub repo to Netlify
- [ ] Set build command: (auto-detected)
- [ ] Set publish directory: `dist`
- [ ] Deploy

### 2️⃣ Configure Custom Domain

- [ ] Click "Domain settings" in Netlify
- [ ] Click "Add domain"
- [ ] Enter: `buildingabetterbrand.ai`
- [ ] Click "Verify"
- [ ] Copy the 4 nameservers shown:
  ```
  1. ______________________________
  2. ______________________________
  3. ______________________________
  4. ______________________________
  ```

### 3️⃣ Update GoDaddy

- [ ] Login to [GoDaddy.com](https://godaddy.com)
- [ ] Go to: My Products → buildingabetterbrand.ai
- [ ] Click "DNS" or "Manage DNS"
- [ ] Scroll to "Nameservers"
- [ ] Click "Change"
- [ ] Select "I'll use my own nameservers"
- [ ] Paste the 4 Netlify nameservers
- [ ] Click "Save"

### 4️⃣ Add WWW Subdomain

- [ ] In Netlify Domain settings
- [ ] Click "Add domain alias"
- [ ] Enter: `www.buildingabetterbrand.ai`
- [ ] Set `buildingabetterbrand.ai` as primary

### 5️⃣ Enable HTTPS

- [ ] Wait for DNS to propagate (check [whatsmydns.net](https://whatsmydns.net))
- [ ] In Netlify → Domain settings → HTTPS
- [ ] Click "Verify DNS configuration"
- [ ] Wait for SSL certificate (automatic)
- [ ] Enable "Force HTTPS"

### 6️⃣ Test Your Site

- [ ] Visit `https://buildingabetterbrand.ai`
- [ ] Check SSL (green lock icon)
- [ ] Test `www.buildingabetterbrand.ai` redirects
- [ ] Test waitlist form submission
- [ ] Check Mailchimp receives submissions
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Verify hero images load
- [ ] Check stats section
- [ ] Test carousel auto-scroll

---

## Verification Tests

### DNS Tests
- [ ] Check A records: [whatsmydns.net/?query=buildingabetterbrand.ai&type=A](https://whatsmydns.net/?query=buildingabetterbrand.ai&type=A)
- [ ] Check NS records: [whatsmydns.net/?query=buildingabetterbrand.ai&type=NS](https://whatsmydns.net/?query=buildingabetterbrand.ai&type=NS)

### SSL Tests
- [ ] Green padlock shows in browser
- [ ] Certificate valid for buildingabetterbrand.ai
- [ ] Test at: [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/analyze.html?d=buildingabetterbrand.ai)

### Functionality Tests
- [ ] Hero section loads with animations
- [ ] Floating email capture works
- [ ] Contact modal opens
- [ ] Form validation works
- [ ] Mailchimp submission successful
- [ ] Success toast appears
- [ ] Stats counters visible
- [ ] Photo collage displays correctly
- [ ] Industry logos carousel scrolls
- [ ] Mobile menu works
- [ ] All images load (no broken images)

---

## Important URLs

### Your Site
- **Live Site**: https://buildingabetterbrand.ai
- **WWW Redirect**: https://www.buildingabetterbrand.ai
- **Netlify Dashboard**: https://app.netlify.com

### Tools
- **DNS Check**: https://whatsmydns.net
- **SSL Test**: https://www.ssllabs.com/ssltest
- **Speed Test**: https://pagespeed.web.dev
- **Mobile Test**: https://search.google.com/test/mobile-friendly

### Admin
- **GoDaddy**: https://godaddy.com
- **Mailchimp**: https://mailchimp.com
- **Netlify**: https://app.netlify.com

---

## Timeline

| Time | Expected Progress |
|------|------------------|
| Now | Deploy & configure DNS |
| +30 min | DNS starts propagating |
| +1 hour | Site accessible for many users |
| +2 hours | SSL certificate provisioned |
| +4 hours | Most users can access site |
| +24 hours | 100% worldwide propagation |

---

## Troubleshooting Quick Fixes

### Site not loading
- [ ] Check DNS propagation (wait longer)
- [ ] Clear browser cache
- [ ] Try incognito mode
- [ ] Check on different device

### SSL not working
- [ ] Verify DNS has propagated
- [ ] In Netlify: Verify DNS configuration
- [ ] Wait 1 hour, try "Renew certificate"

### Form not submitting
- [ ] Check browser console for errors
- [ ] Verify Mailchimp credentials in App.tsx
- [ ] Test with different email address

---

## Post-Launch Tasks

### Immediate (Day 1)
- [ ] Send test email through contact form
- [ ] Share link with team for feedback
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on multiple devices (desktop, tablet, mobile)

### Week 1
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Update email signature with new URL

### Ongoing
- [ ] Monitor Mailchimp for new subscribers
- [ ] Check Netlify analytics
- [ ] Keep content updated
- [ ] Backup subscriber list monthly

---

## Support Contacts

**Netlify Support**
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com
- Support: support@netlify.com

**GoDaddy Support**
- Support: https://www.godaddy.com/contact-us
- DNS Help: https://www.godaddy.com/help/manage-dns-680

**Mailchimp Support**
- Help: https://mailchimp.com/help
- Support: https://mailchimp.com/contact

---

## Notes

**DNS Propagation:**
Write down when you changed DNS: _______________

**Expected live time:** _______________

**Actual live time:** _______________

**Issues encountered:**
1. _________________________________
2. _________________________________
3. _________________________________

**Resolution:**
1. _________________________________
2. _________________________________
3. _________________________________

---

**🎉 Congratulations!** Once all checkboxes are complete, your site is live!

**Share your success:**
- Tweet: "Just launched buildingabetterbrand.ai 🚀"
- LinkedIn: Share your achievement
- Team: Celebrate the launch!

---

Last updated: Ready to deploy!
