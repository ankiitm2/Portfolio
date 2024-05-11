import { useRef, useEffect } from "react";
import "./Home.css"
import Typed from "typed.js";
import Avatar from "../../assets/Avatar.svg";
import ButtonComp from "../../components/button/Button";
declare global {
  interface Window {
    VANTA: any;
  }
}

const Home = () => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null); // Assert type as Typed or null
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Typed instance
    typed.current = new Typed(el.current, {
      strings: ["Front-End Developer", "Web Designer"],
      typeSpeed: 60,
      loop: true, // Enable looping
      loopCount: Infinity, // Loop indefinitely
    });

    // Cleanup function
    return () => {
      // Destroy Typed instance during cleanup
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  const updateTypedStrings = () => {
    if (typed.current != null) {
    }
  };
  // Function to update Typed strings every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTypedStrings();
    }, 4000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Initialize Vanta.js effect
    vantaRef.current = window.VANTA.NET({
      el: "#your-element-selector",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 13.0,
      maxDistance: 28.0,
      spacing: 20.0,
      color: 0x3fff99,
      backgroundColor: 0x0,
    });

    return () => {};
  }, []);

  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div
      id="your-element-selector"
      className="Home min-h-screen flex justify-center items-center text-center"
    >
      <div className="info min-w-60">
        <img src={Avatar} alt="" className="m-auto mb-3" />
        <h1 className="font-bold text-6xl ">Ankit Mishra</h1>
        <p className="mb-4 mt-2 text-xl">
          {" "}
          I'm a <span ref={el} />
        </p>
        <ButtonComp
          text={"Hire Me"}
          onClick={() => {
            handleClick("contact");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
