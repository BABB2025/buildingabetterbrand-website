# Email Setup Instructions

This document explains how to set up email collection for waitlist signups for Building a Better Brand®.

## Option 1: Mailchimp (Recommended for Email Marketing)

Mailchimp is perfect for building and managing your email list with marketing automation features.

### Setup Steps:

1. **Create a Mailchimp Account**
   - Go to [mailchimp.com](https://mailchimp.com) and sign up (free for up to 500 contacts)

2. **Create an Audience**
   - Navigate to Audience → All contacts
   - Click "Create Audience"
   - Fill in your details (use INFO@BUILDINGABETTERBRAND.COM as the default reply-to)

3. **Get Your Form Action URL**
   - Go to Audience → Signup forms → Embedded forms
   - Look for the form action URL in the generated code
   - It looks like: `https://YOUR_DOMAIN.us1.list-manage.com/subscribe/post?u=XXXXX&id=XXXXX`
   - Copy the `u` and `id` parameters

4. **Update App.tsx**
   - Replace `YOUR_MAILCHIMP_U` with your `u` parameter
   - Replace `YOUR_MAILCHIMP_ID` with your `id` parameter
   - Replace `YOUR_DATACENTER` with your datacenter (e.g., us1, us6, etc.)

### Mailchimp Benefits:
- Unlimited email sends to 500 contacts (free plan)
- Email automation and campaigns
- Analytics and reporting
- Segmentation and tagging
- Built-in unsubscribe management
- GDPR compliant

## Option 2: Formspree (Simple Email Notifications)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Set the form email to: **INFO@BUILDINGABETTERBRAND.COM**
4. Copy your Form ID (looks like: `xyzabc123`)
5. In `/App.tsx`, replace `YOUR_FORM_ID` with your actual Form ID

### Formspree Free Plan Includes:
- 50 submissions per month
- Email notifications
- Spam filtering
- No backend required

## Finding Your Mailchimp Parameters

To find your Mailchimp `u`, `id`, and datacenter:

1. In Mailchimp, go to **Audience** → **Signup forms** → **Embedded forms**
2. Look at the form HTML code for a line like:
   ```html
   <form action="https://YOUR_DOMAIN.us1.list-manage.com/subscribe/post?u=abc123&amp;id=xyz789" method="post">
   ```
3. Extract the values:
   - `u` = the value after `u=` (e.g., `abc123`)
   - `id` = the value after `id=` (e.g., `xyz789`)
   - datacenter = the part before `.list-manage.com` (e.g., `us1`)

## Option 3: EmailJS (Alternative)

1. Go to [emailjs.com](https://www.emailjs.com) and create an account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
5. Update the form submission code in `/App.tsx`

## Option 3: Netlify Forms (If deploying to Netlify)

Since you have `netlify.toml` configured, you can use Netlify Forms:

1. Add `data-netlify="true"` to your form element
2. Netlify will automatically handle form submissions
3. Configure email notifications in Netlify dashboard

## Option 4: Custom Backend

If you want full control, set up a backend API endpoint:

1. Create a serverless function or API endpoint
2. Use a service like SendGrid, Mailgun, or AWS SES
3. Update the fetch URL in `/App.tsx` to point to your endpoint

## Testing

After setup, test the form by:
1. Submitting a test email
2. Check INFO@BUILDINGABETTERBRAND.COM for the notification
3. Verify the success message appears on the website

## Current Implementation

The code is currently configured for Formspree. Simply replace `YOUR_FORM_ID` with your actual Formspree Form ID to activate email notifications.
