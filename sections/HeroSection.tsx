'use client'
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import TiltedImage from "@/components/TiltImage";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image 
                    src="/assets/hero-section-showcase.png" 
                    alt="Background" 
                    fill
                    className="object-cover opacity-10"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            {/* Elegant Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center mt-32">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/30 border border-pink-800/30 mb-8"
                >
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-pink-300">Available for new projects</span>
                </motion.div>

                <motion.h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="text-white">Building Digital</span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-transparent bg-clip-text">
                        Excellence
                    </span>
                </motion.h1>

                <motion.p 
                    className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We craft exceptional software solutions that transform businesses. 
                    From enterprise applications to cutting-edge AI systems.
                </motion.p>

                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a 
                        href="/contact" 
                        className="group px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                    >
                        Start Your Project
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                        href="#features" 
                        className="px-8 py-4 border border-pink-600/30 hover:border-pink-600 text-white font-semibold rounded-lg transition-all"
                    >
                        Explore Services
                    </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-12 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-pink-500" />
                        <span className="text-slate-400">Expert Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-pink-500" />
                        <span className="text-slate-400">100+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-pink-500" />
                        <span className="text-slate-400">24/7 Support</span>
                    </div>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl w-full"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {[
                    { value: "100+", label: "Projects Completed" },
                    { value: "50+", label: "Happy Clients" },
                    { value: "15+", label: "Team Members" },
                    { value: "5 Years", label: "Experience" }
                ].map((stat, index) => (
                    <div 
                        key={index}
                        className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-950/20 to-transparent border border-pink-900/20 backdrop-blur-sm"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm text-slate-500">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>

            <TiltedImage />
        </div>
    );
}
