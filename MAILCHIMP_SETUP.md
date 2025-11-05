# Mailchimp Integration Setup Guide

Your contact modal is already connected to Mailchimp! You just need to add your Mailchimp credentials to activate it.

## Step-by-Step Setup

### 1. Create/Login to Mailchimp Account
- Go to [mailchimp.com](https://mailchimp.com)
- Sign up for free (free for up to 500 contacts) or login

### 2. Create an Audience (if you haven't already)
- Navigate to **Audience** → **All contacts**
- Click **Create Audience**
- Fill in your details:
  - **Default From Email**: INFO@BUILDINGABETTERBRAND.COM
  - **Audience Name**: Building a Better Brand Waitlist
  - **Default From Name**: Building a Better Brand

### 3. Add a Custom Field for Role
- Go to **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
- Click **Add A Field**
- Select **Text**
- Field name: `Role`
- Tag: `ROLE` (this is important!)
- Click **Save**

### 4. Get Your Mailchimp Credentials

#### Option A: From Embedded Forms
1. Go to **Audience** → **Signup forms** → **Embedded forms**
2. Look for the form HTML code that contains a line like:
   ```html
   <form action="https://buildingabetterbrand.us21.list-manage.com/subscribe/post?u=abc123def456&id=xyz789012" method="post">
   ```
3. Extract these values:
   - **DATACENTER**: `us21` (the part before `.list-manage.com`)
   - **MAILCHIMP_U**: `abc123def456` (the value after `u=` and before `&`)
   - **MAILCHIMP_ID**: `xyz789012` (the value after `id=`)

#### Option B: From Form Builder
1. Go to **Audience** → **Signup forms** → **Form builder**
2. Click **Select** on "Signup form URL"
3. The URL will look like: `https://buildingabetterbrand.us21.list-manage.com/subscribe?u=abc123def456&id=xyz789012`
4. Extract the same values as above

### 5. Update Your Code

Open `/App.tsx` and find these lines (around line 56-58):

```javascript
const MAILCHIMP_U = 'YOUR_MAILCHIMP_U';
const MAILCHIMP_ID = 'YOUR_MAILCHIMP_ID';
const DATACENTER = 'YOUR_DATACENTER';
```

Replace with your actual values:

```javascript
const MAILCHIMP_U = 'abc123def456'; // Your actual u parameter
const MAILCHIMP_ID = 'xyz789012'; // Your actual id parameter
const DATACENTER = 'us21'; // Your actual datacenter
```

### 6. Test It!

1. Save the file
2. Open your website
3. Click "Join the Waitlist"
4. Fill out the form and submit
5. Check your Mailchimp dashboard to see the new subscriber!

## What Happens When Someone Submits?

1. **Email** is captured in Mailchimp
2. **Role** is saved as a custom field (e.g., "Content Creator", "Entrepreneur")
3. **Confirmation email** is automatically sent by Mailchimp (if you enable double opt-in)
4. **Success message** appears on your website

## Mailchimp Settings to Configure

### Enable Double Opt-In (Recommended)
1. Go to **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Under "Form settings", enable **Enable double opt-in**
3. This sends a confirmation email to verify the email address

### Customize Confirmation Email
1. Go to **Audience** → **Signup forms** → **Form builder**
2. Click **Settings** tab
3. Customize the confirmation email message

### Create Welcome Email (Optional)
1. Go to **Campaigns** → **Email**
2. Create an automated welcome email
3. Set trigger: When someone joins your list

## Troubleshooting

### Issue: Not receiving submissions
- **Check your credentials** are correct in App.tsx
- **Verify the ROLE field** exists in Mailchimp with tag `ROLE`
- **Check browser console** for any error messages

### Issue: Subscribers not showing up
- **Check spam folder** for confirmation emails
- **Disable double opt-in** if you want immediate signups
- **Check Mailchimp dashboard** under Audience → All contacts

### Issue: Form says "success" but nothing in Mailchimp
- Verify you've saved the changes in App.tsx
- Clear browser cache and refresh
- Check if you're in demo mode (check console logs)

## Benefits You Get

✅ **Free up to 500 contacts**  
✅ **Email automation** for welcome sequences  
✅ **Analytics** on open rates, clicks, etc.  
✅ **Segmentation** by role (Content Creator, Entrepreneur, etc.)  
✅ **Export contacts** to CSV anytime  
✅ **GDPR compliant** with built-in unsubscribe  
✅ **Professional emails** with templates  

## Need Help?

- [Mailchimp Support](https://mailchimp.com/help/)
- [Mailchimp Getting Started Guide](https://mailchimp.com/help/getting-started-with-mailchimp/)

---

**Your integration is ready!** Just add your credentials and you're good to go! 🚀
