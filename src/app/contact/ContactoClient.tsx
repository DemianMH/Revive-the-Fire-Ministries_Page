// src/app/contact/ContactoClient.tsx
"use client";

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function ContactPage() {
  const { t } = useTranslation();

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
          <form action="#" method="POST" className="space-y-6">
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
                defaultValue={''}
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-bold py-4 px-12 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                {t('ContactPage.sendButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}