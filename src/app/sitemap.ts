// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.revivethefire.info'; 
  const locales = ['en', 'es'];

  // Lista de secciones principales
  const sections = ['intro', 'mission', 'about', 'photos', 'donate'];

  // Lista de IDs de cada creencia (deben coincidir con los de BeliefsSection.tsx)
  const beliefSlugs = [
    'salvation', 'god', 'jesus', 'spirit', 'repentance', 'rapture',
    'eternity', 'healing', 'baptism', 'spirit-baptism', 'bible', 'holiness'
  ];

  const sitemapEntries = locales.flatMap((locale) => {
    // Página principal y página de contacto
    const mainPages = [
      {
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/${locale}/contact`,
        lastModified: new Date(),
      },
    ];

    // URLs para las secciones de la página de inicio
    const sectionPages = sections.map((section) => ({
      url: `${baseUrl}/${locale}#${section}`,
      lastModified: new Date(),
    }));

    // URLs para cada creencia individual
    const beliefPages = beliefSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}#${slug}`,
      lastModified: new Date(),
    }));

    // Combinamos todas las entradas
    return [...mainPages, ...sectionPages, ...beliefPages];
  });

  return sitemapEntries;
}