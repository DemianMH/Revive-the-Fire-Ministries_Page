// Ubicación: src/app/components/nav.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const textColor = 'text-gray-300';
  const hoverTextColor = 'hover:text-blue-400';
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#intro', label: t('Navbar.intro') },
    { href: '#mission', label: t('Navbar.mission') },
    { href: '#about', label: t('Navbar.about') },
    { href: '#contact', label: t('Navbar.contact') },
    { href: '#photos', label: t('Navbar.photos') },
    { href: '#donate', label: t('Navbar.donate') },
    { href: '#beliefs', label: t('Navbar.beliefs') }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full py-3 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#home" onClick={handleLinkClick}>
            <Image
              src="/logovirkvigen.png"
              alt="Logo VirkVigen Ministries"
              width={50}
              height={50}
              priority
            />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white ml-4"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={`${textColor} ${hoverTextColor} font-medium`}>{link.label}</a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg pt-4 pb-6 px-6 space-y-4 text-center border-t border-slate-700/50">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className={`block ${textColor} ${hoverTextColor} font-medium text-lg py-2`}>{link.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;