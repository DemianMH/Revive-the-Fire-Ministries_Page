// src/app/components/BeliefsSection.tsx
"use client";

import { useState, useEffect } from 'react'; // 1. Importar useEffect
import { useTranslation } from 'react-i18next';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Belief {
title: string;
text: string;
}

const AccordionItem = ({ belief, isOpen, onToggle }: { belief: Belief, isOpen: boolean, onToggle: () => void }) => {
return (
    <div className="border-b border-gray-200">
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

  // 2. Añadir el estado isMounted
const [isMounted, setIsMounted] = useState(false);
useEffect(() => {
    setIsMounted(true);
}, []);

const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};

  // 3. Crear el array de creencias solo cuando el componente está montado
const beliefs: Belief[] = isMounted ? [
    { title: t('Beliefs.salvationTitle'), text: t('Beliefs.salvationText') },
    { title: t('Beliefs.godTitle'), text: t('Beliefs.godText') },
    { title: t('Beliefs.jesusTitle'), text: t('Beliefs.jesusText') },
    { title: t('Beliefs.spiritTitle'), text: t('Beliefs.spiritText') },
    { title: t('Beliefs.repentanceTitle'), text: t('Beliefs.repentanceText') },
    { title: t('Beliefs.raptureTitle'), text: t('Beliefs.raptureText') },
    { title: t('Beliefs.eternityTitle'), text: t('Beliefs.eternityText') },
    { title: t('Beliefs.healingTitle'), text: t('Beliefs.healingText') },
    { title: t('Beliefs.baptismTitle'), text: t('Beliefs.baptismText') },
    { title: t('Beliefs.spiritBaptismTitle'), text: t('Beliefs.spiritBaptismText') },
    { title: t('Beliefs.bibleTitle'), text: t('Beliefs.bibleText') },
    { title: t('Beliefs.holinessTitle'), text: t('Beliefs.holinessText') }
  ] : []; // Si no está montado, el array estará vacío para evitar el error

return (
    <section id="beliefs" className="bg-white py-20 md:py-28 px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          {/* 4. Aplicar la lógica al título */}
        {isMounted ? t('HomePage.beliefsTitle') : <>&nbsp;</>}
        </h2>
        
        <div className="w-full">
        {beliefs.map((belief, index) => (
            <AccordionItem
            key={index}
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