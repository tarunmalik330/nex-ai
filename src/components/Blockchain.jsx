import React from "react";
import PrivacyBlock from "../assets/images/webp/PrivacyBlock.webp";
import BlockchainBoderline from "../assets/images/webp/blockchain-borderline.webp";
import DataManagement from "../assets/images/webp/DataManagement.webp";
import SelfLearning from "../assets/images/webp/SelfLearning.webp";
import AutomatedBlock from "../assets/images/webp/AutomatedBlock.webp";

const Blockchain = () => {
  return (
    <>
      <div className="pt-[23px] pb-[39px] relative">
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] left-0 top-[15%] blur-[200px] animate-pulse"></div>
        <div className="absolute w-[274px] h-[274px] rounded-[274px] bg-[#0066FF] right-[-10%] top-[50%] blur-[200px] animate-pulse"></div>
        <div className="container xl:max-w-[1164px] mx-auto xl:px-3 px-6 relative z-[1]">
          <div className="pt-[23px] pb-[40px]">
            <h2
              className="text-white lg:text-start text-center sm:text-[48px] text-[32px] ff_play font-normal leading-[126%] mb-[16px]"
              data-aos="zoom-in-up"
            >
              Blockchain & AI technology
            </h2>
            <p
              className="text-[#B4B5B6] lg:text-start text-center lg:max-w-[997px] text-[16px] font-normal leading-[160%] mb-[40px]"
              data-aos="zoom-in-up"
            >
              Nexai is an advanced home assistant that will revolutionize the
              way we interact with our smart devices at home. Powered by
              sophisticated artificial intelligence, it leverages blockchain
              technology to offer a secure and efficient user experience.
            </p>
            <p
              className="ff_play text-white lg:text-start text-center sm:text-[20px] text-[18px] font-normal leading-[160%] lg:max-w-[684px]"
              data-aos="zoom-in-up"
            >
              By building the software on blockchain, Nexai provides the
              following advantages
            </p>
          </div>
        </div>
        <div
          className="container xl:max-w-[1164px] mx-auto xl:px-3 sm:px-6 relative z-[1]"
          data-aos="zoom-in-up"
        >
          <div className=" h-[646px] overflow-y-scroll no-scrollbar">
            <div
              id="Privacy"
              className="flex flex-row flex-wrap sm:px-7 px-6 relative items-center justify-center lg:pt-[180px] lg:pb-[161px] sm:py-[110px] py-[50px] rounded-[4px] mb-[38px]"
            >
              <img
                src={BlockchainBoderline}
                alt="BlockchainBoderline"
                className="absolute top-0 left-0 w-[2px] h-full"
              />
              <div className="lg:w-6/12 w-full">
                <div className="cursor-pointer w-[58px] h-[58px] rounded-[58px] bg-[#040404] shadow-[0px_4px_16px_0px_#0066FF9C_inset] flex justify-center items-center mb-[20px]">
                  <p className=" font-semibold text-[32px] text-center text-white leading-[160%]">
                    1
                  </p>
                </div>
                <h3 className="text-white ff_play sm:text-[40px] text-[24px] font-bold leading-[160%] mb-[16px]">
                  Security and Privacy
                </h3>
                <p className="text-[#B4B5B6] font-normal text-[16px] lg:max-w-[538px] leading-[163%]">
                  Nexai is an advanced home assistant that will revolutionize
                  the way we interact with our smart devices at home. Powered by
                  sophisticated artificial intelligence, it leverages blockchain
                  technology to offer a secure and efficient user experience.
                </p>
              </div>
              <div className="lg:w-6/12 w-full flex lg:justify-end justify-center pt-8 lg:pt-0">
                <img
                  src={PrivacyBlock}
                  alt="PrivacyBlock"
                  className="w-full max-w-[414px]"
                />
              </div>
            </div>
            <div
              id="terms"
              className="flex flex-row flex-wrap sm:px-7 px-6 relative items-center justify-center lg:pt-[180px] lg:pb-[140px] sm:py-[110px] py-[50px] bg-[#0066FF] rounded-[4px] mb-[38px]"
            >
              <img
                src={BlockchainBoderline}
                alt="BlockchainBoderline"
                className="absolute top-0 w-[2px] left-0 h-full"
              />
              <div className="lg:w-6/12 w-full">
                <div className="cursor-pointer w-[58px] h-[58px] rounded-[58px] bg-white shadow-[0px_4px_16px_0px_#0066FF9C_inset] flex justify-center items-center mb-[20px]">
                  <p className=" font-semibold text-[32px] text-center text-black leading-[160%]">
                    2
                  </p>
                </div>
                <h3 className="text-white ff_play sm:text-[40px] text-[24px] font-bold leading-[160%] mb-[16px]">
                  Transparent and Reliable Data Management
                </h3>
                <p className="text-[#B4B5B6] font-normal text-[16px] lg:max-w-[535px] leading-[163%]">
                  Nexai enables transparent and reliable data management through
                  blockchain. Users can trust that their data is securely stored
                  and that they have full control over their digital identities
                  and personal information.
                </p>
              </div>
              <div className="lg:w-6/12 w-full flex lg:justify-end justify-center pt-8 lg:pt-0">
                <img
                  src={DataManagement}
                  alt="DataManagement"
                  className="w-full max-w-[428px]"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap sm:px-7 px-6 relative items-center justify-center lg:pt-[180px] lg:pb-[140px] sm:py-[110px] py-[50px] rounded-[4px] mb-[38px]">
              <img
                src={BlockchainBoderline}
                alt="BlockchainBoderline"
                className="absolute top-0 w-[2px] left-0 h-full"
              />
              <div className="lg:w-6/12 w-full">
                <div className="cursor-pointer w-[58px] h-[58px] rounded-[58px] bg-[#040404] shadow-[0px_4px_16px_0px_#0066FF9C_inset] flex justify-center items-center mb-[20px]">
                  <p className="font-semibold text-[32px] text-center text-white leading-[160%]">
                    3
                  </p>
                </div>
                <h3 className="text-white ff_play sm:text-[40px] lg:max-w-[395px] text-[24px] font-bold leading-[160%] mb-[16px]">
                  Self-learning and Personalization
                </h3>
                <p className="text-[#B4B5B6] font-normal text-[16px] lg:max-w-[537px] leading-[163%]">
                  Nexai uses blockchain technology to create a self-learning
                  platform. By analyzing user data, Nexai learns users'
                  preferences and habits over time, resulting in a more
                  personalized and tailored experience for each user.
                </p>
              </div>
              <div className="lg:w-6/12 w-full flex lg:justify-end justify-center pt-8 lg:pt-0">
                <img
                  src={SelfLearning}
                  alt="SelfLearning"
                  className="w-full max-w-[418px]"
                />
              </div>
            </div>
            <div
              id="Phone"
              className="flex flex-row flex-wrap sm:px-7 px-6 relative items-center justify-center lg:pt-[180px] lg:pb-[114px] sm:py-[110px] py-[50px] bg-[#0066FF] rounded-[4px] mb-[38px]"
            >
              <img
                src={BlockchainBoderline}
                alt="BlockchainBoderline"
                className="absolute top-0 w-[2px] left-0 h-full"
              />
              <div className="lg:w-6/12 w-full">
                <div className="cursor-pointer w-[58px] h-[58px] rounded-[58px] bg-white shadow-[0px_4px_16px_0px_#0066FF9C_inset] flex justify-center items-center mb-[20px]">
                  <p className=" font-semibold text-[32px] text-center text-black leading-[160%]">
                    4
                  </p>
                </div>
                <h3 className="text-white ff_play sm:text-[40px] lg:max-w-[555px] text-[24px] font-bold leading-[160%] mb-[16px]">
                  Automated and Transparent Transactions
                </h3>
                <p className="text-[#B4B5B6] font-normal text-[16px] lg:max-w-[560px] leading-[163%]">
                  With the help of smart contracts on the blockchain, Nexai can
                  automate and ensure the execution of agreements and
                  transactions between users and devices. This reduces the need
                  for third-party involvement and provides increased
                  transparency and efficiency in interactions.
                </p>
              </div>
              <div className="lg:w-6/12 w-full flex lg:justify-end justify-center pt-8 lg:pt-0">
                <img
                  src={AutomatedBlock}
                  alt="AutomatedBlock"
                  className="w-full max-w-[428px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blockchain;
