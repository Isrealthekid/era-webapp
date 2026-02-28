"use client";

import { cn } from "@/lib/utils";
import Typewriter from "@/components/Typewriter";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ tag, title, subtitle, className, align = "center" }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-4">
        {tag}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground font-body mx-auto">
          <Typewriter text={subtitle} speed={16} />
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
