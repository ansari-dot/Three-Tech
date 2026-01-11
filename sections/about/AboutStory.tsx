'use client'
import { motion } from "motion/react";

export default function AboutStory() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Our Story
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto mb-8"></div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6 text-slate-400 leading-relaxed"
                >
                    <p className="text-lg">
                        Founded with a vision to bridge the gap between innovative technology and business success, <span className="text-pink-400 font-semibold">Three Tech</span> has grown into a trusted partner for businesses seeking digital transformation.
                    </p>

                    <p className="text-lg">
                        Our journey began with a simple belief: that great software should be accessible, reliable, and transformative. Over the years, we've helped over <span className="text-white font-semibold">100+ businesses</span> across various industries achieve their digital goals.
                    </p>

                    <p className="text-lg">
                        Today, we're proud to be a team of expert developers, creative designers, and strategic thinkers who are passionate about delivering solutions that make a real difference. From startups to enterprises, we bring the same level of dedication and expertise to every project.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
