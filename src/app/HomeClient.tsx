"use client";

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import AnimatedSection from './components/AnimatedSection';
import HeroSection from './components/HeroSection';
import { useModal } from './context/ModalContext';

const PhotoCarousel = dynamic(() => import('./components/PhotoCarousel'), {
ssr: false,
loading: () => <div className="h-96 w-full bg-slate-200 animate-pulse rounded-lg" />,
});
const BeliefsSection = dynamic(() => import('./components/BeliefsSection'));

// La función ya NO recibe props. Se elimina la interfaz y los parámetros.
export default function HomeClient() {
const { t } = useTranslation();
const { openDonateModal } = useModal(); 
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);

const carouselPhotos = [
    { src: "/image-gallery-1.jpeg", alt: "Ministry event 1" },
    { src: "/image-gallery-2.jpg", alt: "Ministry event 2" },
    { src: "/image-gallery-3.jpg", alt: "Ministry event 3" },
    { src: "/image-gallery-4.jpeg", alt: "Ministry event 4" },
    { src: "/image-gallery-8.jpg", alt: "Ministry event 8" },
    { src: "/image-gallery-10.jpeg", alt: "Ministry event 10" },
    { src: "/image-gallery-11.jpg", alt: "Ministry event 11" },
];

return (
    <>
    <HeroSection />
    <AnimatedSection id="intro" className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{isMounted ? t('HomePage.introTitle') : <>&nbsp;</>}</h2>
        <p className="text-lg text-slate-600 leading-relaxed">{isMounted ? t('HomePage.introText') : <>&nbsp;</>}</p>
        </div>
    </AnimatedSection>
    
    <AnimatedSection id="mission" className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{isMounted ? t('HomePage.missionTitle') : <>&nbsp;</>}</h2>
        <p className="text-lg text-slate-600 leading-relaxed">{isMounted ? t('HomePage.missionText') : <>&nbsp;</>}</p>
        </div>
    </AnimatedSection>

    <AnimatedSection id="about" className="bg-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{isMounted ? t('HomePage.aboutTitle') : <>&nbsp;</>}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{isMounted ? t('HomePage.aboutText') : <>&nbsp;</>}</p>
        </div>
        <div className="flex justify-center">
            <Image src="/image-gallery-9.png" alt="Kirk David Vigen" width={300} height={300}  />
        </div>
        </div>
    </AnimatedSection>

    <AnimatedSection id="photos" className="bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">{isMounted ? t('HomePage.photosTitle') : <>&nbsp;</>}</h2>
        <PhotoCarousel images={carouselPhotos} />
        </div>
    </AnimatedSection>

    <AnimatedSection id="donate" className="bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{isMounted ? t('HomePage.donateTitle') : <>&nbsp;</>}</h2>
        <p className="text-lg text-blue-100 leading-relaxed mb-8">{isMounted ? t('HomePage.donateText') : <>&nbsp;</>}</p>
        <button
            onClick={openDonateModal}
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
        >
            {isMounted ? t('HomePage.donateButton') : <>&nbsp;</>}
        </button>
        </div>
    </AnimatedSection>
    
    <BeliefsSection />
    </>
);
}