"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MinimalistHero } from "@/components/minimalist-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";

const projects = [
  {
    title: "Uptime Tracker",
    description:
      "Automated monitoring for client websites. A background worker pings every site every 30 seconds, logging latency and availability to a relational database.",
    href: "#",
    badge: "2026",
    tags: ["C#", ".NET", "SQL", "Background Services"],
    image: "/projects/uptime-tracker.webp",
  },
  {
    title: "Hospital Appointment System",
    description:
      "REST API with Spring Boot and MySQL supporting four user roles, secured with JWT and role-based access across 15+ endpoints. Fully containerised with Docker.",
    href: "https://github.com/Hateem955",
    badge: "2025",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "Docker"],
    image: "/projects/hospital-system.webp",},
  {
    title: "Charity Donation Platform",
    description:
      "High-fidelity Figma prototype built with a 4-person team. Shaped by 10+ user interviews and improved usability by 25% through heuristic evaluation and SUS testing.",
    href: "#",
    badge: "2025",
    tags: ["Figma", "UX Research", "Prototyping"],
    image: "/projects/charity-platform.webp",
  },
];
const experience = [
  {
    date: "Apr 2026 — Now",
    title: "Software Engineer (Part-time)",
    org: "Titan Webtech · Chester",
    points: [
      "Joined as a 5-week intern and was kept on as a permanent part-time engineer after delivering internal service tools.",
      "Built an Uptime Tracker in C# and .NET that pings every client website every 30 seconds, flagging latency spikes and downtime.",
      "Work directly with clients to turn business requirements into working software through iterative check-ins.",
    ],
  },
  {
    date: "Nov 2025",
    title: "Hackathon Participant",
    org: "Accelerate Me · Manchester",
    points: [
      "Designed and built a working prototype with a team under an 8-hour deadline.",
    ],
  },
  {
    date: "2024 — 2027",
    title: "BSc Computer Science",
    org: "University of Chester",
    points: [
      "Predicted First Class Honours.",
      "Vice Team Leader on a 4-person UX project, designing a charity donation platform prototype in Figma.",
    ],
  },
  {
    date: "2023",
    title: "Web Development Certification",
    org: "Aptech",
    points: [
      "Foundations in web development, which led to studying Computer Science.",
    ],
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

      <section id="experience" className="mx-auto w-full max-w-7xl px-8 py-24 md:px-12">
        <SectionHeading text="Experience" />
        <ExperienceTimeline items={experience} />
      </section>
    </main>
  );
}