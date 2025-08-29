// Ubicación: src/app/(main)/layout.tsx

import "../globals.css";
import { Inter } from 'next/font/google';
import ClientWrapper from '../components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Revive the Fire Ministries',
    url: 'https://revivethefire.info',
    logo: 'https://revivethefire.info/logovirkvigen.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-817-975-3959',
      contactType: 'Customer Service',
    },
    mainEntityOfPage: [
      { '@type': 'WebPage', '@id': 'https://revivethefire.info/#mission', name: 'Nuestra Misión' },
      { '@type': 'WebPage', '@id': 'https://revivethefire.info/#about', name: 'Acerca de Nosotros' },
      { '@type': 'WebPage', '@id': 'https://revivethefire.info/#beliefs', name: 'Lo que Creemos' },
      { '@type': 'WebPage', '@id': 'https://revivethefire.info/#contact', name: 'Contacto' },
      { '@type': 'WebPage', '@id': 'https://revivethefire.info/#donate', name: 'Donar' }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth"> {/* Podemos poner 'es' como idioma por defecto */}
      <head>
        <title>Revive the Fire Ministries | Kirk David Vigen</title>
        <meta name="description" content="Revive the Fire es un llamado a avivar la llama del avivamiento, ver almas salvas y liberadas, los enfermos sanados y discípulos equipados." />
        <meta name="keywords" content="avivamiento, revival, evangelista, ministerio, Kirk Vigen, misionero" />
        <meta name="author" content="Kirk David Vigen" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-slate-800`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}