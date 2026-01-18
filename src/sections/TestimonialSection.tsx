'use client'
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonial";
import { ITestimonial } from "@/types";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Testimonials" text2="What Our Clients Say" text3="Trusted by businesses worldwide. Read what our clients have to say about working with SHAHSAR SOLUTIONS." />

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-16"
            >
                <Marquee className="max-w-6xl mx-auto" gradient={true} speed={30} gradientColor="#000" gradientWidth={100}>
                    <div className="flex items-center py-5">
                        {testimonialsData.map((testimonial: ITestimonial, index: number) => (
                            <TestimonialCard key={index} index={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6"
            >
                <Marquee className="max-w-6xl mx-auto" gradient={true} speed={30} direction="right" gradientColor="#000" gradientWidth={100}>
                    <div className="flex items-center py-5">
                        {testimonialsData.map((testimonial: ITestimonial, index: number) => (
                            <TestimonialCard key={`reverse-${index}`} index={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </motion.div>
        </div>
    );
}
