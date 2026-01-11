import ServicesHero from "@/sections/services/ServicesHero";
import ServicesGrid from "@/sections/services/ServicesGrid";
import ServiceProcess from "@/sections/services/ServiceProcess";
import ServicesCTA from "@/sections/services/ServicesCTA";

export const metadata = {
    title: "Our Services - Three Tech | Professional Software Development",
    description: "Explore our comprehensive software development services including Web Development, Mobile Apps, AI Solutions, SEO, and more.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <ServiceProcess />
            <ServicesCTA />
        </>
    );
}
