import React from "react";
import BgUtility from "../assets/images/webp/BgUtility.webp";
import UtilityGif1 from "../assets/images/gif/utility1gif.gif";

const Utility = () => {
  return (
    <>
      <div
        id="Tokens"
        className="bg-[#ffffff0A] relative lg:pt-[90px] sm:pt-[55px] sm:pb-[88px] pt-[50px] pb-[60px]"
      >
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] left-[-20%] top-0 blur-[180px] animate-pulse"></div>
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] right-[-20%] bottom-0 blur-[180px] animate-pulse"></div>
        <div className="absolute left-0 right-0 bottom-0 top-0">
          <img
            src={BgUtility}
            alt="BgUtility"
            className="opacity-[4%] w-full h-full"
          />
        </div>
        <h2
          className="text-white text-center sm:text-[48px] text-[32px] ff_play font-normal leading-[126%] lg:mb-[70px] sm:mb-[50px] mb-[30px] px-6"
          data-aos="zoom-in-up"
        >
          NexAI Token & utility
        </h2>
        <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6">
          <div className="bg-[#ffffff0A] border border-solid border-[#0066FF] lg:pt-[149px] lg:pl-[60px] sm:px-8 rounded-[32px] px-5 lg:pb-[237px] sm:py-[120px] py-[60px] relative overflow-hidden">
            <div className="relative z-10">
              <div
                className="w-[58px] h-[58px] rounded-[58px] bg-[#FCFCFC] shadow-[0px_4px_16px_0px_#0066FF9C_inset] cursor-pointer flex items-center justify-center mb-[30px]"
                data-aos="zoom-in-up"
              >
                <p className="font-semibold text-[32px] text-[#0066FF] leading-[160%]">
                  1
                </p>
              </div>
              <h4
                className="text-[32px] font-normal ff_play leading-[130%] mb-[16px] text-white"
                data-aos="zoom-in-up"
              >
                Purchasing Nexai Products
              </h4>
              <p
                className="lg:max-w-[390px] text-[#B4B5B6] text-[16px] font-normal leading-[160%]"
                data-aos="zoom-in-up"
              >
                Nex AI tokens will be the primary currency for acquiring Nexai's
                extensive range of software solutions, hardware devices,
                including drones and sensors, and other smart home products
                available on the Nexai marketplace. Users can confidently make
                purchases using Nex tokens, enjoying the convenience and
                flexibility of a token-based payment system.
              </p>
            </div>
            <div
              className="absolute right-[-7%] lg:bottom-[-16%] bottom-[-18%] lg:max-w-[689px] sm:max-w-[450px] max-w-[350px] w-full"
              data-aos="zoom-in-left"
            >
              <img
                src={UtilityGif1}
                alt="UtilityGif1"
                className="max-lg:opacity-70 lg:max-w-[689px] sm:max-w-[450px] max-w-[350px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utility;
