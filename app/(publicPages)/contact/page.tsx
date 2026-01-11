'use client'
import { Suspense } from 'react'
import ContactHero from "@/sections/contact/ContactHero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";
import ContactMap from "@/sections/contact/ContactMap";

export const metadata = {
    title: "Contact Us - Three Tech | Get In Touch",
    description: "Get in touch with Three Tech. We're here to help bring your software project to life.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <Suspense fallback={<div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20"><div className="max-w-4xl mx-auto text-center text-white">Loading contact form...</div></div>}>
                <ContactForm />
            </Suspense>
            <ContactInfo />
            <ContactMap />
        </>
    );
}
