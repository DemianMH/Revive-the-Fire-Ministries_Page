// src/app/components/ClientWrapper.tsx
"use client";

import { ReactNode } from 'react';
import Navbar from "./nav";
import Footer from "./footer";
import { ModalProvider } from '../context/ModalContext'; // Importar el proveedor
import '../../i18n';

export default function ClientWrapper({ children }: { children: ReactNode }) {
return (
    // Envolvemos todo con el ModalProvider
    <ModalProvider>
    <Navbar />
    <main className="flex-grow">
        {children}
    </main>
    <Footer />
    </ModalProvider>
);
}