import { Link } from "react-router-dom";
import "./Contact.css";
import {
  IoCall,
  IoMailSharp,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import ButtonComp from "../../components/button/Button";
import Transition from "../../components/transition/Transition";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqydzqp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Transition>
      <div className="contact min-h-screen gap-8 lg:gap-28 md:gap-28 p-14 flex flex-col justify-around relative">
        <div className="titleBox text-center mt-3">
          <h1 className="text-4xl font-bold position-relative">Get in Touch</h1>
          <span className="line"></span>
        </div>
        <div className="bottom-row flex flex-col gap-16 lg:flex-row md:flex-row">
          <div className="contactBox">
            <h2 className="mb-4 text-2xl uppercase">Address</h2>
            <p className="text-xl mb-4">Sector 9B, Gurgaon, Haryana</p>
            <Link to="tel:9540394049">
              <p className="flex text-xl mb-3 gap-2 items-center">
                <span className="color">
                  <IoCall />
                </span>
                (+91) 9540394049
              </p>
            </Link>
            <Link to="mailto:ankitmishra07am@gmail.com">
              <p className="flex text-xl gap-2 items-center">
                <span className="color">
                  <IoMailSharp />
                </span>
                ankitmishra07am@gmail.com
              </p>
            </Link>
            <h2 className="my-4 text-2xl uppercase">Follow me</h2>
            <div className="icons flex gap-6">
              <Link
                to={
                  "https://www.linkedin.com/in/ankit-mishra-3aab7b236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                target="_blank"
              >
                <span className=" text-2xl">
                  {" "}
                  <IoLogoLinkedin />
                </span>
              </Link>
              <Link to={"https://github.com/ankiitm2"} target="_blank">
                <span className=" text-2xl">
                  {" "}
                  <IoLogoGithub />
                </span>
              </Link>
              <Link
                to={
                  "https://www.instagram.com/ankittm2?utm_source=qr&igsh=MXRteG9uMm9lOTF1OA=="
                }
                target="_blank"
              >
                <span className=" text-2xl">
                  {" "}
                  <IoLogoInstagram />
                </span>
              </Link>
              <Link
                to={"https://x.com/ankittm2?t=3_sthYtShNnCFa8qdKwhnw&s=35"}
                target="_blank"
              >
                <span className=" text-2xl">
                  {" "}
                  <BsTwitterX />
                </span>
              </Link>
            </div>
          </div>
          <form className="inputBox w-full" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-2xl uppercase">Send us a note</h2>
            <div className="inputFields flex flex-col lg:flex-row md:flex-row gap-4">
              <input
                type="text"
                name="user_name" // Ensure this matches your EmailJS template variable
                placeholder="Name"
                className="text-base outline-none rounded-md"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="text-base outline-none rounded-md"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="text-area my-4">
              <textarea
                id="message"
                name="message"
                className="w-full outline-none rounded-md"
                placeholder="Tell us more about your needs........"
              ></textarea>
            </div>
            <ButtonComp
              // type="submit"
              // disabled={state.submitting}
              text="Send Message"
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </Transition>
  );
};

export default Contact;
