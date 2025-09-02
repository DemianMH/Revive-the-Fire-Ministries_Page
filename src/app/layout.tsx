// src/app/layout.tsx
import "./globals.css";
import { Inter } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';
import { Metadata } from "next"; // Asegúrate de importar Metadata

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { // Añadimos el tipo Metadata para autocompletado
  metadataBase: new URL('https://revivethefire.info'),
  title: 'Revive the Fire Ministries | Kirk David Vigen',
  description: 'Revive the Fire es un llamado a avivar la llama del avivamiento, ver almas salvas y liberadas, los enfermos sanados y discípulos equipados.',
  keywords: ['avivamiento', 'revival', 'evangelista', 'ministerio', 'Kirk Vigen', 'misionero'],
  authors: [{ name: 'Kirk David Vigen' }],
  
  // --- INICIO DE LA NUEVA CONFIGURACIÓN DE ÍCONOS ---
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // --- FIN DE LA NUEVA CONFIGURACIÓN DE ÍCONOS ---
  
  openGraph: {
    title: 'Revive the Fire Ministries | Kirk David Vigen',
    description: 'Revive the Fire es un llamado a avivar la llama del avivamiento, ver almas salvas y liberadas, los enfermos sanados y discípulos equipados.',
    url: 'https://revivethefire.info',
    siteName: 'Revive the Fire Ministries',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revive the Fire Ministries | Kirk David Vigen',
    description: 'Revive the Fire es un llamado a avivar la llama del avivamiento, ver almas salvas y liberadas, los enfermos sanados y discípulos equipados.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
    },
  },
};

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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
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