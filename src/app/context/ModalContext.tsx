// src/app/context/ModalContext.tsx
"use client";

import { createContext, useState, ReactNode, useContext } from 'react';
import Modal from '../components/Modal';
import DonateContent from '../components/DonateContent';
import { useTranslation } from 'react-i18next';

// 1. Definimos la forma del contexto
interface ModalContextType {
openDonateModal: () => void;
}

// 2. Creamos el contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Creamos un proveedor que manejará el estado y las funciones
export const ModalProvider = ({ children }: { children: ReactNode }) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const { t } = useTranslation();

const openDonateModal = () => setIsModalOpen(true);
const closeDonateModal = () => setIsModalOpen(false);

return (
    <ModalContext.Provider value={{ openDonateModal }}>
    {children}
    <Modal
        isOpen={isModalOpen}
        onClose={closeDonateModal}
        title={t('HomePage.donateTitle')}
    >
        <DonateContent />
    </Modal>
    </ModalContext.Provider>
);
};

// 4. Creamos un hook personalizado para usar el contexto fácilmente
export const useModal = () => {
const context = useContext(ModalContext);
if (context === undefined) {
    throw new Error('useModal debe ser usado dentro de un ModalProvider');
}  return context;
};