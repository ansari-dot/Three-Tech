import { motion } from "motion/react";
import { ArrowRightIcon, MailIcon, UserIcon, MessageSquareIcon, PhoneIcon, BriefcaseIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ContactForm() {
    const [searchParams] = useSearchParams();
    const [selectedService, setSelectedService] = useState("");

    // Map service IDs from URL to dropdown values
    const serviceMapping: { [key: string]: string } = {
        "web-development": "web",
        "app-development": "mobile",
        "wordpress-design": "wordpress",
        "seo-marketing": "seo",
        "ai-saas": "ai",
        "office-support": "office"
    };

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam && serviceMapping[serviceParam]) {
            setSelectedService(serviceMapping[serviceParam]);
        }
    }, [searchParams]);

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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Send Us a Message
                    </h2>
                    <p className="text-lg text-slate-400">
                        Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={(e) => e.preventDefault()}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white placeholder:text-slate-600 focus:border-primary-600 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full pl-12 pr-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white placeholder:text-slate-600 focus:border-primary-600 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    className="w-full pl-12 pr-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white placeholder:text-slate-600 focus:border-primary-600 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Company Name
                            </label>
                            <div className="relative">
                                <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
                                <input
                                    type="text"
                                    placeholder="Your Company"
                                    className="w-full pl-12 pr-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white placeholder:text-slate-600 focus:border-primary-600 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Service Interest
                        </label>
                        <select 
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full px-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white focus:border-primary-600 focus:outline-none transition-colors"
                        >
                            <option value="">Select a service</option>
                            <option value="web">Web Development</option>
                            <option value="mobile">Mobile App Development</option>
                            <option value="wordpress">WordPress & Design</option>
                            <option value="seo">SEO & Digital Marketing</option>
                            <option value="ai">AI & SaaS Solutions</option>
                            <option value="office">MS Office Work & Support</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Project Details *
                        </label>
                        <div className="relative">
                            <MessageSquareIcon className="absolute left-4 top-4 w-5 h-5 text-primary-500" />
                            <textarea
                                rows={6}
                                placeholder="Tell us about your project, timeline, and budget..."
                                className="w-full pl-12 pr-4 py-3.5 bg-primary-950/20 border border-primary-900/30 rounded-lg text-white placeholder:text-slate-600 focus:border-primary-600 focus:outline-none transition-colors resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group"
                    >
                        Send Message
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-sm text-slate-500 mt-4">
                        * Required fields. We respect your privacy and will never share your information.
                    </p>
                </motion.form>
            </div>
        </div>
    );
}
