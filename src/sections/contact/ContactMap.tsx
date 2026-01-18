'use client'
import { motion } from "motion/react";

export default function ContactMap() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Find Us on the Map
                    </h2>
                    <p className="text-lg text-slate-400">
                        Located in the heart of San Francisco
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-2xl overflow-hidden border border-primary-900/30"
                >
                    {/* Google Maps Embed Placeholder */}
                    <div className="relative w-full h-96 bg-gradient-to-br from-primary-950/20 to-transparent">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-400 mb-4">
                        Prefer to meet in person? Schedule a visit to our office
                    </p>
                    <a 
                        href="mailto:nakhan.pt@gmail.com?subject=Office Visit Request"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all"
                    >
                        Schedule a Visit
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
