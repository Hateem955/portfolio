import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  badge: string;
  tags: string[];
  image?: string;
}

const notchCurve = {
  background:
    "radial-gradient(circle at 0 100%, transparent 24px, var(--background) 24.5px)",
};

export function ProjectCard({ title, description, href, badge, tags, image }: ProjectCardProps) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block"
    >
      {/* Cover image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-8xl font-bold text-white/10">
            {title.charAt(0)}
          </div>
        )}

        {/* Year badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {badge}
        </span>

        {/* Notch with arrow */}
        <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-3xl bg-background pb-2 pl-2">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-yellow-400 text-black transition duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        {/* Smooth curves either side of the notch */}
        <div className="absolute right-16 top-0 h-6 w-6" style={notchCurve} />
        <div className="absolute right-0 top-16 h-6 w-6" style={notchCurve} />
      </div>

      {/* Text */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-yellow-400">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}