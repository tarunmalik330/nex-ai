import React from "react";
import Aigif from "../assets/images/gif/Ai-gif.gif";
import AiSkull from "../assets/images/webp/Ai-skull.webp";

const HomeAssistant = () => {
  return (
    <>
      <div
        id="About"
        className="lg:pt-[75px] lg:pb-[130px] sm:py-[70px] py-[50px] relative"
      >
        <div className="absolute w-[274px] h-[168px] bg-[#0066FF] blur-[200px] left-[-7%] top-[39%] animate-pulse"></div>
        <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6">
          <div className="flex flex-row flex-wrap max-lg:justify-center items-center">
            <div className="lg:w-7/12 w-full flex flex-col lg:items-start items-center max-lg:mb-9">
              <h2
                className="text-white ff_play sm:text-[48px] text-[32px] font-normal max-lg:text-center mb-[16px] leading-[125%]"
                data-aos="zoom-in-right"
              >
                Ai-Powered Home Assistant
              </h2>
              <p
                className=" text-[#B4B5B6] lg:max-w-[609px] text-[16px] max-lg:text-center font-normal mb-[6px] leading-[163%]"
                data-aos="zoom-in-right"
              >
                Nexai is an advanced AI-powered home assistant that brings the
                future to your fingertips. With its ability to engage in
                natural, fluent conversations in over 15 languages,
              </p>
              <p
                className=" text-[#B4B5B6] lg:max-w-[609px] text-[16px] max-lg:text-center font-normal mb-[6px] leading-[163%]"
                data-aos="zoom-in-right"
              >
                Nexai offers an incredibly futuristic experience. It can take
                the initiative to ask about your day, schedule meetings, provide
                timely reminders
              </p>
              <p
                className=" text-[#B4B5B6] lg:max-w-[609px] text-[16px] max-lg:text-center font-normal mb-[40px] leading-[163%]"
                data-aos="zoom-in-right"
              >
                assist with cooking by suggesting ingredients, track your
                fitness and nutrition goals, and even handle bill payments.
              </p>
              <div data-aos="zoom-in-right">
                <button className="bg-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all ease-linear duration-500 sm:py-[18px] py-[16px] px-[32px] sm:text-[18px] text-[16px] font-semibold text-white rounded-[12px]">
                  Learn more
                </button>
              </div>
            </div>
            <div className="lg:w-5/12 w-full flex justify-center">
              <div className="relative" data-aos="zoom-in-left">
                <img
                  src={Aigif}
                  alt="Aigif"
                  className="absolute right-[-13%] max-lg:left-[44%] max-sm:max-w-[226px] max-md:max-w-[304px] max-md:left-[40%] max-sm:left-[39%] w-full bottom-0 xl:max-w-[305px] lg:max-w-[280px] max-w-[308px] mix-blend-color-dodge"
                />
                <img
                  src={AiSkull}
                  alt="AiSkull"
                  className="w-full max-w-[443px] relative z-[1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAssistant;
