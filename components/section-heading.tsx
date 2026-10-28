"use client";

import { StrokeDrawType } from "@/components/stroke-draw-type";

export function SectionHeading({ text }: { text: string }) {
  return (
    <StrokeDrawType
      text={text}
      trigger="in-view"
      fontSize={96}
      fontWeight={800}
      fontFamily="var(--font-sans), ui-sans-serif, system-ui, sans-serif"
      color="#fafafa"
      accentColor="#facc15"
      className="mb-12 justify-start"
    />
  );
}