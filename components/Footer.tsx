'use client'
import { footerData } from "@/data/footer";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { IFooterLink } from "@/types";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700"></div>
            </div>
            
            <div className="relative z-10">
                {/* Top Section */}
                <div className="border-b border-slate-700">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Brand Section */}
                            <motion.div 
                                className="space-y-6"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            >
                                <Link href="/" className="inline-block">
                                    <Image 
                                        src="/logo.svg" 
                                        alt="Three Tech Logo" 
                                        width={180} 
                                        height={50}
                                        className="h-12 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 transform scale-300"
                                    />
                                </Link>
                                <p className="text-slate-300 leading-relaxed">
                                    Your trusted partner for innovative software solutions and digital transformation.
                                </p>
                                <div className="flex items-center gap-4">
                                    {[
                                        { Icon: DribbbleIcon, href: "#!" },
                                        { Icon: LinkedinIcon, href: "#!" },
                                        { Icon: TwitterIcon, href: "#!" },
                                        { Icon: YoutubeIcon, href: "#!" }
                                    ].map(({ Icon, href }, index) => (
                                        <motion.a 
                                            key={index}
                                            href={href} 
                                            rel="noreferrer"
                                            className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-600"
                                            whileHover={{ y: -3 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon className="size-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Links Sections */}
                            {footerData.map((section, index) => (
                                <motion.div 
                                    key={index}
                                    className="space-y-6"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 25 }}
                                >
                                    <h3 className="text-lg font-bold text-white">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link: IFooterLink, linkIndex: number) => (
                                            <motion.li 
                                                key={linkIndex}
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link 
                                                    href={link.href} 
                                                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                                                >
                                                    <span className="w-0 group-hover:w-4 h-0.5 bg-slate-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                                    {link.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Bar */}
                <div className="border-b border-slate-700 bg-slate-800/50">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <motion.div 
                                    className="flex items-center gap-2 text-slate-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MailIcon className="size-4 text-slate-400" />
                                    <span>hello@threetech.com</span>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-2 text-slate-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <PhoneIcon className="size-4 text-slate-400" />
                                    <span>+1 (555) 123-4567</span>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-2 text-slate-300"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MapPinIcon className="size-4 text-slate-400" />
                                    <span>Abbottabad, KPK, Pakistan</span>
                                </motion.div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link 
                                    href="/contact" 
                                    className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-black/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                            <p>&copy; {new Date().getFullYear()} Three Tech • All Rights Reserved</p>
                            <div className="flex items-center gap-6">
                                <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-white transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
