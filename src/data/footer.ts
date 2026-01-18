import { IFooter } from "@/types";

export const footerData: IFooter[] = [
    {
        title: "Services",
        links: [
            { name: "Web Development", href: "/services"},
            { name: "App Development", href: "/services" },
            { name: "WordPress & Design", href: "/services" },
            { name: "SEO & Marketing", href: "/services" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
            { name: "Testimonials", href: "/#testimonials" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
        ]
    }
];