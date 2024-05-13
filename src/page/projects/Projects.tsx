import ButtonComp from "../../components/button/Button";
import "./Projects.css";

const Projects = () => {

  const openProject = ()=>{
    window.open("https://ankiitm2.github.io/Drama/")
  }

  return (
    <div className="Projects min-h-screen gap-8 lg:gap-28 md:gap-28 p-14 flex flex-col justify-around relative">
      <div className="titleBox text-center mb-7">
        <h1 className="text-4xl font-bold position-relative">My Work</h1>
        <span className="line"></span>
      </div>
      <div className="cards flex flex-wrap gap-10 justify-center items-center lg:flex-row">
        <div className="card max-w-80">
          <div className="card__content">
            <p className="card__title">Drama: movies database application</p>
            <p className="card__description mb-4">
            Orchestrated a React-driven movie database website
            </p>
            <ButtonComp text={"Open"} onClick={openProject}/>
          </div>
        </div>
        <div className="card max-w-80">
          <div className="card__content">
            <p className="card__title">Card Title</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="card max-w-80">
          <div className="card__content">
            <p className="card__title">Card Title</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
