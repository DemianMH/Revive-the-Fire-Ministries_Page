// Ubicación: src/app/components/footer.tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8 text-center">
        <Image src="/logovirkvigen.png" alt="Logo" width={60} height={60} className="mx-auto mb-6" />
        <h3 className="font-bold text-white uppercase tracking-wider mb-4">{t('Footer.contactInfo')}</h3>
        <p className="text-gray-400 mb-2">Tel: 817-975-3959</p>
        <p className="text-gray-400 mb-6">PO Box 975, Argyle, TX 76226</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white"><FaYoutube size={24} /></a>
          <a href="#" aria-label="Tiktok" className="text-gray-400 hover:text-white"><FaTiktok size={24} /></a>
        </div>
        <p className="text-sm text-gray-500 mt-8">&copy; {new Date().getFullYear()} Revive the Fire Ministries. {t('Footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;