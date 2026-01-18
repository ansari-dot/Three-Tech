'use client'
import { SectionTitleProps } from "@/types";
import { motion } from "motion/react";

export default function SectionTitle({ text1, text2, text3 }: SectionTitleProps) {
    return (
        <div className="text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-950/30 border border-primary-800/30 mb-6"
            >
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-sm font-medium text-primary-400">{text1}</span>
            </motion.div>
            
            <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {text2}
            </motion.h2>
            
            <motion.p 
                className="text-lg text-slate-400 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {text3}
            </motion.p>
        </div>
    );
}
