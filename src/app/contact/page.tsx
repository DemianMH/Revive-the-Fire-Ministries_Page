// src/app/contact/page.tsx
import { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto | Revive the Fire Ministries',
  description: 'Ponte en contacto con Kirk Vigen. Revive el Fuego es un llamado a avivar la llama del avivamiento que se encendió en la iglesia primitiva en el libro de los Hechos y que ha sido llevada a través de generaciones.',
};

export default function ContactoPage() {
  return <ContactoClient />;
}