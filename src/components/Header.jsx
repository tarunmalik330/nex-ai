import React from "react";
import { useState } from "react";
import BgGif from "../assets/images/gif/HeroGif.gif";
import AlignImg from "../assets/images/webp/heroAlien.webp";

const Header = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="bg-[#08090E] relative overflow-hidden">
        <div className="bg-[#08090E] w-full h-full top-0 left-0 bottom-0 right-0 absolute">
          <img
            src={BgGif}
            alt="BgGif"
            className=" w-full h-full object-cover opacity-20 object-center"
          />
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#0066FF] mix-blend-overlay"></div>
        <div className="absolute left-0 xl:top-[-100px] top-0 bottom-0 right-0 flex justify-center items-center ">
          <img
            src={AlignImg}
            alt="AlignImg"
            className="w-full max-w-[650px] max-h-[857px] h-full object-cover object-center"
          />
        </div>
        <div className="absolute left-0 bottom-0 right-0 w-full h-[121px]  bg-gradient-to-b from-[#08090e00] to-[#08090E]"></div>
        {/* -------------------navbar---------------------- */}
        <div
          id="Home"
          className="container mx-auto xl:max-w-[1124px] xl:px-3 px-6"
        >
          <div className="flex items-center justify-end lg:gap-[254px] max-lg:gap-[32px] pt-[18px] pb-[19px]">
            <ul
              className={`${
                nav ? "left-[-100%]" : "left-0"
              } flex max-lg:fixed max-lg:top-0 max-lg:bottom-0  max-lg:bg-[#020202] max-lg:h-full max-lg:w-full max-lg:z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
            >
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#Home"
                  className="text-[16px] font-normal leading-[150%] text-white hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Home
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#Marketplace"
                  className="text-[16px] font-normal leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Marketplace
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#About"
                  className="text-[16px] font-normal leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  About
                </a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a
                  href="#NexChat"
                  className="text-[16px] font-normal leading-[150%] text-white  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  NexChat
                </a>
              </li>
              <li className="sm:hidden block">
                <button className="bg-[#0066FF] hover:bg-white hover:text-[#0066ff] transition-all ease-linear duration-500 py-[18px] px-[32px] text-[18px] font-semibold text-white rounded-[12px]">
                  Sign Up
                </button>
              </li>
            </ul>
            <div className=" sm:block hidden">
              <button className="bg-[#0066FF] relative z-[1] hover:bg-white hover:text-[#0066ff] transition-all ease-linear duration-500 py-[18px] px-[32px] text-[18px] font-semibold text-white rounded-[12px]">
                Sign Up
              </button>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[28px] h-[20px] relative z-[55] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
              ></span>
            </div>
          </div>
        </div>
        {/* -----------------------HeaderRobo------------------------ */}
        <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-6 md:pt-[189px] md:pb-[266px] py-[100px]">
          <div className="relative flex flex-col justify-center items-center">
            <h1
              className="ff_play text-white capitalize lg:text-[60px] sm:text-[36px] text-[32px] leading-[132%]  font-bold max-w-[978px] text-center mb-[40px]"
              data-aos="zoom-in-up"
            >
              NexAi is an advanced AI-powered home assistant
            </h1>
            <div className="flex justify-center" data-aos="zoom-in-up">
              <button className="bg-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all ease-linear duration-500 py-[18px] px-[32px] text-[18px] font-semibold text-white rounded-[12px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
