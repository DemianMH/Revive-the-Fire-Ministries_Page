// src/app/components/BeliefsSection.tsx
"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Belief {
id: string; // Añadimos el ID
title: string;
text: string;
}

const AccordionItem = ({ belief, isOpen, onToggle }: { belief: Belief, isOpen: boolean, onToggle: () => void }) => {
return (
    // Envolvemos el item en un div con el ID
    <div id={belief.id} className="border-b border-gray-200 scroll-mt-20">
    <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left"
    >
        <h3 className="text-lg font-semibold uppercase tracking-wider text-slate-800">{belief.title}</h3>
        <div className="text-xl text-slate-500">
        {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
    </button>
    <AnimatePresence>
        {isOpen && (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
        >
            <p className="pb-6 pr-8 text-slate-600 leading-relaxed">
            {belief.text}
            </p>
        </motion.div>
        )}
    </AnimatePresence>
    </div>
);
};

const BeliefsSection = () => {
const { t } = useTranslation();
const [openIndex, setOpenIndex] = useState<number | null>(null);
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);

const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};

const beliefs: Belief[] = isMounted ? [
    { id: 'salvation', title: t('Beliefs.salvationTitle'), text: t('Beliefs.salvationText') },
    { id: 'god', title: t('Beliefs.godTitle'), text: t('Beliefs.godText') },
    { id: 'jesus', title: t('Beliefs.jesusTitle'), text: t('Beliefs.jesusText') },
    { id: 'spirit', title: t('Beliefs.spiritTitle'), text: t('Beliefs.spiritText') },
    { id: 'repentance', title: t('Beliefs.repentanceTitle'), text: t('Beliefs.repentanceText') },
    { id: 'rapture', title: t('Beliefs.raptureTitle'), text: t('Beliefs.raptureText') },
    { id: 'eternity', title: t('Beliefs.eternityTitle'), text: t('Beliefs.eternityText') },
    { id: 'healing', title: t('Beliefs.healingTitle'), text: t('Beliefs.healingText') },
    { id: 'baptism', title: t('Beliefs.baptismTitle'), text: t('Beliefs.baptismText') },
    { id: 'spirit-baptism', title: t('Beliefs.spiritBaptismTitle'), text: t('Beliefs.spiritBaptismText') },
    { id: 'bible', title: t('Beliefs.bibleTitle'), text: t('Beliefs.bibleText') },
    { id: 'holiness', title: t('Beliefs.holinessTitle'), text: t('Beliefs.holinessText') }
] : [];
return (
    <section id="beliefs" className="bg-white py-20 md:py-28 px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
        {isMounted ? t('HomePage.beliefsTitle') : <>&nbsp;</>}
        </h2>
        
        <div className="w-full">
        {beliefs.map((belief, index) => (
            <AccordionItem
            key={belief.id}
            belief={belief}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            />
        ))}
        </div>
    </div>
    </section>
);
};

export default BeliefsSection;