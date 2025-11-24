# Visitor Tracking Guide

This guide explains how to set up and use visitor tracking for your portfolio website. Two options are available:

## 🎯 Option 1: Google Analytics 4 (Recommended)

**Google Analytics 4 (GA4)** is a comprehensive, free analytics service that provides detailed insights about your website visitors, including:

- Total number of visitors
- Page views
- User demographics
- Traffic sources
- User behavior
- Real-time analytics

### Setup Instructions:

1. **Create a Google Analytics Account**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Sign in with your Google account
   - Create a new property for your website

2. **Get Your Measurement ID**
   - In your GA4 property, go to Admin → Data Streams
   - Click on your web stream
   - Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

3. **Configure Your Website**
   - Open `src/utils/analytics.js`
   - Replace `'G-XXXXXXXXXX'` with your actual Measurement ID:
     ```javascript
     export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your ID
     ```

4. **Verify It's Working**
   - After deploying, visit your website
   - Go to Google Analytics → Reports → Realtime
   - You should see your visit appear within a few seconds

### Benefits:
- ✅ Free and comprehensive
- ✅ Professional analytics dashboard
- ✅ Privacy compliant
- ✅ Works automatically once configured

---

## 🔢 Option 2: Simple Visitor Counter

A lightweight visitor counter that displays the total number of visits. This uses **localStorage** by default and optionally supports **CountAPI** for real-time counting across all visitors.

### Setup (Local Storage - Default):

The visitor counter is already set up and working! It uses localStorage to count unique visits.

**Current Configuration:**
```jsx
<VisitorCounter 
  showCounter={true}
  useCountAPI={false}
  countAPINamespace=""
/>
```

### Setup (CountAPI - Real-time across all devices):

If you want the counter to sync across all visitors (not just localStorage), use CountAPI:

1. **Create a CountAPI Namespace** (optional)
   - Visit [CountAPI](https://countapi.xyz/)
   - Create a namespace for your website (e.g., `your-portfolio.com`)
   - Or use any unique string as your namespace

2. **Update Configuration**
   - In `src/App.jsx`, update the VisitorCounter component:
     ```jsx
     <VisitorCounter 
       showCounter={true}
       useCountAPI={true}  // Enable CountAPI
       countAPINamespace="your-portfolio.com"  // Your namespace
     />
     ```

### Customization:

**Hide the counter:**
```jsx
<VisitorCounter showCounter={false} />
```

**Change position:**
Edit `src/styles/VisitorCounter.css` to adjust the `bottom` and `right` values.

---

## 📊 Comparing the Options

| Feature | Google Analytics | Simple Counter |
|---------|-----------------|----------------|
| **Setup Complexity** | Easy (requires account) | Very Easy (works out of the box) |
| **Data Storage** | Google's servers | localStorage / CountAPI |
| **Insights** | Comprehensive | Basic count only |
| **Privacy** | GDPR compliant | Local storage based |
| **Cost** | Free | Free |
| **Real-time Sync** | Yes | With CountAPI |
| **Best For** | Professional analytics | Simple visitor count display |

---

## 🔧 Advanced Usage

### Track Custom Events (Google Analytics)

You can track custom events like button clicks, form submissions, etc.:

```javascript
import { trackEvent } from './utils/analytics'

// Example: Track a button click
const handleButtonClick = () => {
  trackEvent({
    action: 'click',
    category: 'button',
    label: 'Contact Button',
    value: 1
  })
}
```

### Track Form Submissions

Update your `Contact.jsx` component to track form submissions:

```javascript
import { trackEvent } from '../utils/analytics'

const handleSubmit = async (e) => {
  e.preventDefault()
  
  // Track the event
  trackEvent({
    action: 'submit',
    category: 'form',
    label: 'Contact Form',
    value: 1
  })
  
  // ... rest of your form logic
}
```

### Access Visitor Count Programmatically

```javascript
import { getLocalCount, getCountAPI } from './utils/visitorCounter'

// Get count from localStorage
const localCount = getLocalCount()

// Get count from CountAPI (if configured)
const apiCount = await getCountAPI('your-namespace', 'visits')
```

---

## 🚀 Deployment Notes

- **Google Analytics**: Works automatically once you've configured the Measurement ID
- **Visitor Counter**: Works immediately with localStorage, no setup needed
- **CountAPI**: Make sure to configure the namespace before deployment if using it

---

## ❓ FAQ

**Q: Which option should I use?**  
A: Use Google Analytics for comprehensive insights. Use the simple counter if you just want a visible visitor count.

**Q: Can I use both?**  
A: Yes! They work independently and complement each other.

**Q: Does the counter work on mobile?**  
A: Yes, it's fully responsive and positioned to not interfere with other UI elements.

**Q: Is visitor data private?**  
A: Google Analytics anonymizes IP addresses by default. The simple counter uses localStorage or CountAPI, which are privacy-friendly.

**Q: Will the counter reset on page refresh?**  
A: No, it only counts new visits (visits more than 1 hour apart).

---

## 📝 Files Created

- `src/utils/analytics.js` - Google Analytics integration
- `src/utils/visitorCounter.js` - Visitor counting utilities
- `src/components/VisitorCounter.jsx` - Visitor counter component
- `src/styles/VisitorCounter.css` - Styling for the counter

---

## 🎨 Customization

The visitor counter is styled with:
- Purple theme matching your portfolio
- Fixed position in bottom-right corner
- Smooth animations
- Responsive design

You can customize the colors, position, and styling in `src/styles/VisitorCounter.css`.

---

Need help? Check the code comments in each file for detailed explanations!

