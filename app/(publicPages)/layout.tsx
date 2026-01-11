import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
    title: "Three Tech - Software House | Web & App Development",
    description: "Three Tech offers professional software development services including MERN, Django, Laravel, React Native, Flutter, WordPress, SEO, AI & SaaS Solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}