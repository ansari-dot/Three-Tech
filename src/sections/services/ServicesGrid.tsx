'use client'
import { motion } from "motion/react";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

const services = [
    {
        id: "web-development",
        title: "Web Development",
        subtitle: "MERN, Django, Laravel",
        description: "Build powerful, scalable web applications with modern frameworks. We specialize in full-stack development using MERN Stack, Django, and Laravel.",
        features: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "Content Management Systems",
            "API Development & Integration",
            "Progressive Web Apps (PWA)"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Django", "Laravel", "PostgreSQL"]
    },
    {
        id: "app-development",
        title: "App Development",
        subtitle: "React Native, Flutter",
        description: "Create stunning cross-platform mobile applications that work seamlessly on iOS and Android with native performance.",
        features: [
            "iOS & Android Apps",
            "Cross-Platform Development",
            "Native Performance",
            "App Store Deployment",
            "Maintenance & Updates"
        ],
        technologies: ["React Native", "Flutter", "Firebase", "Redux", "Native APIs"]
    },
    {
        id: "wordpress-design",
        title: "WordPress & Design",
        subtitle: "Beautiful Websites",
        description: "Design and develop beautiful, responsive WordPress websites that engage your audience and drive conversions.",
        features: [
            "Custom WordPress Themes",
            "Plugin Development",
            "Responsive Design",
            "SEO Optimization",
            "Performance Optimization"
        ],
        technologies: ["WordPress", "PHP", "WooCommerce", "Elementor", "ACF"]
    },
    {
        id: "seo-marketing",
        title: "SEO & Digital Marketing",
        subtitle: "Rank Your Business",
        description: "Boost your online visibility and drive organic traffic with our comprehensive SEO and digital marketing strategies.",
        features: [
            "Search Engine Optimization",
            "Content Marketing",
            "Social Media Marketing",
            "Google Ads Management",
            "Analytics & Reporting"
        ],
        technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Social Media"]
    },
    {
        id: "ai-saas",
        title: "AI & SaaS Solutions",
        subtitle: "Modern Software + AI",
        description: "Leverage artificial intelligence and build scalable SaaS platforms that automate processes and drive innovation.",
        features: [
            "AI Integration",
            "Machine Learning Models",
            "SaaS Platform Development",
            "Automation Solutions",
            "Data Analytics"
        ],
        technologies: ["Python", "TensorFlow", "OpenAI", "AWS", "Docker", "Kubernetes"]
    },
    {
        id: "office-support",
        title: "MS Office Work & Support",
        subtitle: "Professional Admin Help",
        description: "Get professional administrative support and MS Office solutions to streamline your business operations.",
        features: [
            "Document Management",
            "Excel Automation",
            "Data Entry & Processing",
            "Report Generation",
            "Administrative Support"
        ],
        technologies: ["MS Office", "Excel VBA", "Power BI", "SharePoint", "Teams"]
    }
];

export default function ServicesGrid() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What We Offer
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-950/30 to-transparent border border-primary-900/30 hover:border-primary-700/50 transition-all duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Left Column */}
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-primary-400 text-sm font-medium mb-4">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-3 py-1 text-xs bg-primary-950/50 border border-primary-800/30 rounded-full text-primary-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, featureIndex) => (
                                                <li 
                                                    key={featureIndex}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckIcon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a 
                                            href={`/contact?service=${service.id}`}
                                            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-black text-white font-medium rounded-lg transition-colors hover:bg-gray-800 group/link"
                                        >
                                            Get Started
                                            <ArrowRightIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
