import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://visionary-peony-fe1a65.netlify.app";
const routes =  [ "/", "/chicken", "/pasta", "/sushi"];

function generateSitemap() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
        .map((route) => {
            return `
      <url>
        <loc>${siteUrl}${route}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `;
        })
        .join('')}
  </urlset>`;

    fs.writeFileSync(
        path.resolve(__dirname, "./public/sitemap.xml"),
        sitemap,
        "utf8"
    );

    console.log('Sitemap generated successfully');
}

generateSitemap();