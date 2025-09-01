// src/app/components/DonateContent.tsx
"use client";

import { useTranslation } from "react-i18next";
import Image from 'next/image'; // Importamos el componente Image

const DonateContent = () => {
const { t } = useTranslation();

return (
    <div className="space-y-4 text-slate-600 leading-relaxed">
    <p>
        {t('DonateModal.p1')}
    </p>
    <p>
        {t('DonateModal.p2')}
    </p>
    <div className="pt-4 mt-4 border-t">
        <h4 className="font-semibold text-lg text-slate-800 mb-2">{t('DonateModal.heading')}</h4>
        
        {/* Información existente de donación por correo */}
        <div className="font-mono bg-slate-100 p-4 rounded-md">
        <p>PO Box 375</p>
        <p>Argyle, Texas 76226</p>
        </div>

        {/* --- Nueva sección de Zelle --- */}
        <div className="mt-6 text-center border-t pt-6">
        <p className="font-semibold text-slate-700">Code: </p>
        <p className="text-xl font-bold font-mono text-slate-800 tracking-wider">KIRK</p>
        <p className="text-sm text-slate-500 mb-2">contact@revivethefire.info</p>
        <div className="flex justify-center">
            <Image
            src="/zelle-codigo.png"
            alt="Código QR para donar con Zelle"
            width={200}
            height={200}
            
            />
        </div>
        </div>

    </div>
    </div>
  );
};

export default DonateContent;