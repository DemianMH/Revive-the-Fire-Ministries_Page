// src/app/components/footer.tsx
"use client";

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // 1. Importar hooks

const Footer = () => {
  const { t } = useTranslation();

  // 2. Añadir el estado isMounted
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 lg-px-8 text-center">
        <Image src="/logovirkvigen.png" alt="Logo" width={60} height={60} className="mx-auto mb-6" />
        {/* 3. Aplicar la lógica al texto traducido */}
        <h3 className="font-bold text-white uppercase tracking-wider mb-4">
          {isMounted ? t('Footer.contactInfo') : <>&nbsp;</>}
        </h3>
        <p className="text-gray-400 mb-2">email: contact@revivethefire.info</p>
        <p className="text-gray-400 mb-6">PO Box 975, Argyle, TX 76226</p>
        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Revive the Fire Ministries. {isMounted ? t('Footer.copyright') : ''}
        </p>
      </div>
    </footer>
  );
};

export default Footer;