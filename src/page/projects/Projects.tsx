import ButtonComp from "../../components/button/Button";
import Transition from "../../components/transition/Transition";
import "./Projects.css";

const Projects = () => {

  const openProject = () => {
    window.open("https://ankiitm2.github.io/Drama/");
  };

  const openProject2 = () => {
    window.open("https://ankiitm2.github.io/SpeechToText/");
  };

  return (
    <Transition>
      <div className="Projects min-h-screen gap-8 lg:gap-20 md:gap-20 p-14 flex flex-col justify-around relative">
        <div className="titleBox text-center mb-7">
          <h1 className="text-4xl font-bold position-relative">My Work</h1>
          <span className="line"></span>
        </div>
        <div className="cards flex flex-wrap gap-10 justify-center items-center lg:flex-row">
          <div className="card max-w-md card1">
            <div className="card__content">
              <p className="card__title">Drama: movies database application</p>
              <p className="card__description mb-4">
                Orchestrated a React-driven movie database website
              </p>
              <ButtonComp text={"Open"} onClick={openProject} />
            </div>
          </div>
          <div className="card max-w-md card2">
            <div className="card__content">
              <p className="card__title">Speech Recognition Website</p>
              <p className="card__description mb-4">
                Speech recognition marvel translates spoken words into text
              </p>
              <ButtonComp text={"Open"} onClick={openProject2} />
            </div>
          </div>
          <div className="card max-w-md card3">
            <div className="card__content">
              <p className="card__title">Card Title</p>
              <p className="card__description mb-4">
                Speech recognition marvel translates spoken words into text
              </p>
              <ButtonComp text={"Open"} onClick={openProject2} />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
export default Projects;
