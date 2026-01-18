'use client'
import { motion } from "motion/react";
import { CodeIcon, SmartphoneIcon, PaletteIcon, TrendingUpIcon } from "lucide-react";

export default function ServicesHero() {
    return (
        <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950/30 border border-primary-800/30 mb-8"
                >
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-sm text-primary-300">Our Services</span>
                </motion.div>

                <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Comprehensive Software
                    <span className="block bg-gradient-to-r from-primary-500 to-primary-300 text-transparent bg-clip-text">
                        Development Services
                    </span>
                </motion.h1>

                <motion.p 
                    className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    From concept to deployment, we deliver end-to-end software solutions that drive business growth and digital transformation.
                </motion.p>

                {/* Quick Stats */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { icon: CodeIcon, label: "Web Development" },
                        { icon: SmartphoneIcon, label: "Mobile Apps" },
                        { icon: PaletteIcon, label: "UI/UX Design" },
                        { icon: TrendingUpIcon, label: "Digital Marketing" }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="p-6 rounded-xl bg-gradient-to-br from-primary-950/20 to-transparent border border-primary-900/20"
                        >
                            <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                            <p className="text-sm text-slate-400">{item.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
