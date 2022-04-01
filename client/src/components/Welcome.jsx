import React, { useContext } from "react";
import { FcDown } from "react-icons/fc";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className="flex mf:flex-row flex-col sm:flex-row items-center justify-between md:py-20 py-12 px-2 max-w-7xl mx-auto mt-20">
      <div className="flex flex-1 justify-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-6xl text-white text-gradient py-1 font-medium">
          Send Crypto <br /> across the world
        </h1>
        <p className="text-left mt-8 text-dark md:w-9/12 w-11/12 text-base text-1xl sm:text-2xl">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        <div className="flex flex-col sm:flex-row justify-start mt-8">
          <button className="px-3 py-2 rounded-full text-sm font-medium bg-[#2952e3] text-center text-white hover:bg-[#2546bd] w-40">
            Connect Wallet
          </button>
          <a
            href="#form"
            className="text-center text-black hover:text-white px-3 py-2 ml-3 rounded-full text-sm font-medium border border-[#2546bd] w-40 hover:bg-[#2546bd]"
          >
            Send Crypto
          </a>
        </div>

        <a
          href="#features"
          className="flex text-dark mt-40 text-sm font-semibold"
        >
          <FcDown fontSize={21} color="#333" />
          &nbsp; Scroll down to explore furher!
        </a>
      </div>

      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-full my-5 eth-card white-glassmorphism ">
          <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <SiEthereum fontSize={21} color="#fff" />
              </div>
              <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <div>
              <p className="text-white font-light text-sm">....</p>
              <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
