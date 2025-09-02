// src/app/contact/ContactoClient.tsx
"use client";

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react'; // 1. Importar hooks de Formspree

export default function ContactPage() {
  const { t } = useTranslation();
  // 2. Usar el ID oficial de tu cliente: "xdklwozo"
  const [state, handleSubmit] = useForm("xdklwozo");

  // 3. Mostrar un mensaje de éxito con el estilo de tu página
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center text-center min-h-[60vh] bg-gray-50 p-6">
        <h2 className="text-3xl font-bold text-blue-950 mb-4">¡Gracias por tu mensaje!</h2>
        <p className="text-slate-600 text-lg">Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full bg-blue-800 h-32 md:h-40" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20 md:pb-28 -mt-20 md:-mt-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="text-center mb-10">
            <Image 
              src='/image-gallery-5.jpeg'
              alt='Kirk David Vigen'
              width={300}
              height={300} 
              className="rounded-full mx-auto mb-6 shadow-md"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-950 uppercase tracking-wider">
              {t('HomePage.contactTitle')}
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600">
              {t('ContactPage.description')}
            </p>
          </div>
          {/* 4. Usar la función handleSubmit en el evento onSubmit */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('ContactPage.firstName')}
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('ContactPage.lastName')}
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                {t('ContactPage.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-600 mt-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                {t('ContactPage.message')}
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-600 mt-2 text-sm"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 px-12 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:bg-slate-400 disabled:scale-100"
              >
                {state.submitting ? 'Enviando...' : t('ContactPage.sendButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}