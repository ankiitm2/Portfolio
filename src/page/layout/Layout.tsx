import "./Layout.css";
import Home from "../home/Home";
import Sidebars from "../../components/sidebar/SideBar";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { Element } from "react-scroll"; // Import from react-scroll
import About from "../about/About";
import Transition from "../../components/transition/Transition";


const HomeWithAbout = () => (
  <Transition>
  <div className="flex layout">
    <Sidebars />
    <div className="rightContainer">
      <Element id="home">
        <Home />
      </Element>
      <Element id="about">
        <About />
      </Element>
      <Element id="projects">
        <Projects />
      </Element>
      <Element id="contact">
        <Contact />
      </Element>
    </div>
  </div>
  </Transition>
);

export default HomeWithAbout;
