import "./About.css";
import ButtonComp from "../../components/button/Button";
import { useEffect, useState } from "react";
import ResumePDF from "../../assets/AnkitCV.pdf";
import Transition from "../../components/transition/Transition";

// interface AboutProps {
//   name: string;
// }

const About = () => {
  const openResume = () => {
    window.open(ResumePDF, "_blank");
  };

  const [age, setAge] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const birthDate = new Date("2000-01-07");
    const diff_ms = currentDate.getTime() - birthDate.getTime();
    const age_dt = new Date(diff_ms);

    setAge(Math.abs(age_dt.getUTCFullYear() - 1970));
  }, []);

  return (
    <Transition>
      <div className="about min-h-screen gap-8 lg:gap-28 md:gap-28 p-14 flex flex-col justify-around relative">
        <div className="titleBox text-center mt-3 mb-7">
          <h1 className="text-4xl font-bold position-relative">Know Me More</h1>
          <span className="line"></span>
        </div>
        <div className="info flex flex-col lg:flex-row md:flex-row gap-4">
          <div className="head">
            <h2 className="text-4xl mb-3 font-medium">
              I'm <span className="color">Ankit Mishra</span>, a Web Developer
            </h2>
            <p className="text-2xl font-light mb-3">
              I'm passionate about bringing both the technical and visual
              aspects of digital products to life. User experience, beautiful
              pixels and writing clean accessible, human code matters to me.
            </p>
            <p className="text-2xl font-light">
              I have rich experience in web site design and building and
              customization
            </p>
          </div>
          <div className="subInfo md:w-1/2 lg:w-1/2">
            <ul className="mb-2 text-xl">
              <li>
                <span className="font-semibold me-2">Name:</span>Ankit Mishra
              </li>
              <li>
                <span className="font-semibold me-2">Email:</span>
                <a
                  href="mailto:ankitmishra07am@gmail.com"
                  className="color"
                  rel="noopener noreferrer"
                >
                  ankitmishra07am@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold me-2">Age:</span>
                {age}
              </li>
              <li className="border-0">
                <span className="font-semibold me-2">From:</span>Gurgaon, India
              </li>
            </ul>
            <ButtonComp text={"Resume"} onClick={openResume} />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;
