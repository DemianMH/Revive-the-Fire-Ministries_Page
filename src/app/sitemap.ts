// Ubicación: src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tusitio.com'; // <-- CAMBIA ESTO POR TU DOMINIO REAL

  // Secciones principales de tu página
const sections = ['intro', 'mission', 'about', 'contact', 'photos', 'donate', 'beliefs'];

  // URLs para cada idioma
const locales = ['en', 'es'];

const sitemapEntries = locales.flatMap((locale) => {
    // Página principal para cada idioma
    const mainPage = {
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    };

    // Enlaces a las secciones para cada idioma
    const sectionPages = sections.map((section) => ({
    url: `${baseUrl}/${locale}#${section}`,
    lastModified: new Date(),
    }));

    return [mainPage, ...sectionPages];
});


return sitemapEntries;
}