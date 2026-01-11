'use client'
import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";

export default function CTASection() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <motion.div 
                className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-2xl bg-gradient-to-br from-pink-900/30 via-pink-950/30 to-transparent border border-pink-800/30 relative overflow-hidden"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent"></div>
                
                <div className="relative z-10">
                    <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Start Your Project?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Let's transform your ideas into reality. Our team is ready to help you build something exceptional.
                    </motion.p>

                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-pink-50 transition-all group"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Get Started Today
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}
