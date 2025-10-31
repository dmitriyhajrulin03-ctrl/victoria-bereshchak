"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className="relative overflow-hidden bg-white"
    >
      {/* Aurora effect layer - behind content */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,white_0%,white_7%,transparent_10%,transparent_12%,white_16%)]
            [--aurora:repeating-linear-gradient(100deg,hsl(119deg_50%_55% / 0.45)_10%,hsl(119deg_50%_58% / 0.4)_15%,hsl(119deg_50%_60% / 0.35)_20%,hsl(120deg_45%_62% / 0.3)_25%,hsl(119deg_50%_55% / 0.45)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-soft-light
            pointer-events-none
            absolute -inset-[10px] opacity-85 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
      </div>
      {/* Content - in front of Aurora with grid layout */}
      <div className={cn("relative z-[2]", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

