import React from "react";

const GetInTouch = () => {
  return (
    <>
      <div
        id=" Contact"
        className="container xl:max-w-[1164px] translate-y-[120px] mx-auto xl:px-3 px-6 bg-[url('./assets/images/webp/BgGet.webp')] lg:bg-BgSize bg-center bg-cover bg-no-repeat sm:pt-[71px] sm:pb-[70px] py-[40px] rounded-[16px]"
      >
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h2
            className="text-white text-center sm:text-[48px] text-[32px] ff_play font-normal leading-[126%] mb-[16px]"
            data-aos="zoom-in-up"
          >
            Get in touch with us
          </h2>
          <p
            className="lg:max-w-[713px] text-[#B4B5B6] text-[16px] font-normal text-center leading-[160%] mb-[30px]"
            data-aos="zoom-in-up"
          >
            For our early supporters, we have curated an exclusive presale
            opportunity. To ensure your participation, we will be implementing a
            whitelist registration process. By signing up on the whitelist and
            following the provided instructions, you will secure your spot in
            this exciting event. To stay informed about the whitelist opening
            and receive timely updates, kindly provide us with your email
            address, and we will notify you accordingly.
          </p>
          <div data-aos="zoom-in-up">
            <button className="bg-[#0066FF] hover:bg-white hover:text-[#0066FF] transition-all ease-linear duration-500 sm:py-[18px] py-[16px] px-[32px] sm:text-[18px] text-[16px] font-semibold text-white rounded-[12px]">
              Sign Up now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
