'use client'
import { motion } from "motion/react";
import { ExternalLinkIcon, CodeIcon, RocketIcon, GithubIcon } from "lucide-react";

export default function CurrentWorkSection() {
    const projects = [
     {
  title: "Freely Go North – Tourism Explorer",
  description: "A dynamic tourism discovery platform showcasing northern travel destinations, scenic attractions, and immersive travel experiences with responsive design and interactive UI.",
  image: "/assets/tour.png",
  link: "https://freelygonorth.vercel.app/",
  icon: CodeIcon,
  status: "Live live"
},
       {
  title: "Ed-Prep Learning Platform",
  description: "An interactive education platform offering structured courses, learning resources, and student progress tracking with clean UI and intuitive navigation.",
  image: "/assets/ed.png",
  link: "https://edu-wine-three.vercel.app/",
  icon: CodeIcon,
  status: "Live Demo"
},
      {
  title: "Shehrity – Smart City Services Platform",
  description: "A modern civic-tech platform providing digital city services, public information, and citizen engagement features with a clean and responsive UI.",
  image: "/assets/sh.png",
  link: "https://www.shehrity.com/",
  icon: RocketIcon,
  status: "Live Project"
}
    ];

    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Currently Working On
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    We're actively developing cutting-edge solutions that push the boundaries of innovation and excellence.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Projects in Progress</span>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/30 hover:border-primary-600/50 transition-all duration-300">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs font-medium text-yellow-400 backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-primary-500/20 rounded-lg">
                                            <IconComponent className="w-5 h-5 text-primary-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-slate-300 mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group/link"
                                    >
                                        View Project
                                        <ExternalLinkIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 text-center"
            >
                <p className="text-slate-400 mb-6">
                    Want to collaborate or see more of our work?
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                    Get in Touch
                    <ExternalLinkIcon className="w-4 h-4" />
                </a>
            </motion.div>
        </div>
    );
}
