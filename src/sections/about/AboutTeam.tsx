'use client'
import { motion } from "motion/react";
import { CodeIcon, PaletteIcon, TrendingUpIcon, SettingsIcon } from "lucide-react";

const team = [
    {
        icon: CodeIcon,
        role: "Development Team",
        description: "Expert full-stack developers specializing in modern frameworks and technologies.",
        skills: ["React", "Node.js", "Python", "Flutter"]
    },
    {
        icon: PaletteIcon,
        role: "Design Team",
        description: "Creative designers crafting beautiful and intuitive user experiences.",
        skills: ["UI/UX", "Figma", "Branding", "Prototyping"]
    },
    {
        icon: TrendingUpIcon,
        role: "Marketing Team",
        description: "Digital marketing experts driving growth and online visibility.",
        skills: ["SEO", "Content", "Social Media", "Analytics"]
    },
    {
        icon: SettingsIcon,
        role: "Support Team",
        description: "Dedicated support professionals ensuring client success.",
        skills: ["24/7 Support", "Training", "Maintenance", "Consulting"]
    }
];

export default function AboutTeam() {
    return (
        <div id="team" className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A diverse group of talented professionals working together to deliver excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-xl bg-gradient-to-br from-primary-950/30 to-transparent border border-primary-900/30 hover:border-primary-700/50 transition-all duration-300">
                                <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600/30 transition-colors">
                                    <member.icon className="w-8 h-8 text-primary-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                    {member.role}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {member.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-3 py-1 text-xs bg-primary-950/50 border border-primary-800/30 rounded-full text-primary-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
