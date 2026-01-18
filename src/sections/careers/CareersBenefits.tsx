'use client'
import { motion } from "motion/react";
import { HomeIcon, TrendingUpIcon, HeartIcon, GraduationCapIcon, DollarSignIcon, UsersIcon } from "lucide-react";

const benefits = [
    {
        icon: HomeIcon,
        title: "Remote Work",
        description: "Work from anywhere with flexible remote options and modern collaboration tools."
    },
    {
        icon: TrendingUpIcon,
        title: "Career Growth",
        description: "Clear career progression paths with opportunities to learn and advance your skills."
    },
    {
        icon: HeartIcon,
        title: "Health Benefits",
        description: "Comprehensive health insurance coverage for you and your family."
    },
    {
        icon: GraduationCapIcon,
        title: "Learning & Development",
        description: "Access to courses, conferences, and certifications to enhance your expertise."
    },
    {
        icon: DollarSignIcon,
        title: "Competitive Salary",
        description: "Industry-leading compensation packages with performance bonuses."
    },
    {
        icon: UsersIcon,
        title: "Great Team Culture",
        description: "Work with talented, supportive colleagues in a collaborative environment."
    }
];

export default function CareersBenefits() {
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
                        Why Work With Us?
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We invest in our team's success and well-being
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
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
                                    <benefit.icon className="w-7 h-7 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
