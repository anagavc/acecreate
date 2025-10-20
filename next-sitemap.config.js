/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://acecreate.tech",
  generateRobotsTxt: true, // (optional) Generate robots.txt
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://acecreate.tech/server-sitemap.xml", // <==== Add here
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};
