'use client'
import { motion } from "motion/react";
import { TargetIcon, UsersIcon, LightbulbIcon, ShieldCheckIcon } from "lucide-react";

const values = [
    {
        icon: TargetIcon,
        title: "Excellence",
        description: "We strive for excellence in every line of code, every design, and every client interaction. Quality is not negotiable."
    },
    {
        icon: UsersIcon,
        title: "Collaboration",
        description: "We believe in the power of teamwork. Our success is built on strong partnerships with our clients and within our team."
    },
    {
        icon: LightbulbIcon,
        title: "Innovation",
        description: "We stay ahead of technology trends and continuously explore new ways to solve problems and create value."
    },
    {
        icon: ShieldCheckIcon,
        title: "Integrity",
        description: "Transparency, honesty, and ethical practices guide everything we do. We build trust through our actions."
    }
];

export default function AboutValues() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        The principles that guide our work and define who we are
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-xl bg-gradient-to-br from-primary-950/30 to-transparent border border-primary-900/30 hover:border-primary-700/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600/30 transition-colors">
                                    <value.icon className="w-7 h-7 text-primary-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
