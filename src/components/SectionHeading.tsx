import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
  children,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", align === "center" && "justify-center", dark && "text-gold-soft")}>
          <span className={cn("rule-gold h-px w-8", dark && "from-gold-soft")} aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-[1.75rem] font-semibold leading-[1.15] sm:text-[2.15rem] lg:text-[2.5rem]",
          dark ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-[0.98rem] leading-relaxed", dark ? "text-navy-300" : "text-muted-foreground")}>
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}

export default SectionHeading;
