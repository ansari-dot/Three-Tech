import { MenuIcon, XIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "@/data/navlinks";
import { INavLink } from "@/types";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <motion.nav 
                className="fixed top-0 z-50 w-full py-3 px-6 backdrop-blur-md bg-black/50 border-b border-primary-900/20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img 
                            src="/assets/logo.png" 
                            alt="SHAHSAR SOLUTIONS Logo" 
                            width={600} 
                            height={180}
                            className="h-12 w-auto transition-opacity group-hover:opacity-80"
                        />
                        <span className="text-xl font-bold text-white hidden sm:block">
                            SHAHSAR SOLUTIONS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {navlinks.map((link: INavLink) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className={`text-slate-300 hover:text-white transition-colors font-medium ${
                                    location.pathname === link.href ? 'text-primary-500' : ''
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link 
                        to="/contact" 
                        className="hidden md:block px-6 py-2.5 bg-black text-white font-semibold rounded-lg transition-all hover:bg-gray-800"
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
                <Link to="/" className="mb-8 flex flex-col items-center gap-2">
                    <img 
                        src="/assets/logo.png" 
                        alt="SHAHSAR SOLUTIONS Logo" 
                        width={600} 
                        height={180}
                        className="h-16 w-auto"
                    />
                    <span className="text-2xl font-bold text-white">
                        SHAHSAR SOLUTIONS
                    </span>
                </Link>

                {navlinks.map((link: INavLink) => (
                    <Link 
                        key={link.name} 
                        to={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className={`text-xl text-white hover:text-primary-400 transition-colors ${
                            location.pathname === link.href ? 'text-primary-500' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg transition-all hover:bg-gray-800"
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
