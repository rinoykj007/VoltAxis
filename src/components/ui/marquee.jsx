import React from "react";

export const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`flex overflow-hidden ${className}`}
      style={{
        "--duration": "20s",
      }}
      {...props}
    >
      <div
        className={`flex animate-marquee gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {children}
      </div>
      <div
        className={`flex animate-marquee gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};
