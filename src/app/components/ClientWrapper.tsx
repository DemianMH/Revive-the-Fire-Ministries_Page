"use client";

import Navbar from "./nav";
import Footer from "./footer";
import '../../i18n'; 

export default function ClientWrapper({
children,
}: {
children: React.ReactNode;
}) {
return (
    <>
    <Navbar />
    <main className="flex-grow">
        {children}
    </main>
    <Footer />
    </>
);
}