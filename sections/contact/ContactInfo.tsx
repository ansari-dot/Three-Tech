'use client'
import { motion } from "motion/react";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

const contactDetails = [
    {
        icon: MailIcon,
        title: "Email Us",
        details: [
            "General Inquiries: info@threetech.com",
            "Support: support@threetech.com",
            "Careers: careers@threetech.com"
        ]
    },
    {
        icon: PhoneIcon,
        title: "Call Us",
        details: [
            "Main Office: +1 (555) 123-4567",
            "Support: +1 (555) 123-4568",
            "Mon-Fri: 9:00 AM - 6:00 PM EST"
        ]
    },
    {
        icon: MapPinIcon,
        title: "Visit Us",
        details: [
            "123 Tech Street, Suite 100",
            "San Francisco, CA 94102",
            "United States"
        ]
    },
    {
        icon: ClockIcon,
        title: "Business Hours",
        details: [
            "Monday - Friday: 9:00 AM - 6:00 PM",
            "Saturday: 10:00 AM - 4:00 PM",
            "Sunday: Closed"
        ]
    }
];

export default function ContactInfo() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-gradient-to-b from-transparent via-pink-950/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Contact Information
                    </h2>
                    <p className="text-lg text-slate-400">
                        Multiple ways to reach us
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="h-full p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-transparent border border-pink-900/30">
                                <div className="w-14 h-14 bg-pink-600/20 rounded-lg flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-pink-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                                <div className="space-y-2">
                                    {item.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-slate-400">
                                            {detail}
                                        </p>
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
