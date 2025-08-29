// Ubicación: src/app/components/BeliefsSection.tsx
"use client";

import { useTranslation } from 'react-i18next';
import { FaCross, FaBible, FaDove, FaHandHoldingHeart, FaBookOpen, FaChurch, FaHandsHelping, FaWater, FaFire, FaPrayingHands, FaHeart } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const BeliefsSection = () => {
const { t } = useTranslation();

const beliefs = [
    { icon: <FaCross />, title: t('Beliefs.godTitle'), text: t('Beliefs.godText') },
    { icon: <FaHeart />, title: t('Beliefs.jesusTitle'), text: t('Beliefs.jesusText') },
    { icon: <FaDove />, title: t('Beliefs.spiritTitle'), text: t('Beliefs.spiritText') },
    { icon: <FaPrayingHands />, title: t('Beliefs.repentanceTitle'), text: t('Beliefs.repentanceText') },
    { icon: <FaChurch />, title: t('Beliefs.raptureTitle'), text: t('Beliefs.raptureText') },
    { icon: <FaBookOpen />, title: t('Beliefs.eternityTitle'), text: t('Beliefs.eternityText') },
    { icon: <FaHandHoldingHeart />, title: t('Beliefs.healingTitle'), text: t('Beliefs.healingText') },
    { icon: <FaWater />, title: t('Beliefs.baptismTitle'), text: t('Beliefs.baptismText') },
    { icon: <FaFire />, title: t('Beliefs.spiritBaptismTitle'), text: t('Beliefs.spiritBaptismText') },
    { icon: <FaBible />, title: t('Beliefs.bibleTitle'), text: t('Beliefs.bibleText') },
    { icon: <FaHandsHelping />, title: t('Beliefs.holinessTitle'), text: t('Beliefs.holinessText') }
];

return (
    <AnimatedSection id="beliefs" className="bg-white">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">{t('HomePage.beliefsTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {beliefs.map((belief, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">{belief.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{belief.title}</h3>
            <p className="text-slate-600">{belief.text}</p>
            </div>
        ))}
        </div>
    </div>
    </AnimatedSection>
);
};

export default BeliefsSection;