// src/app/components/DonateContent.tsx
"use client";

import { useTranslation } from "react-i18next";

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
        <div className="font-mono bg-slate-100 p-4 rounded-md">
        <p>PO Box 375</p>
        <p>Argyle, Texas 76226</p>
        </div>
    </div>
    </div>
);
};

export default DonateContent;