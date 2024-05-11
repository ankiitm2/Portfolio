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
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefaul();
    emailjs
      .sendForm(
        "service_l3bxf7s",
        "template_yxk7rui",
        form.current,
        "IjZsUMbsyDPHMXJVL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact min-h-screen gap-28 p-14 flex flex-col justify-around relative">
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
            <Link to={""}>
              <span className=" text-2xl">
                {" "}
                <IoLogoLinkedin />
              </span>
            </Link>
            <Link to={"https://github.com/ankiitm2"}>
              <span className=" text-2xl">
                {" "}
                <IoLogoGithub />
              </span>
            </Link>
            <Link to={""}>
              <span className=" text-2xl">
                {" "}
                <IoLogoInstagram />
              </span>
            </Link>
            <Link to={""}>
              <span className=" text-2xl">
                {" "}
                <BsTwitterX />
              </span>
            </Link>
          </div>
        </div>
        <form ref={form} className="inputBox w-full" onSubmit={sendEmail}>
          <h2 className="mb-4 text-2xl uppercase">Send us a note</h2>
          <div className="inputFields flex gap-4">
            <input
              type="text"
              name="user_name" // Ensure this matches your EmailJS template variable
              placeholder="Name"
              className="text-base outline-none rounded-md"
            />
            <input
              type="email"
              name="user_email" // Ensure this matches your EmailJS template variable
              placeholder="Email"
              className="text-base outline-none rounded-md"
            />
          </div>
          <div className="text-area my-4">
            <textarea
              name="message" // Ensure this matches your EmailJS template variable
              className="w-full outline-none rounded-md"
              placeholder="Tell us more about your needs........"
            ></textarea>
          </div>
          <ButtonComp text="Send Message" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
