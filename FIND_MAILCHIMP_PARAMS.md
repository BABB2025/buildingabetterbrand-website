# How to Find Your Mailchimp u and id Parameters

Great! Your datacenter is already set to **us20**. Now you just need two more values.

## Quick Find Method

### Step 1: Login to Mailchimp
Go to [mailchimp.com](https://mailchimp.com) and login

### Step 2: Navigate to Signup Forms
1. Click **Audience** in the left sidebar
2. Click **Signup forms** 
3. Click **Embedded forms**

### Step 3: Find the Form Code
You'll see HTML code that looks like this:

```html
<form action="https://buildingabetterbrand.us20.list-manage.com/subscribe/post?u=1234567890abcdef&id=abcdef1234" method="post">
```

### Step 4: Extract the Values

From that URL, copy:
- Everything after `u=` and before `&` → That's your **MAILCHIMP_U**
- Everything after `id=` → That's your **MAILCHIMP_ID**

**Example:**
If your URL is:
```
https://buildingabetterbrand.us20.list-manage.com/subscribe/post?u=1234567890abcdef&id=abcdef1234
```

Then:
- MAILCHIMP_U = `1234567890abcdef`
- MAILCHIMP_ID = `abcdef1234`

### Step 5: Update App.tsx

Open `/App.tsx` and find lines 56-57. Replace:

```javascript
const MAILCHIMP_U = 'YOUR_MAILCHIMP_U';
const MAILCHIMP_ID = 'YOUR_MAILCHIMP_ID';
```

With your actual values:

```javascript
const MAILCHIMP_U = '1234567890abcdef';
const MAILCHIMP_ID = 'abcdef1234';
```

## Alternative Method: Form Builder URL

If you can't find embedded forms:

1. Go to **Audience** → **Signup forms** → **Form builder**
2. Look at your browser's URL bar
3. It will contain the parameters you need

Example URL:
```
https://us20.admin.mailchimp.com/lists/designer/settings?id=abcdef1234
```

The `id` in the URL is your **MAILCHIMP_ID**.

For the `u` parameter, you'll still need to check the embedded form HTML.

## Don't Have an Audience Yet?

If you haven't created an audience/list in Mailchimp:

1. Go to **Audience** → **All contacts**
2. Click **Create Audience**
3. Fill in the required information:
   - **Audience name**: Building a Better Brand Waitlist
   - **Default from email**: INFO@BUILDINGABETTERBRAND.COM
   - **Default from name**: Building a Better Brand
4. Click **Save**
5. Then follow the steps above to get your parameters

## Need the ROLE Field?

Don't forget to add a custom field for capturing user roles:

1. Go to **Audience** → **Settings** → **Audience fields and *|MERGE|* tags**
2. Click **Add A Field**
3. Type: **Text**
4. Name: `Role`
5. Tag: `ROLE`
6. Click **Save**

This will capture whether someone is a Content Creator, Entrepreneur, etc.

---

Once you update those two values in App.tsx, your Mailchimp integration will be fully active! 🚀
