import CareersHero from "@/sections/careers/CareersHero";
import CareersBenefits from "@/sections/careers/CareersBenefits";
import CareersOpenings from "@/sections/careers/CareersOpenings";
import CareersCTA from "@/sections/careers/CareersCTA";

export const metadata = {
    title: "Careers - Three Tech | Join Our Team",
    description: "Explore career opportunities at Three Tech. Join our team of talented developers, designers, and innovators.",
};

export default function CareersPage() {
    return (
        <>
            <CareersHero />
            <CareersBenefits />
            <CareersOpenings />
            <CareersCTA />
        </>
    );
}
