'use client'
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";
import { featuresData } from "@/data/features";
import { IFeature } from "@/types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <SectionTitle 
                text1="Our Services" 
                text2="Comprehensive Software Solutions" 
                text3="We deliver end-to-end software development services tailored to your business needs." 
            />
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div 
                        key={index}
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="h-full p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-transparent border border-pink-900/30 hover:border-pink-700/50 transition-all duration-300">
                            <div className="mb-5 text-pink-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-32 max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose Three Tech?
                    </h3>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        We combine technical expertise with creative excellence to deliver solutions that drive real business results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Expert Development Team",
                            description: "Our senior developers specialize in modern tech stacks including MERN, Django, Laravel, React Native, and Flutter. We build scalable, maintainable solutions."
                        },
                        {
                            title: "Design Excellence",
                            description: "Beautiful, intuitive interfaces that users love. Our designers create experiences that combine aesthetics with functionality."
                        },
                        {
                            title: "Agile Methodology",
                            description: "Fast, iterative development with regular updates. We deliver working software quickly and adapt to your changing needs."
                        },
                        {
                            title: "Ongoing Partnership",
                            description: "We don't just build and leave. Our team provides continuous support, maintenance, and improvements to ensure long-term success."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -40 : 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 rounded-xl bg-gradient-to-br from-pink-950/20 to-transparent border border-pink-900/20"
                        >
                            <h4 className="text-xl font-bold text-white mb-3">
                                {item.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
