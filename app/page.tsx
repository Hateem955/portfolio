"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MinimalistHero } from "@/components/minimalist-hero";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  const navLinks = [
    { label: "WORK", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hateem955" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-hateem" },
    { icon: Mail, href: "mailto:muhammadhateem238@gmail.com" },
  ];

  return (
    <main>
      <MinimalistHero
        logoText="MH."
        navLinks={navLinks}
        mainText="Hi, I'm Muhammad Hateem — a final-year Computer Science student and part-time software engineer building backend services with Java, Spring Boot, C# and .NET."
        readMoreLink="#projects"
        imageSrc="/me.png"
        imageAlt="Portrait of Muhammad Hateem"
        overlayText={{ part1: "build.", part2: "ship." }}
        socialLinks={socialLinks}
        locationText="Chester, UK"
      />
      <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-24 md:px-12">
        <SectionHeading text="Projects" />
      </section>
    </main>
  );
}