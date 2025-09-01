"use client";

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import AnimatedSection from './components/AnimatedSection';
import HeroSection from './components/HeroSection';

const PhotoCarousel = dynamic(() => import('./components/PhotoCarousel'), {
ssr: false,
loading: () => <div className="h-96 w-full bg-slate-200 animate-pulse rounded-lg" />,
});
const BeliefsSection = dynamic(() => import('./components/BeliefsSection'));

interface HomeProps {
openDonateModal?: () => void;
}

export default function HomeClient({ openDonateModal }: HomeProps) {
const { t } = useTranslation();

const carouselPhotos = [
    { src: "/image-gallery-1.jpeg", alt: "Ministry event 1" },
    { src: "/image-gallery-2.jpg", alt: "Ministry event 2" },
    { src: "/image-gallery-3.jpg", alt: "Ministry event 3" },
    { src: "/image-gallery-4.jpeg", alt: "Ministry event 4" },
    { src: "/image-gallery-6.jpg", alt: "Ministry event 6" },
    { src: "/image-gallery-7.jpeg", alt: "Ministry event 7" },
    { src: "/image-gallery-8.jpeg", alt: "Ministry event 8" },
    { src: "/image-gallery-10.jpeg", alt: "Ministry event 10" },
    { src: "/image-gallery-11.jpg", alt: "Ministry event 11" },
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
            <Image src="/image-gallery-9.jpeg" alt="Kirk David Vigen" width={300} height={300} className="rounded-full shadow-2xl" />
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
        <button
            onClick={openDonateModal}
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
        >
            {t('HomePage.donateButton')}
        </button>
        </div>
    </AnimatedSection>
    
    <BeliefsSection />
    </>
);
}