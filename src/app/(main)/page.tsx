// Ubicación: src/app/[locale]/page.tsx
"use client";

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

import AnimatedSection from '../components/AnimatedSection';
import HeroSection from '../components/HeroSection';

const PhotoCarousel = dynamic(() => import('../components/PhotoCarousel'), { 
  ssr: false,
  loading: () => <div className="h-96 w-full bg-slate-200 animate-pulse rounded-lg" />,
});
const BeliefsSection = dynamic(() => import('../components/BeliefsSection'));

export default function Home() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <HeroSection />;
  }

  const carouselPhotos = [
    { src: "/image-gallery-1.jpeg", alt: "Ministry event 1" }, 
    { src: "/image-gallery-2.jpg", alt: "Ministry event 2" },
    { src: "/personas.jpg", alt: "Ministry event 3" },
  ];

  return (
    <>
      <HeroSection />

      <AnimatedSection id="intro" className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('HomePage.introTitle')}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t('HomePage.introText')}</p>
        </div>
      </AnimatedSection>
      
      <AnimatedSection id="mission" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('HomePage.missionTitle')}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t('HomePage.missionText')}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className="bg-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('HomePage.aboutTitle')}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t('HomePage.aboutText')}</p>
          </div>
          <div className="flex justify-center">
            <Image src="/image-gallery-2.jpg" alt="Kirk David Vigen" width={300} height={300} className="rounded-full shadow-2xl" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{t('HomePage.contactTitle')}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-lg">
            <div className="flex items-center gap-3 text-slate-700">
              <FaPhone className="text-blue-600" />
              <span>817-975-3959</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <FaEnvelope className="text-blue-600" />
              <span>PO Box 975, Argyle, TX 76226</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="photos" className="bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">{t('HomePage.photosTitle')}</h2>
          <PhotoCarousel images={carouselPhotos} />
        </div>
      </AnimatedSection>

      <AnimatedSection id="donate" className="bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('HomePage.donateTitle')}</h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">{t('HomePage.donateText')}</p>
          <a href="#" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300">{t('HomePage.donateButton')}</a>
        </div>
      </AnimatedSection>
      
      <BeliefsSection />
    </>
  );
}