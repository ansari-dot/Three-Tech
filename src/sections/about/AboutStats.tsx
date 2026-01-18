'use client'
import { motion } from "motion/react";

const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Team Members" },
    { value: "5+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
];

export default function AboutStats() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-lg text-slate-400">
                        Results that speak for themselves
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-950/20 to-transparent border border-primary-900/20"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
