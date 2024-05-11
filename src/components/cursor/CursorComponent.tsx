import { useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

const CursorComponent = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveHandler = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
      });
    };

    document.addEventListener("mousemove", moveHandler);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CursorComponent;
