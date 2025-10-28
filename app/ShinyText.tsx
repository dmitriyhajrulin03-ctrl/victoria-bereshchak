"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, speed = 3 }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-current via-current to-current bg-size-200 animate-shimmer">
      {text}
    </span>
  );
};

