"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MinimalistHero } from "@/components/minimalist-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Uptime Tracker",
    description:
      "Automated monitoring for client websites. A background worker pings every site every 30 seconds, logging latency and availability to a relational database.",
    href: "#",
    badge: "2026",
    tags: ["C#", ".NET", "SQL", "Background Services"],
  },
  {
    title: "Hospital Appointment System",
    description:
      "REST API with Spring Boot and MySQL supporting four user roles, secured with JWT and role-based access control across 15+ endpoints. Fully containerised with Docker.",
    href: "https://github.com/Hateem955",
    badge: "2025",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "Docker"],
  },
  {
    title: "Charity Donation Platform",
    description:
      "High-fidelity Figma prototype built with a 4-person team. Shaped by 10+ user interviews and improved usability by 25% through heuristic evaluation and SUS testing.",
    href: "#",
    badge: "2025",
    tags: ["Figma", "UX Research", "Prototyping"],
  },
];

export default function Home() {
  const navLinks = [
    { label: "WORK", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Hateem955" },
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
        imageSrc="/me.webp"
        imageAlt="Portrait of Muhammad Hateem"
        overlayText={{ part1: "build.", part2: "ship." }}
        socialLinks={socialLinks}
        locationText="Chester, UK"
      />

      <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-24 md:px-12">
        <SectionHeading text="Projects" />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}