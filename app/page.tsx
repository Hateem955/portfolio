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
      "Automated monitoring for client websites. A background worker pings every site every 30 seconds, logging latency and availability to a relational database so the team can spot latency spikes and downtime early.",
    badge: "2026 · Client work",
    tags: ["C#", ".NET", "SQL", "Background Services"],
    image: "/projects/uptime-tracker.webp",
  },
  {
    title: "Hospital Appointment System",
    description:
      "REST API with Spring Boot and MySQL supporting four user roles, secured with JWT and role-based access control across 15+ endpoints. Fully containerised with Docker.",
    href: "https://github.com/Hateem955",
    badge: "2025",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "Docker"],
    image: "/projects/hospital-system.webp",
  },
  {
    title: "UoC Way Finder",
    description:
      "Indoor navigation for University of Chester buildings, built with a friend. I own the backend: each building is modelled as a graph of rooms and corridors, and the API turns the shortest route into step-by-step directions.",
    badge: "In progress",
    tags: ["TypeScript", "Node.js", "Graph Algorithms", "React"],
    href: "https://github.com/Abdussalam-popsy/uoc-wayfinder",
    image: "/projects/way-finder.webp",
  },
  {
    title: "YourWay",
    description:
      "Project manager on a 7-person team through a design sprint to deliver a high-fidelity prototype of a transport booking app, where travellers book journeys with the facilities they need.",
    badge: "In progress",
    tags: ["Project Management", "Design Sprint", "Figma", "UX"],
    image: "/projects/youway.webp",
  },
  {
    title: "Charity Donation Platform",
        description:
      "Vice Team Leader for a High-fidelity Figma prototype built with a 4-person team. Shaped by 10+ user interviews and personas, it improved usability by 25% through heuristic evaluation and SUS testing.",
    href: "https://www.figma.com/proto/mOyCQ7Ones1dmSuwy3JGWX/Untitled?node-id=78-3&p=f&t=r7jjmiYufyr0IQsi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=53%3A5&show-proto-sidebar=1",
    badge: "2025",
    tags: ["Figma", "UX Research", "Prototyping"],
    image: "/projects/charity-platform.webp",
  },
];
const experience = [
  {
    date: "Apr 2026 — Now",
    title: "Software Engineer",
    org: "Titan Webtech · Chester",
    points: [
      "Joined as a 5-week intern and was kept on as a permanent engineer after delivering internal service tools.",
      "Build new features for client websites, from first requirements through to release.",
      "Test websites before launch, finding and fixing bugs across pages, forms and devices.",
    ],
  },
  {
    date: "Nov 2025",
    title: "Hackathon Participant",
    org: "Accelerate Me · Manchester",
    points: [
      "Designed and built a working prototype with a team under an 8-hour deadline.",
      "Split the work across the team and kept the build on track against the clock.",
      "Presented the finished prototype and the problem it solved at the end of the day.",
    ],
  },
  {
    date: "2024 — 2027",
    title: "BSc Computer Science",
    org: "University of Chester",
    points: [
      "Predicted First Class Honours.",
      "Vice Team Leader on a 4-person UX project, designing a charity donation platform prototype in Figma.",
      "Project Manager for a 7-person team building YouWay, a transport booking app prototype.",
    ],
  },
  {
    date: "2023",
    title: "Web Development Certification",
    org: "Aptech",
    points: [
      "Learned the foundations of web development with HTML, CSS and JavaScript.",
      "Built my first websites from scratch, from layout to working pages.",
      "Sparked my interest in how software works behind the scenes, which led to studying Computer Science.",
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
        mainText="I build the parts of software you never see: the APIs, background jobs and databases that keep everything running."
        readMoreLink="#projects"
        imageSrc="/me.webp"
        imageAlt="Portrait of Muhammad Hateem"
        overlayText={{ part1: "build.", part2: "ship." }}
        socialLinks={socialLinks}
        locationText="Chester, UK"
      />

      <section id="projects" className="mx-auto w-full max-w-7xl px-8 py-12 md:py-16 md:px-12">
        <SectionHeading text="Projects" />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl px-8 py-12 md:py-16 md:px-12">
        <SectionHeading text="Experience" />
        <ExperienceTimeline items={experience} />
      </section>

            <section id="about" className="mx-auto w-full max-w-7xl px-8 py-12 md:py-16 md:px-12">
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

      <section id="contact" className="mx-auto w-full max-w-7xl px-8 pb-12 pt-12 md:pt-16 md:px-12">
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
            href="/MUHAMMAD-HATEEM-CV.pdf"
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