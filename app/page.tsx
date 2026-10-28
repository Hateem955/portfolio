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

const skills = [
  { group: "Languages", items: ["Java", "C#", "SQL"] },
  { group: "Backend", items: ["Spring Boot", ".NET", "REST APIs", "JWT", "Microservices", "Kafka"] },
  { group: "Tools", items: ["Docker", "Git", "Postman", "Umbraco CMS", "Figma"] },
  { group: "Ways of working", items: ["Agile / Scrum", "Client collaboration", "Cross-functional teams"] },
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

            <section id="about" className="mx-auto w-full max-w-7xl px-8 py-24 md:px-12">
        <SectionHeading text="About" />
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a final-year Computer Science student at the University of Chester, predicted a
              First, and a part-time software engineer at Titan Webtech.
            </p>
            <p>
              I enjoy the parts of software most people never see: the APIs, background services and
              databases that keep everything running. At Titan Webtech I started as a 5-week intern
              and was kept on after building an uptime monitoring tool that tracks every active
              client website.
            </p>
            <p>
              I graduate in 2027 and I'm looking for a backend or software engineering role where I
              can keep building reliable systems with Java, Spring Boot, C# and .NET.
            </p>
          </div>

          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.group}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-8 pb-12 pt-24 md:px-12">
        <SectionHeading text="Contact" />
        <p className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Have a role, a project or a question? <span className="text-yellow-400">Let's talk.</span>
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:muhammadhateem238@gmail.com"
            className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Email me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hateem"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Hateem955"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-yellow-400 hover:text-yellow-400"
          >
            GitHub
          </a>
        </div>

        <footer className="mt-24 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© 2026 Muhammad Hateem</p>
          <p>Chester, UK</p>
        </footer>
      </section>
    </main>
  );
}