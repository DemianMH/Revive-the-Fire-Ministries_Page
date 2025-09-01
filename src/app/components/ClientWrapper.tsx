// Ubicación: src/app/components/ClientWrapper.tsx
"use client";

import { useState, ReactNode, Children, cloneElement, isValidElement } from 'react';
import Navbar from "./nav";
import Footer from "./footer";
import Modal from './Modal';
import DonateContent from './DonateContent';
import '../../i18n';
import { useTranslation } from 'react-i18next';

// Definimos una interfaz para las props que los componentes hijos podrían recibir
interface PageProps {
openDonateModal?: () => void;
}

export default function ClientWrapper({
children,
}: { children: ReactNode;
}) {
const [isModalOpen, setIsModalOpen] = useState(false);
const { t } = useTranslation();

const openDonateModal = () => setIsModalOpen(true);
const closeDonateModal = () => setIsModalOpen(false);

  // Esta función inyecta la prop 'openDonateModal' en el componente hijo (la página)
const childrenWithProps = Children.map(children, child => {
    if (isValidElement<PageProps>(child)) {
    return cloneElement(child, { openDonateModal });
    }
    return child;
});

return (
    <>
    <Navbar onDonateClick={openDonateModal} />
    <main className="flex-grow">
        {childrenWithProps}
    </main>
    <Footer />

    <Modal
        isOpen={isModalOpen}
        onClose={closeDonateModal}
        title={t('HomePage.donateTitle')}
    >
        <DonateContent />
    </Modal>
    </>
);
}