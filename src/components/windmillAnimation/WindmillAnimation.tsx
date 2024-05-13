import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fan from "../../assets/fan.svg";

// Ensure ScrollTrigger is activated
gsap.registerPlugin(ScrollTrigger);

const WindmillAnimation = () => {
  // Create a ref for the element you want to animate
  const windmillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-windmill",
        start: "top 50%", // Trigger animation when the top of the component reaches the top of the viewport
        markers: true,
        end: "bottom top", // End animation when the top of the component reaches the bottom of the viewport
        scrub: 1, // Enable scrubbing for smooth animation
      },
    });

    tl.to("#pin-windmill", {
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
        <img src={Fan} alt="" />
      </div>
    </div>
  );
};

export default WindmillAnimation;
