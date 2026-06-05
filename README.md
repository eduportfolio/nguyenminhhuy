# 🌐 NGUYEN MINH HUY // PORTFOLIO WEBSITE

> **LOG_REF:** #PRT-2026-INIT  
> **STATUS:** DEPLOYED // ACTIVE  
> **INTERFACE:** RESPONSIVE HUD BENTO GRID  

A personal portfolio website engineered with a futuristic Heads-Up Display (HUD) interface combined with a clean, modern Bento Grid layout. This project serves as a digital node to store, archive, and showcase academic milestones, international achievements, and tech-driven projects.

---

## 🛠️ TECH STACK

Built entirely on core frontend web technologies to ensure maximum performance, instant asset loading, and fluid responsive rendering:

* **Frontend Core:** HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid)
* **Interaction Logic:** JavaScript (ES6+)
* **Design System:** Responsive Bento Grid Matrix with a Futuristic Cyberpunk UI vibe.
* **Deployment Platform:** GitHub Pages

---

## 👁️ CORE FEATURES

### 1. Advanced Responsive Bento Grid Layout
* A structured grid matrix that intuitively maps out biography, core competencies, and academic history.
* Utilizes an aggressive responsive reset (`Flex/Grid Matrix Reset`) that dynamically reformats the system layout across Desktop, Tablet, and Mobile displays.
* Resolves content overflow issues on screens under `768px` wide, standardizing oversized featured cards (`card-featured-wide`) to match smaller cards flawlessly.

### 2. Holographic HUD Scanner Animation
* Each award card (`award-hud-card`) integrates a dedicated radar scanning container (`award-scan-frame`) driven by a vertical neon line animation (`scanner-line`) to enhance visual feedback and user engagement.

### 3. Dynamic Information Modals
* Built-in mouse click event handling (`onclick="openModal()"`) to instantly fetch and display full verification records and certificates (such as the AI-JAM Asia Gold Award, iWISE Dubai Gold Medal, or Charles University Physics Brawl rankings) without cluttering the main interface.

---

## 📂 PROJECT ARCHITECTURE

```text
├── assets/                  # Core image assets, award certificates, and media logs (JPEG, PNG)
├── index.html               # Main structural markup and content nodes
├── main.css                 # HUD effects, neon color matrix, and responsive bento grid styling
├── main.js                  # Operational logic for modal components and dynamic UI interactions
├── NguyenMinhHuy_CV.pdf     # Embedded professional resume / curriculum vitae
└── README.md                # System documentation and operational manual