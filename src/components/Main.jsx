import React from "react";
import { TypeAnimation } from "react-type-animation";
import lgbackground from "../assets/lg-bg.png";
import dianaPicture from "../assets/diana.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AvailabilityButton from "./AvailabilityButton";
import DownloadButton from "./DonwloadButton";
function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={lgbackground}
        alt="clouds image background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-[700px] flex flex-col justify-center items-center lg:items-start">
            <h1 className="flex sm:text-5xl text-4xl pt-4 font-bold text-gray-800">
              I'm
              <TypeAnimation
                sequence={[" Diana Cordero", 2000, " a Web Developer", 2000]}
                wrapper="span"
                speed={40}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  paddingLeft: "5px",
                }}
                repeat={Infinity}
              />
            </h1>
            <AvailabilityButton />
            <div>
              <p className="py-6 text-xl text-justify">
                I'm passionate about technology and programming, with experience
                in customer service and logistics. I currently work as a
                Business Systems Analyst, where I use my skills to improve
                business processes. My enthusiasm for web systems development
                drives me to seek innovative solutions in the IT sector. I am
                excited to deepen my knowledge and be a valuable asset to any
                team.
              </p>
            </div>
            <div className="flex items-center pt-6 justify-between w-full">
              <div className="flex">
                <FaGithub className="cursor-pointer" size={30} />
                <FaLinkedin className="cursor-pointer ml-4" size={30} />
              </div>
              <div>
                <DownloadButton />
              </div>
            </div>
          </div>
          <div className="lg:ml-8 mt-8 lg:mt-0">
            <img
              className="w-[400px] h-[400px]"
              src={dianaPicture}
              alt="Diana"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
