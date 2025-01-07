"use client";
import React, { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const MovingImage = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const targetRef = useRef<Position>({ x: 0, y: 0 });
  const lastTimeRef = useRef(performance.now());

  // Capture the mouse position in a ref
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      // Calculate delta time (in seconds) since last frame
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setPosition((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;

        // Speed in pixels per second
        const speed = 400; // adjust to taste

        // Distance to move this frame
        // movement = speed * delta
        // But we don't want to overshoot if dx, dy is small
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) {
          return prev; // close enough
        }

        // direction vector
        const angle = Math.atan2(dy, dx);
        const moveDist = Math.min(dist, speed * delta);

        return {
          x: prev.x + Math.cos(angle) * moveDist,
          y: prev.y + Math.sin(angle) * moveDist,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <img
      src="/ufo.png"
      alt="Moving UFO"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default MovingImage;