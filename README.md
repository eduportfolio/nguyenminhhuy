# Student Portfolio Website

A professional portfolio website for high school students applying to US universities for semiconductor/electrical engineering programs.

## 🚀 Quick Start

This is a single-page HTML website that requires **no build process** - just open the file and it works!

### View Locally
1. Open `index.html` in any web browser
2. That's it! No installation needed.

## 📤 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name your repo (example: `portfolio` or `yourname.github.io`)
4. Choose **Public**
5. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop `index.html` into the upload area
3. Click **"Commit changes"**

**Option B: Using Git (If you know Git)**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# Copy index.html into this folder
git add index.html
git commit -m "Add portfolio website"
git push origin main
```

### Step 3: Enable GitHub Pages
1. In your repo, go to **Settings** → **Pages** (left sidebar)
2. Under **"Source"**, select **"main"** branch
3. Click **"Save"**
4. Wait 1-2 minutes for deployment

### Step 4: Access Your Website
Your site will be live at:
- If repo is named `yourname.github.io`: `https://yourname.github.io`
- For other repo names: `https://yourname.github.io/repo-name`

## ✏️ Customize Your Content

All content is in the `index.html` file. Search for these sections and replace with your information:

### 1. Personal Information (Lines ~240-250)
```html
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-description">Your bio here...</p>
```

### 2. Navigation Logo (Line ~210)
```html
<div class="nav-logo">Your Name</div>
```

### 3. Awards Section (Starting ~285)
Find the card with class `card blue` and update:
- Image: Replace the `src` attribute with your image URL
- Date, title, organization, description

### 4. Extracurricular Activities (Starting ~340)
Update cards with your activities

### 5. Research Papers (Starting ~410)
Update research cards with your papers, links, tags

### 6. Personal Projects (Starting ~475)
Add your projects with images and descriptions

### 7. Leadership Roles (Starting ~555)
Update with your leadership experience

### 8. Skills (Starting ~600)
Modify skill tags to match your abilities

### 9. Contact Information (Starting ~660)
```html
<a href="mailto:your.email@example.com" class="footer-btn primary">
<a href="tel:+15551234567" class="footer-btn secondary">
```

### 10. Social Links (Line ~685)
Update LinkedIn and GitHub URLs

## 🖼️ Adding Your Images

### Option 1: Use External Image URLs
Replace placeholder image URLs with links to your images:
```html
<img src="https://your-image-url.com/photo.jpg" alt="Description">
```

### Option 2: Host Images on GitHub
1. Create an `images` folder in your repo
2. Upload your images there
3. Reference them like: `<img src="images/your-photo.jpg" alt="Description">`

### Option 3: Use Image Hosting Services
- [Imgur](https://imgur.com) (free, easy)
- [Cloudinary](https://cloudinary.com) (free tier available)
- Google Drive (make sure to set sharing to "Anyone with the link")

## 🎨 Design Features

- **Clean, Professional Design** - Perfect for engineering applications
- **Smooth Animations** - Fade-in effects, hover states
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **Optimized for GitHub Pages** - No build tools required
- **Dark Theme** - Modern tech aesthetic with blue/cyan accents

## 📱 Mobile Responsive

The website automatically adapts to all screen sizes. Test it by:
1. Opening the site on your phone
2. Or resize your browser window

## 🔧 Advanced Customization

### Change Colors
Find the `:root` section (around line 14) and modify CSS variables:
```css
:root {
    --blue-400: #60a5fa;  /* Change this hex code */
    --cyan-400: #22d3ee;  /* Change this hex code */
    /* etc... */
}
```

### Add More Sections
Copy an existing section's HTML and modify it. Make sure to:
1. Give it a unique `id`
2. Add it to the navigation menu
3. Update the JavaScript section tracking

### Change Fonts
Replace the Google Fonts import (line 7) with your preferred font:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update the CSS:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 🐛 Troubleshooting

**Website not showing up on GitHub Pages?**
- Wait 2-5 minutes after enabling Pages
- Check that file is named exactly `index.html` (lowercase)
- Make sure repo is Public
- Check Settings → Pages to see deployment status

**Images not loading?**
- Make sure image URLs are complete (start with `https://`)
- Check that images are publicly accessible
- Verify file paths are correct

**Styling looks broken?**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure you didn't accidentally delete CSS sections

## 📞 Need Help?

Common issues:
1. **Can't find where to edit**: Use Ctrl+F (Cmd+F on Mac) to search for text
2. **Want to add a section**: Copy an existing section and modify it
3. **Images not uploading**: Make sure they're under 25MB

## 📄 License

Feel free to use this template for your portfolio!
Contact minhln.it@gmail.com for more information!

---

