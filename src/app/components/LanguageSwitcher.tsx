// Ubicación: src/app/components/LanguageSwitcher.tsx
'use client';

import { useTranslation } from 'react-i18next';
import { ChangeEvent } from 'react';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative">
      <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <select
        value={i18n.language.split('-')[0]} // Muestra 'es' o 'en'
        onChange={handleLanguageChange}
        className="bg-slate-800 border border-slate-600 text-white text-sm rounded-lg pl-10 pr-4 py-2 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}