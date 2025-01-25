"use client";
import React, { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const MovingImage: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: -100, y: 100 });
  const mouseRef = useRef<Position>({ x: 800, y: 200 });

  const angleRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(performance.now());
  const requestIdRef = useRef<number>(0);

  // Adjustable parameters
  const arcTightness = 0.54; // arc curvature (0 = direct line, 1 = full arc)
  const centerSmoothFactor = 0.25; // how fast the center shifts

  const circleCenterRef = useRef<Position>({ x: position.x, y: position.y });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      setPosition((prevPos) => {
        const px = prevPos.x;
        const py = prevPos.y;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // If already very close, snap to target
        const distToMouse = Math.hypot(mx - px, my - py);
        if (distToMouse < 0.5) {
          return { x: mx, y: my };
        }

        // Compute Smoothed Circle Center
        const targetH = px + arcTightness * (mx - px);
        const targetK = py + arcTightness * (my - py);

        // Smooth transition of center over time
        circleCenterRef.current.x += centerSmoothFactor * (targetH - circleCenterRef.current.x);
        circleCenterRef.current.y += centerSmoothFactor * (targetK - circleCenterRef.current.y);

        const h = circleCenterRef.current.x;
        const k = circleCenterRef.current.y;

        // Compute the radius (with clamping)
        const maxRadius = 400; // Prevents extreme loops
        let r = Math.sqrt((mx - h) ** 2 + (my - k) ** 2);
        r = Math.min(r, maxRadius);

        // Compute Angles
        const startAngle = Math.atan2(py - k, px - h);
        const endAngle = Math.atan2(my - k, mx - h);

        // Initialize angleRef once
        if (angleRef.current === 0) {
          angleRef.current = startAngle;
        }

        // Compute shortest rotation direction
        let angleDiff = endAngle - angleRef.current;
        angleDiff = ((angleDiff + Math.PI) % (2 * Math.PI)) - Math.PI;

        // Move by a small angular step
        const angularSpeed = 1.0; // Adjust speed
        const maxStep = angularSpeed * delta;
        const angleStep = Math.abs(angleDiff) < maxStep
          ? angleDiff
          : Math.sign(angleDiff) * maxStep;

        angleRef.current += angleStep;

        // Compute New Position on Arc
        const newX = h + r * Math.cos(angleRef.current);
        const newY = k + r * Math.sin(angleRef.current);

        return { x: newX, y: newY };
      });

      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestIdRef.current);
  }, []);

  return (
    <img
    src="/ufo.png"
    alt="Moving UFO"
    style={{
      position: "absolute",
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: "translate(-50%, -50%) scale(75%)",
    }}
  />
  );
};

export default MovingImage;