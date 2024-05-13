import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Transition = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 }); // Fade in when element comes into view
    } else {
      controls.start({ opacity: 0 }); // Fade out when element goes out of view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }} // Animation duration
    >
      {children}
    </motion.div>
  );
};

export default Transition;
