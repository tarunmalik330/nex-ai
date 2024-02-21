import React from "react";
import PresaleSkull from "../assets/images/gif/skullgifpresale.gif";

const Presale = () => {
  return (
    <>
      <div className="lg:mt-[80px] sm:mt-[50px] mt-[30px] lg:mb-[-20px] mb-[-50px] relative">
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] left-[-10%] top-[25%] blur-[180px] animate-pulse"></div>
        <div className="container xl:max-w-[1216px] mx-auto xl:px-3 px-6">
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="sm:w-6/12 w-full">
              <img
                src={PresaleSkull}
                alt="PresaleSkull"
                className="max-w-[586px] w-full"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="lg:w-6/12 w-full flex justify-end items-end">
              <div>
                <h2
                  className="text-white lg:text-start text-center ff_play sm:text-[48px] text-[32px] leading-[126%] font-normal mb-[16px]"
                  data-aos="zoom-in-up"
                >
                  Whitelist & Presale
                </h2>
                <p
                  className="text-[#B4B5B6] lg:text-start text-center font-normal text-[16px] leading-[160%] lg:max-w-[482px]"
                  data-aos="zoom-in-up"
                >
                  For our early supporters, we have curated an exclusive presale
                  opportunity. To ensure your participation, we will be
                  implementing a whitelist registration process. By signing up
                  on the whitelist and following the provided instructions, you
                  will secure your spot in this exciting event. To stay informed
                  about the whitelist opening and receive timely updates, kindly
                  provide us with your email address, and we will notify you
                  accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presale;
