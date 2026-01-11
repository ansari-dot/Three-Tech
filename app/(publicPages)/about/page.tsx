import AboutHero from "@/sections/about/AboutHero";
import AboutStory from "@/sections/about/AboutStory";
import AboutValues from "@/sections/about/AboutValues";
import AboutTeam from "@/sections/about/AboutTeam";
import AboutStats from "@/sections/about/AboutStats";
import AboutCTA from "@/sections/about/AboutCTA";

export const metadata = {
    title: "About Us - Three Tech | Our Story & Team",
    description: "Learn about Three Tech's mission, values, and the expert team behind our innovative software solutions.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutValues />
            <AboutStats />
            <AboutTeam />
            <AboutCTA />
        </>
    );
}
