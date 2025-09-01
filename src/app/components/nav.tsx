// src/app/components/nav.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importar Link
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLink {
  href?: string;
  label: string;
  action?: 'donate';
}

const Navbar = ({ onDonateClick }: { onDonateClick: () => void }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { href: '/#intro', label: t('Navbar.intro') },
    { href: '/#mission', label: t('Navbar.mission') },
    { href: '/#about', label: t('Navbar.about') },
    { href: '/contact', label: t('Navbar.contact') },
    { href: '/#photos', label: t('Navbar.photos') },
    { action: 'donate', label: t('Navbar.donate') },
    { href: '/#beliefs', label: t('Navbar.beliefs') }
  ];

  const renderNavLink = (link: NavLink) => {
    const className = "text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300";
    if (link.action === 'donate') {
      return (
        <button key={link.label} onClick={() => { onDonateClick(); handleLinkClick(); }} className={`${className} bg-transparent border-none cursor-pointer`}>
          {link.label}
        </button>
      );
    }
    // Si la ruta es interna y no es un ancla, usar Link
    if (link.href && link.href.startsWith('/') && !link.href.includes('#')) {
      return <Link key={link.href} href={link.href} onClick={handleLinkClick} className={className}>{link.label}</Link>;
    }
    // Para anclas (/#...), mantenemos la etiqueta <a> para el scroll-smooth
    return <a key={link.href} href={link.href} onClick={handleLinkClick} className={className}>{link.label}</a>;
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-3 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Usar Link para el logo */}
        <Link href="/#home" onClick={handleLinkClick} className="flex-shrink-0 flex items-center space-x-3">
          <Image
            src="/logovirkvigen.png"
            alt="Logo VirkVigen Ministries"
            width={55}
            height={55}
            priority
          />
          <span className="text-gray-100 text-lg font-semibold whitespace-nowrap hidden sm:inline">
            {t('Navbar.ministryName')}
          </span>
        </Link>

        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white ml-4"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(renderNavLink)}
          <LanguageSwitcher />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg pt-4 pb-6 px-6 space-y-4 text-center border-t border-slate-700/50">
          {navLinks.map(renderNavLink)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;