// Ubicación: src/app/components/PhotoCarousel.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PhotoCarouselProps {
images: { src: string; alt: string }[];
}

const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
}, [images.length]);

const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};

if (!images || images.length === 0) {
    return null;
}

return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
    <AnimatePresence initial={false} mode="wait">
        <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-video"
        >
        <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            objectFit="cover"
            priority={currentIndex === 0} // Carga la primera imagen con prioridad
        />
        </motion.div>
    </AnimatePresence>

      {/* Navegación manual (opcional, pero buena para UX) */}
    <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Previous image"
    >
        <FaChevronLeft />
    </button>
    <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Next image"
    >
        <FaChevronRight />
    </button>

      {/* Indicadores de diapositiva */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
            index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-70'
            } transition-colors duration-300`}
            aria-label={`Go to slide ${index + 1}`}
        />
        ))}
    </div>
    </div>
);
};

export default PhotoCarousel;