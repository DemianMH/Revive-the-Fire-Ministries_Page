// src/app/components/Modal.tsx
"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 cursor-pointer"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b">
                <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-800 transition-colors"
                  aria-label="Cerrar modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;