'use client'
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutHero() {
    return (
        <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text */}
                    <div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/30 border border-pink-800/30 mb-6"
                        >
                            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                            <span className="text-sm text-pink-300">About Three Tech</span>
                        </motion.div>

                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Building the Future of
                            <span className="block bg-gradient-to-r from-pink-500 to-pink-300 text-transparent bg-clip-text">
                                Digital Innovation
                            </span>
                        </motion.h1>

                        <motion.p 
                            className="text-lg text-slate-400 mb-8 leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            We are a team of passionate developers, designers, and innovators dedicated to transforming businesses through cutting-edge technology solutions.
                        </motion.p>

                        <motion.div 
                            className="flex flex-wrap gap-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a 
                                href="#team" 
                                className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all"
                            >
                                Meet Our Team
                            </a>
                            <a 
                                href="/contact" 
                                className="px-8 py-4 border border-pink-600/30 hover:border-pink-600 text-white font-semibold rounded-lg transition-all"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-pink-900/30">
                            <Image 
                                src="/assets/features-showcase-1.png" 
                                alt="Three Tech Team" 
                                width={600} 
                                height={400}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
