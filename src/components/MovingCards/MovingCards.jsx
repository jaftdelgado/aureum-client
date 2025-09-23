"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import "./MovingCards.scss";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      const children = Array.from(scrollerRef.current.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        scrollerRef.current.appendChild(clone);
      });
      setDirection();
      setSpeed();
      setStart(true);
    }
  }, []);

  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.name} className="moving-card">
            <img src={item.image} alt={item.name} />
            <div className="card-texts">
              <span className="subtitle">{item.title}</span>
              <span className="description">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
