'use client'
import { motion } from "motion/react";
import { BriefcaseIcon, MailIcon } from "lucide-react";

export default function CareersOpenings() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Current Openings
                    </h2>
                    <p className="text-lg text-slate-400">
                        Explore opportunities to join our team
                    </p>
                </motion.div>

                {/* No Openings Message */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center p-12 md:p-16 rounded-2xl bg-gradient-to-br from-primary-950/30 to-transparent border border-primary-900/30"
                >
                    <div className="w-20 h-20 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BriefcaseIcon className="w-10 h-10 text-primary-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                        No Current Openings
                    </h3>
                    
                    <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                        We don't have any open positions at the moment, but we're always interested in connecting with talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="mailto:careers@shahsar.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
                        >
                            <MailIcon className="w-5 h-5" />
                            Send Your Resume
                        </a>
                        
                        <a 
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-600/30 hover:border-primary-600 text-white font-semibold rounded-lg transition-all"
                        >
                            Learn About Us
                        </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-primary-900/30">
                        <p className="text-slate-400 text-sm">
                            Email us at: <a href="mailto:careers@shahsar.com" className="text-primary-400 hover:text-primary-300 transition-colors">careers@shahsar.com</a>
                        </p>
                    </div>
                </motion.div>

                {/* What We Look For */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        What We Look For
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Technical Excellence",
                                description: "Strong foundation in your field with a passion for continuous learning and staying updated with latest technologies."
                            },
                            {
                                title: "Problem Solving",
                                description: "Creative thinking and analytical skills to tackle complex challenges and deliver innovative solutions."
                            },
                            {
                                title: "Team Collaboration",
                                description: "Excellent communication skills and ability to work effectively in a collaborative team environment."
                            },
                            {
                                title: "Growth Mindset",
                                description: "Eagerness to learn, adapt, and grow both personally and professionally with the company."
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl bg-gradient-to-br from-primary-950/20 to-transparent border border-primary-900/20"
                            >
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
