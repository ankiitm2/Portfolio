import ButtonComp from "../../components/button/Button";
import "./Projects.css";

const Projects = () => {
  const openProject1 = () => {
    window.open("https://ankiitm2.github.io/Drama/");
  };

  return (
    <div className="Projects min-h-screen gap-8 lg:gap-28 md:gap-28 p-14 flex flex-col justify-around relative">
      <div className="titleBox text-center mb-7">
        <h1 className="text-4xl font-bold position-relative">My Work</h1>
        <span className="line"></span>
      </div>
      <div className="cards flex flex-wrap gap-10 justify-center items-center lg:flex-row">
        <div className="container noselect max-w-80">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              {/* "https://ankiitm2.github.io/Drama/" */}
              <div id="frontSide">HOVER OVER :D</div>
              <div className="title">
                <ButtonComp text="VISIT" onClick={openProject1} />
              </div>
            </div>
          </div>
        </div>
        <div className="container noselect max-w-80">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <div id="frontSide">HOVER OVER :D</div>
              <div className="title">Visit</div>
            </div>
          </div>
        </div>
        <div className="container noselect max-w-80">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <div id="frontSide">HOVER OVER :D</div>
              <div className="title">Visit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
