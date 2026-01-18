import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <motion.div 
                className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-2xl bg-gradient-to-br from-primary-900/30 via-primary-950/30 to-transparent border border-primary-800/30 relative overflow-hidden"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent"></div>
                
                <div className="relative z-10">
                    <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to Work Together?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Let's discuss how SHAHSAR SOLUTIONS can help transform your business with innovative software solutions.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all group"
                        >
                            Start a Project
                            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-600/30 hover:border-primary-600 text-white font-semibold rounded-lg transition-all"
                        >
                            View Services
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
