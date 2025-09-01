// src/app/components/HeroSection.tsx
"use client";

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
const { t } = useTranslation();

return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
        <Image 
        src="/personas.jpg" 
        alt="Multitud con las manos levantadas" 
        fill={true}
        style={{objectFit: 'cover'}}
        quality={85} 
        priority 
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pb-16">
        <div className="relative w-full max-w-lg h-auto">
        <Image 
            src="/flama.gif"
            alt="Llama de avivamiento"
            width={500}
            height={500}
            className="opacity-70 rounded-full"
        />
        </div>
    </div>
    <div className="relative z-20 p-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">{t('HomePage.heroTitle')}</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">{t('HomePage.heroSubtitle')}</p>
        <a href="#intro" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">{t('HomePage.heroButton')}</a>
    </div>
    </section>
);
};

export default HeroSection;