"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function BentoCard({
  children,
  className,
  icon,
  title,
  description,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6",
        "transition-all duration-300",
        "hover:shadow-lg hover:border-primary/50",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-primary/20 before:via-transparent before:to-accent/20 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
        {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
