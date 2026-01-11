'use client'
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "@/data/navlinks";
import { INavLink } from "@/types";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav 
                className="fixed top-0 z-50 w-full py-3 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-black/50 border-b border-pink-900/20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group -ml-12">
                        <Image 
                            src="/logo.svg" 
                            alt="Three Tech Logo" 
                            width={200} 
                            height={60}
                            className="h-14 w-auto transition-opacity group-hover:opacity-80 transform scale-200"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {navlinks.map((link: INavLink) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-slate-300 hover:text-white transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link 
                        href="/contact" 
                        className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(true)} 
                        className="md:hidden text-white"
                    >
                        <MenuIcon size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link href="/" className="mb-8">
                    <Image 
                        src="/logo.svg" 
                        alt="Three Tech Logo" 
                        width={240} 
                        height={70}
                        className="h-16 w-auto"
                    />
                </Link>

                {navlinks.map((link: INavLink) => (
                    <Link 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-xl text-white hover:text-pink-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}

                <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all"
                >
                    Get Started
                </Link>

                <button 
                    onClick={() => setIsOpen(false)} 
                    className="absolute top-8 right-8 text-white"
                >
                    <XIcon size={28} />
                </button>
            </div>
        </>
    );
}
