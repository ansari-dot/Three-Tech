'use client'
import { motion } from "motion/react";
import { MessageSquareIcon, PenToolIcon, CodeIcon, RocketIcon } from "lucide-react";

const processSteps = [
    {
        icon: MessageSquareIcon,
        title: "Discovery & Planning",
        description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
        icon: PenToolIcon,
        title: "Design & Prototype",
        description: "Our designers create intuitive interfaces and interactive prototypes to visualize your product before development."
    },
    {
        icon: CodeIcon,
        title: "Development & Testing",
        description: "Our developers build your solution using best practices, with rigorous testing to ensure quality and performance."
    },
    {
        icon: RocketIcon,
        title: "Launch & Support",
        description: "We deploy your product and provide ongoing maintenance, updates, and support to ensure long-term success."
    }
];

export default function ServiceProcess() {
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
                        Our Development Process
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A proven methodology that delivers results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                                {index + 1}
                            </div>

                            <div className="h-full p-8 pt-12 rounded-xl bg-gradient-to-br from-primary-950/20 to-transparent border border-primary-900/20">
                                <step.icon className="w-10 h-10 text-primary-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Line (hidden on last item and mobile) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-800/30"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
