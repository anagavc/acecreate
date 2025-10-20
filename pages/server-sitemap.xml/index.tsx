import { GetServerSideProps } from "next";
import { client } from "../../lib/sanity.client";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const portfolio = await client.fetch(
    `*[_type=="portfolio"]{ "slug": slug.current, _updatedAt }`
  );
  const team = await client.fetch(
    `*[_type=="team"]{ "slug": slug.current, _updatedAt }`
  );

  const baseUrl = "https://acecreate.tech";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/portfolio</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      ${portfolio
        .map(
          (project: any) => `
        <url>
          <loc>${baseUrl}/portfolio/${project.slug}</loc>
          <lastmod>${new Date(project._updatedAt).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join("")}
      ${team
        .map(
          (member: any) => `
        <url>
          <loc>${baseUrl}/team/${member.slug}</loc>
          <lastmod>${new Date(member._updatedAt).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
