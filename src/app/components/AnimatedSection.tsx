// Ubicación: src/app/components/AnimatedSection.tsx
"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
children: ReactNode;
className?: string;
id?: string;
}

const AnimatedSection = ({ children, className = '', id }: AnimatedSectionProps) => {
return (
    <motion.section
    id={id}
    className={`py-20 md:py-28 px-6 lg:px-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    >
    {children}
    </motion.section>
);
};

export default AnimatedSection;