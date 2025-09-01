// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.revivethefire.info'; 
  const sections = ['intro', 'mission', 'about', 'contact', 'photos', 'donate', 'beliefs'];
  const locales = ['en', 'es'];

  const sitemapEntries = locales.flatMap((locale) => {
    const mainPage = {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    };
    const sectionPages = sections.map((section) => ({
      url: `${baseUrl}/${locale}#${section}`,
      lastModified: new Date(),
    }));
    return [mainPage, ...sectionPages];
  });

  return sitemapEntries;
}