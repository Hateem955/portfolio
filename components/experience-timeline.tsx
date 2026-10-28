"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineItem {
  date: string;
  title: string;
  org: string;
  points: string[];
}

export function ExperienceTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);

  // 0 when the timeline enters the screen, 1 when you've scrolled past it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Faint background line */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-[calc(12rem+7px)]" />
      {/* Yellow line that grows as you scroll */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute left-[7px] top-2 h-full w-px origin-top bg-yellow-400 md:left-[calc(12rem+7px)]"
      />

      <div className="space-y-16">
        {items.map((item) => (
          <motion.div
            key={item.title + item.org}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-2 pl-10 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0"
          >
            {/* Date */}
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground md:pr-10 md:pt-1 md:text-right">
              {item.date}
            </p>

            {/* Dot on the line */}
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-yellow-400 bg-background md:left-48" />

            {/* Details */}
            <div className="md:pl-12">
              <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 font-medium text-yellow-400">{item.org}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}