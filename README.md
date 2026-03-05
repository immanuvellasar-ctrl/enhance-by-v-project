# Enhance_by_V — Complete Setup & Deployment Guide

## 📁 Project Structure
```
enhance-by-v/
├── index.html              ← Home page (Hero, Why Us, Services Preview, Testimonials, CTA)
├── css/
│   ├── global.css          ← Shared styles: navbar, footer, variables, utilities
│   ├── home.css            ← Home page specific styles
│   ├── services.css        ← Services page styles
│   ├── portfolio.css       ← Portfolio + filter styles
│   └── booking.css         ← Booking form styles
├── js/
│   ├── main.js             ← Shared: navbar, scroll reveal, smooth scroll
│   ├── portfolio.js        ← Portfolio filter by category
│   └── booking.js          ← Form validation
├── pages/
│   ├── services.html       ← All 6 services with pricing
│   ├── portfolio.html      ← Filterable portfolio gallery
│   └── booking.html        ← Booking form + contact info
└── images/                 ← Add all your images here
    ├── hero.jpg            ← Main hero portrait
    ├── og-cover.jpg        ← Social media preview image (1200x630)
    └── portfolio/          ← Portfolio images folder
        ├── bridal-1.jpg
        ├── bridal-2.jpg
        ├── hair-1.jpg
        └── ... etc
```

---

## 🖼️ STEP 1: Add Your Photos

### Hero photo
In `index.html`, find `<div class="hero-img-placeholder">` and replace with:
```html
<img src="images/hero.jpg" alt="Enhance_by_V Makeup Artist" style="width:100%;height:100%;object-fit:cover;object-position:top center;"/>
```

### Portfolio photos
In `pages/portfolio.html`, for each portfolio item replace:
```html
<div class="portfolio-placeholder" style="...">...</div>
```
With:
```html
<img src="../images/portfolio/your-photo.jpg" alt="Look description" loading="lazy"/>
```

### Services photos
In `pages/services.html`, replace each `.img-placeholder` div with:
```html
<img src="../images/your-service-photo.jpg" alt="Service name"/>
```

**Recommended image sizes:**
- Hero: 800x1000px (portrait)
- Portfolio: 600x800px (portrait, square, or landscape)
- Services: 600x750px (portrait)
- OG cover: 1200x630px (landscape)

---

## 📬 STEP 2: Setup Booking Form (Formspree — FREE)

1. Go to **https://formspree.io** and sign up (free)
2. Click "New Form" → name it "Enhance_by_V Bookings"
3. Copy your form endpoint URL: `https://formspree.io/f/xabcdefg`
4. In `pages/booking.html`, find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Done! Booking submissions will arrive in your email inbox.

**Free tier:** 50 submissions/month. Upgrade ($10/mo) for more.

---

## 🔗 STEP 3: Update Your Details

Search and replace these placeholders across all files:

| Placeholder | Replace with |
|---|---|
| `Your Studio Address` | Your actual address |
| `+91 88076 99389` | Your phone number |
| `enhancebyv@gmail.com` | Your email |
| `YOUR_HANDLE` | Your Instagram handle |
| `YOUR_PAGE` | Your Facebook page URL |
| `YOUR_CHANNEL` | Your YouTube channel |
| `918807699389` | Your phone in WhatsApp format (no +) |

---

## 🚀 STEP 4: Deploy on GitHub Pages (FREE)

### First time setup:

```bash
# 1. Create a GitHub account at github.com (free)

# 2. Create a new repository named: enhance-by-v
#    (or: yourusername.github.io for a root domain)

# 3. Initialize and push your project:
cd enhance-by-v
git init
git add .
git commit -m "Initial commit: Enhance_by_V website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/enhance-by-v.git
git push -u origin main
```

### Enable GitHub Pages:
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source": select **main** branch, folder **/ (root)**
4. Click **Save**
5. Wait ~1 minute → your site is live at:
   `https://YOUR_USERNAME.github.io/enhance-by-v/`

### Deploy updates (every time you make changes):
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```
GitHub Pages auto-deploys within ~30 seconds! ✨

---

## 🌐 STEP 5: Custom Domain (Optional, ~₹700/year)

### Buy a domain:
- **GoDaddy**, **Namecheap**, **BigRock**, **Google Domains**
- Recommended: `enhanceby-v.com` or `enhancebyvstudio.com`

### Connect domain to GitHub Pages:
1. In GitHub repo → Settings → Pages → "Custom domain"
2. Enter your domain: `www.enhanceby-v.com`
3. In your domain registrar, add these DNS records:

**CNAME Record:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**A Records (for root domain):**
```
Type: A  →  185.199.108.153
Type: A  →  185.199.109.153
Type: A  →  185.199.110.153
Type: A  →  185.199.111.153
```

4. Check "Enforce HTTPS" in GitHub Pages settings
5. Wait 24-48hrs for DNS propagation → site is live on your domain!

---

## 📊 STEP 6: Free Tools to Add

### Google Analytics (traffic data)
1. Go to analytics.google.com → create property
2. Get your Measurement ID: `G-XXXXXXXXXX`
3. Add before `</head>` in every HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### WhatsApp Chat Button (floating)
Add before `</body>` in every HTML file:
```html
<a href="https://wa.me/918807699389" target="_blank" 
   style="position:fixed;bottom:2rem;right:2rem;z-index:999;
          background:#25D366;color:white;width:56px;height:56px;
          border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-size:1.5rem;
          box-shadow:0 4px 20px rgba(37,211,102,0.4);
          text-decoration:none;transition:transform 0.3s;"
   onmouseover="this.style.transform='scale(1.1)'"
   onmouseout="this.style.transform='scale(1)'"
   aria-label="Chat on WhatsApp">💬</a>
```

### Google My Business (free, critical for local SEO)
1. Go to business.google.com
2. Add your studio → verify → show up in Google Maps searches

---

## ✅ Launch Checklist

- [ ] All photos added (hero, portfolio, services)
- [ ] Studio details updated (address, phone, email)
- [ ] Social media links updated
- [ ] Formspree form connected and tested
- [ ] Site tested on mobile (Chrome DevTools → device toolbar)
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled and site is live
- [ ] Google Analytics added
- [ ] WhatsApp button added
- [ ] Google My Business listing created
- [ ] Custom domain connected (optional)

---

## 🛠️ Ongoing Maintenance

```bash
# Whenever you want to update the website:
# 1. Edit files locally
# 2. Open terminal in project folder
git add .
git commit -m "What you changed"
git push
# Site updates in ~30 seconds!
```

**Total monthly cost: ₹0** (free forever on GitHub Pages + Formspree free tier)
**With custom domain: ~₹700/year** (~₹60/month)
