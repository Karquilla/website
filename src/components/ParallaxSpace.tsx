'use client';
import React, { useEffect, useState, ReactNode } from 'react';

// Optional: Type definition
interface ParallaxBackgroundProps {
  children: ReactNode;
  factor?: number; // Allow a custom parallax factor
}

export default function ParallaxBackground({
  children,
  factor = 0.4,
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*
    Because the background is fixed, the page scroll 
    won't physically move it off-screen. We'll manually 
    translate it so it looks like it's moving more slowly.
  */

  return (
    <>
      {/* Fixed background image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -1, // behind the main content
        }}
      >
        <img
          src="/NightSkyV2xx.png" // make sure it's in /public
          alt="Night Sky"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            /*
              The key: we subtract scrollY * factor
              so it moves *less* than the scrolling content.
              You can experiment with + or - 
              depending on how you want the image to move.
            */
            transform: `translateY(${-scrollY * factor}px)`,
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      {/* Main content that scrolls on top */}
      <div style={{ position: 'relative' }}>{children}</div>
    </>
  );
}