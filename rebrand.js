// rebrand.js
// Automated rebranding script for PathForge Automations
// Run this after extracting your original ZIP: node rebrand.js

import fs from "fs";
import path from "path";

const root = process.cwd();
const brandName = "PathForge";
const tagline = "Crafting Intelligent Automation Solutions";
const copyright =
  "© 2025 PathForge Automations – Crafting Intelligent Automation Solutions";

// --- Helper: recursively process files ---
function walk(dir, action) {
  fs.readdirSync(dir).forEach((f) => {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) walk(fullPath, action);
    else action(fullPath);
  });
}

// --- 1️⃣ Clean up PathForge references ---
function replacePathForgeWithPathForge(file) {
  if (file.includes("node_modules") || file.includes("dist")) return;
  const exts = [".js", ".jsx", ".ts", ".tsx", ".json", ".html", ".md", ".css"];
  if (!exts.includes(path.extname(file))) return;

  let data = fs.readFileSync(file, "utf8");
  if (/PathForge/i.test(data)) {
    data = data
      .replace(/PathForge\.dev/gi, "pathforgeautomations.com")
      .replace(/PathForge/gi, brandName)
      .replace(/PathForge/gi, brandName);
    fs.writeFileSync(file, data, "utf8");
    console.log("🧹 Rebranded:", file);
  }
}

// --- 2️⃣ Update README.md ---
const newReadme = `# 🌐 ${brandName} Portfolio  

### *${tagline}*  

Welcome to the official portfolio of **${brandName} Automations** — a dynamic, modern, and professional web experience that showcases innovation, design, and technology craftsmanship.

---

## 🚀 Overview  
**${brandName} Portfolio** is a fully responsive and performance-driven website built to highlight creative and technical projects. It offers a minimal aesthetic, fluid animations, and strong usability across all devices — perfectly suited for showcasing work in a sleek, professional way.

---

## ✨ Features  
- 🎨 Modern, sleek, and minimalist UI  
- ⚡ Built with React + Tailwind for ultra-fast performance  
- 📱 Fully responsive for mobile, tablet, and desktop  
- 🌙 Light and dark mode compatibility  
- 🧩 Modular, easily customizable components  
- 🧠 SEO-optimized and accessible  
- 🖼️ Integrated sections for About, Projects, Services, and Contact  

---

## 🛠️ Tech Stack  
| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel / Netlify (recommended) |

---

## ⚙️ Setup & Installation  
\`\`\`bash
git clone https://github.com/yourusername/pathforge-portfolio.git
cd pathforge-portfolio
npm install
npm run dev
\`\`\`

---

## 📂 Folder Structure  
\`\`\`
pathforge-portfolio/
├── public/
├── src/
├── package.json
└── README.md
\`\`\`

---

## 💼 About ${brandName}  
At **${brandName} Automations**, we build intelligent, efficient, and future-ready digital products.  
Our mission: *to transform manual operations into seamless automation through design and code excellence.*

> *“${tagline}”*

---

## 🧾 License  
This project is proprietary to **${brandName} Automations**.  
${copyright}

---

## 📞 Contact  
📧 pathforge.automations@gmail.com 
🌐 https://pathforgeautomations.netlify.app
`;

fs.writeFileSync(path.join(root, "README.md"), newReadme, "utf8");
console.log("✅ README.md updated for PathForge branding.");

// --- 3️⃣ Run file replacements ---
walk(root, replacePathForgeWithPathForge);

console.log("\n🎉 PathForge rebranding completed successfully!");
console.log("You can now zip this folder as PathForge_Folio_Cleaned.zip");
