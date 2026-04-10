# Accrew Website

Professional website for Accrew - AI-Powered Bookkeeping & Business Insights for Hong Kong Professionals.

## 🌐 Live Site

**Will be:** https://accrew.ai  
**Status:** Ready to deploy

---

## 📁 Project Structure

```
website/
├── index.html           # Homepage
├── about.html          # About page (to be created)
├── services.html       # Services page (to be created)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Interactive features
├── images/            # Images (add logo, photos here)
├── DEPLOYMENT.md      # Deployment guide
└── README.md          # This file
```

---

## ✨ Features

- **Responsive Design:** Works perfectly on desktop, tablet, and mobile
- **Modern UI:** Professional gradient design with Accrew brand colors
- **Fast Loading:** Optimized CSS and minimal JavaScript
- **SEO Ready:** Semantic HTML, meta tags, proper headings
- **Accessibility:** ARIA labels, semantic markup
- **Interactive:** Smooth scrolling, mobile navigation, fade-in animations

---

## 🎨 Design System

### Colors
- **Primary:** `#1a7a8a` (Teal)
- **Secondary:** `#6a4c93` (Purple)
- **Accent:** `#f59e0b` (Amber)
- **Gradient:** Teal → Purple

### Typography
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** DM Sans (Google Fonts)

### Components
- Hero section with stats and mockup
- Problem/solution sections
- Industry cards
- Pricing tiers
- Timeline (How It Works)
- CTA sections
- Responsive navigation

---

## 🚀 Quick Start

### View Locally

1. **Open index.html in browser:**
   ```bash
   cd website
   open index.html
   # or on Windows: start index.html
   # or on Linux: xdg-open index.html
   ```

2. **Or use a local server (better):**

   **Option A: Python**
   ```bash
   cd website
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

   **Option B: Node.js**
   ```bash
   npx serve website
   # Visit http://localhost:3000
   ```

   **Option C: VS Code**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

---

## 🌍 Deploy to accrew.ai

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for full instructions.

**Recommended:** Vercel (one-command deployment)

```bash
cd website
npx vercel
```

---

## ✅ Before Deploying

Update these placeholders:

### Contact Information
- [ ] Phone number: Search for `+852-XXXX-XXXX` and replace
- [ ] WhatsApp: Same as phone
- [ ] Office address: Search for `[Your Address, Hong Kong]`
- [ ] Calendly link: Add your booking URL

### Founder Information
In `../config/firm-profile.yml`:
- [ ] Founder name
- [ ] LinkedIn profile
- [ ] Background/experience

### Optional
- [ ] Add real logo (replace emoji favicon)
- [ ] Add photos/screenshots to `/images/`
- [ ] Create About page (`about.html`)
- [ ] Create Services page (`services.html`)
- [ ] Add contact form backend
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

---

## 📄 Pages Included

### ✅ Homepage (index.html)
Complete and ready:
- Hero section with value proposition
- Problem section (industry pain points with data)
- Solution section (6 key features)
- Industries section (6 verticals)
- Pricing section (3 tiers + add-ons)
- How It Works timeline
- Testimonials placeholder (founding clients)
- Contact CTA with email/WhatsApp
- Footer

### 🚧 To Be Created (Optional)
- **about.html:** Founder story, credentials, technology
- **services.html:** Detailed service descriptions
- **contact.html:** Contact form with backend
- **blog.html:** Content marketing (future)

---

## 🔧 Customization

### Change Colors

Edit `css/style.css`, update CSS variables:

```css
:root {
  --primary-color: #1a7a8a;  /* Change this */
  --secondary-color: #6a4c93; /* And this */
}
```

### Add Logo

1. Place logo file in `/images/logo.svg` (or .png)
2. Edit `index.html`, replace:
   ```html
   <span class="logo-text">Accrew</span>
   ```
   with:
   ```html
   <img src="images/logo.svg" alt="Accrew">
   ```

### Add Favicon

Replace this line in `<head>`:
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,...">
```
with:
```html
<link rel="icon" href="images/favicon.ico">
```

---

## 📊 Analytics (Optional)

### Google Analytics

Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-friendly alternative)

```html
<script defer data-domain="accrew.ai" src="https://plausible.io/js/script.js"></script>
```

---

## 🐛 Troubleshooting

### Mobile menu not working
- Check browser console for JavaScript errors
- Ensure `js/main.js` is loading correctly

### Styles not applying
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check `css/style.css` path is correct

### Images not showing
- Ensure images are in `/images/` folder
- Check file paths are relative (e.g., `images/logo.png`, not `/images/logo.png`)

---

## 🎯 SEO Checklist

After deployment:

- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add OpenGraph tags for social sharing
- [ ] Create sitemap.xml
- [ ] Add structured data (JSON-LD for Local Business)
- [ ] Optimize meta descriptions
- [ ] Add alt text to all images

---

## 📝 Content Strategy (Future)

Consider adding:

1. **Blog/Resources**
   - "Trust Account Compliance Checklist for HK Law Firms"
   - "How to Recover Underbilled Revenue"
   - "SFC Compliance Calendar"

2. **Case Studies**
   - Add to `/case-studies.html` as you win clients

3. **Tools**
   - ROI Calculator
   - Free cash flow forecast

4. **Resources**
   - Downloadable templates
   - Compliance checklists

---

## 🔒 Security

- HTTPS enforced (automatic with Vercel/Netlify)
- No user data collection (yet)
- No cookies (yet)
- Privacy policy placeholder (add when you collect data)

---

## 🤝 Support

- **Website issues:** Check DEPLOYMENT.md
- **Content updates:** Edit HTML files directly
- **Design changes:** Edit `css/style.css`
- **Functionality:** Edit `js/main.js`

---

## 📞 Contact

**Email:** hello@accrew.ai  
**Website:** https://accrew.ai (once deployed)

---

## 📜 License

© 2026 Accrew. All rights reserved.

---

**Ready to launch? See [DEPLOYMENT.md](DEPLOYMENT.md) to get live in 30 minutes!**
