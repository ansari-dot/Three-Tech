'use client'
import { motion } from "motion/react";

export default function CareersHero() {
    return (
        <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-950/30 border border-pink-800/30 mb-8"
                >
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span className="text-sm text-pink-300">Join Our Team</span>
                </motion.div>

                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Build Your Career at
                    <span className="block bg-gradient-to-r from-pink-500 to-pink-300 text-transparent bg-clip-text">
                        Three Tech
                    </span>
                </motion.h1>

                <motion.p 
                    className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Join a team of passionate innovators building the future of software development. We're always looking for talented individuals who share our vision.
                </motion.p>

                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { value: "15+", label: "Team Members" },
                        { value: "Remote", label: "Work Options" },
                        { value: "Growth", label: "Opportunities" },
                        { value: "Flexible", label: "Schedule" }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="p-6 rounded-xl bg-gradient-to-br from-pink-950/20 to-transparent border border-pink-900/20"
                        >
                            <div className="text-2xl font-bold text-pink-400 mb-1">
                                {item.value}
                            </div>
                            <div className="text-sm text-slate-400">{item.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
