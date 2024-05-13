import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is activated
gsap.registerPlugin(ScrollTrigger);

const WindmillAnimation = () => {
  // Create a ref for the element you want to animate
  const windmillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: "#pin-windmill",
        start: "50% 50%",
        endTrigger: "#pin-windmill-wrap",
        end: "bottom 50%",
      },
    });

    tl.to(windmillRef.current, {
      rotateZ: 900,
    });

    // Ensure ScrollTrigger updates when the component unmounts
    return () => {
      tl.kill(); // Clean up the timeline
    };
  }, []);

  return (
    <div id="pin-windmill-wrap">
      <div id="pin-windmill" ref={windmillRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <rect x="0" y="0" width="100" height="100" fill="#f0f0f0" />
          {/* Your SVG content here */}
          <circle cx="50" cy="50" r="40" fill="#ff0000" />
        </svg>
      </div>
    </div>
  );
};

export default WindmillAnimation;
