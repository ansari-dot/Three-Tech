import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop",
            title: "Web Development",
            subtitle: "Building modern web applications",
            tag: "Web Development"
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
            title: "Mobile Apps",
            subtitle: "Native and cross-platform solutions",
            tag: "Mobile Apps"
        },
        {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop",
            title: "AI Solutions",
            subtitle: "Cutting-edge artificial intelligence",
            tag: "AI Solutions"
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop",
            title: "Cloud Infrastructure",
            subtitle: "Scalable cloud solutions",
            tag: "Cloud Services"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(timer);
    }, [slides.length]);
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
            {/* Background Slider */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img 
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Indicators */}
            <div className="absolute top-8 right-8 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide 
                                ? 'bg-primary-400 w-8' 
                                : 'bg-primary-700 hover:bg-primary-600'
                        }`}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto text-center px-6 mt-32 relative z-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-800/30 bg-primary-950/40 backdrop-blur-sm mb-12"
                >
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-primary-300">SHAHSAR SOLUTIONS • Software Development Agency</span>
                </motion.div>

                <motion.h1 
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-white block mb-2">Enterprise Software</span>
                    <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400 text-transparent bg-clip-text">Solutions</span>
                </motion.h1>

                <motion.p 
                    className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transform your business with cutting-edge software solutions. 
                    We build scalable applications that drive growth and innovation.
                </motion.p>

                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link 
                        to="/contact" 
                        className="group px-8 py-4 bg-black text-white font-semibold rounded-lg transition-all flex items-center gap-2 hover:bg-gray-800"
                    >
                        Start Your Project
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <a 
                        href="#features" 
                        className="px-8 py-4 border border-primary-600/30 hover:border-primary-600 text-white font-semibold rounded-lg transition-all"
                    >
                        Explore Services
                    </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                    className="flex flex-wrap items-center justify-center gap-12 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-primary-500" />
                        <span className="text-slate-400">Expert Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-primary-500" />
                        <span className="text-slate-400">100+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-primary-500" />
                        <span className="text-slate-400">24/7 Support</span>
                    </div>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl w-full"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {[
                    { value: "100+", label: "Projects Completed" },
                    { value: "50+", label: "Happy Clients" },
                    { value: "15+", label: "Team Members" },
                    { value: "5 Years", label: "Experience" }
                ].map((stat, index) => (
                    <div 
                        key={index}
                        className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-950/20 to-transparent border border-primary-900/20 backdrop-blur-sm"
                    >
                        <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm text-slate-500">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>

        </div>
    );
}
