import { motion } from "motion/react";
import { MailIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareersCTA() {
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
                        Stay Connected
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Follow us on social media and stay updated about future job openings and company news.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="mailto:careers@shahsar.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
                        >
                            <MailIcon className="w-5 h-5" />
                            Email Us
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-600/30 hover:border-primary-600 text-white font-semibold rounded-lg transition-all"
                        >
                            <LinkedinIcon className="w-5 h-5" />
                            Follow on LinkedIn
                        </a>
                    </motion.div>

                    <motion.div
                        className="mt-12 pt-8 border-t border-primary-800/30"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-slate-400 mb-4">
                            Want to learn more about SHAHSAR SOLUTIONS?
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/about"
                                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                            >
                                About Us
                            </Link>
                            <span className="text-slate-600">•</span>
                            <Link
                                to="/services"
                                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                            >
                                Our Services
                            </Link>
                            <span className="text-slate-600">•</span>
                            <Link
                                to="/contact"
                                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
