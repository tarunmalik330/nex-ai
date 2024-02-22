import React from "react";
import RemoteAccess from "../assets/images/webp/RemoteAccess.webp";
import AutonomousImg from "../assets/images/webp/AutonomousImg.webp";
import RealTime from "../assets/images/webp/RealTime.webp";
import IntelligentRobo from "../assets/images/webp/IntelligentRobot.webp";
import GlobalEarth from "../assets/images/gif/GlobalEarth.gif";

const Features = () => {
  return (
    <>
      <div
        id="Features"
        className="relative xl:pb-[121px] md:pb-[70px] sm:pb-[100px] pb-[15px]"
      >
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] right-0 blur-[200px] animate-pulse"></div>
        <div className="absolute w-[274px] h-[182px] bg-[#0066FF] bottom-[34%] left-0 rounded-[274px] blur-[200px] animate-pulse"></div>
        <div className="absolute left-0 bottom-0 right-0 w-full h-[121px]  bg-gradient-to-b from-[#01030900] to-[#010309]"></div>
        <div className="absolute top-[17%] bottom-0 left-0 right-0 flex justify-center items-center">
          <img
            src={GlobalEarth}
            alt="GlobalEarth"
            className="max-w-[900px] w-full mix-blend-screen"
          />
        </div>
        <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6 h-[770px] overflow-y-scroll no-scrollbar mb-[39px] relative z-[1]">
          <div className="flex flex-col justify-center items-center lg:mb-[100px] mb-[50px]">
            <h2
              className="ff_play text-white sm:text-[48px] text-[32px] text-center font-normal leading-[125%] mb-[16px]"
              data-aos="zoom-in-up"
            >
              Unique features
            </h2>
            <p
              className="text-[#B4B5B6] text-[16px] font-normal lg:max-w-[517px] text-center"
              data-aos="zoom-in-up"
            >
              ability to engage in natural, fluent conversations in over 15
              languages,
            </p>
          </div>
          <div className="flex flex-row justify-center flex-wrap relative">
            <div className="lg:w-6/12 sm:w-8/12 w-full flex flex-col lg:justify-start justify-center lg:items-start items-center relative z-10">
              <div
                className="lg:max-w-[364px] w-full cursor-pointer relative rounded-[16px] overflow-hidden border border-solid border-[#fcfcfc66] lg:mb-[180px] mb-[100px]"
                data-aos="zoom-in-up"
              >
                <img
                  src={RemoteAccess}
                  alt="RemoteAccess"
                  className=" w-full"
                />
                <div className="px-6 pb-[30px] pt-[20px] bg-[#ffffff21]">
                  <p className="text-[20px] max-w-[304px] text-white font-semibold leading-[160%]">
                    Remote Access and File Management
                  </p>
                </div>
              </div>
              <div
                className="lg:max-w-[364px] cursor-pointer rounded-[16px] overflow-hidden border border-solid border-[#fcfcfc66] max-lg:mb-[100px]"
                data-aos="zoom-in-up"
              >
                <img
                  src={AutonomousImg}
                  alt="AutonomousImg"
                  className=" w-full"
                />
                <div className="px-6 pb-[30px] pt-[20px] bg-[#ffffff21]">
                  <p className="text-[20px] text-white font-semibold leading-[160%]">
                    Autonomous and Natural Language Communication
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 sm:w-8/12 w-full flex flex-col lg:justify-end justify-center lg:items-end items-center lg:translate-y-[27%] relative z-10">
              <div
                className="lg:max-w-[364px] cursor-pointer rounded-[16px] overflow-hidden border border-solid border-[#fcfcfc66] lg:mb-[180px] mb-[100px]"
                data-aos="zoom-in-up"
              >
                <img src={RealTime} alt="RealTime" className=" w-full" />
                <div className=" px-6 pb-[30px] pt-[20px] bg-[#ffffff21]">
                  <p className="text-[20px]  text-white max-w-[203px] font-semibold leading-[160%]">
                    Real-time Home Monitoring
                  </p>
                </div>
              </div>
              <div
                className="lg:max-w-[364px] cursor-pointer rounded-[16px] overflow-hidden border border-solid border-[#fcfcfc66]"
                data-aos="zoom-in-up"
              >
                <img
                  src={IntelligentRobo}
                  alt="IntelligentRobo"
                  className=" w-full"
                />
                <div className=" px-6 pb-[30px] pt-[20px] bg-[#ffffff21]">
                  <p className="text-[20px] max-w-[271px] text-white font-semibold leading-[160%]">
                    Intelligent Contextual Awareness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
