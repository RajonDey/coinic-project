import React, { useContext } from "react";

import { FcDown } from "react-icons/fc";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";

const Welcome = () => {
  const { connectWallet } = useContext(TransactionContext);

  return (
    <div className="flex mf:flex-row flex-col md:flex-row items-center justify-between md:py-20 py-12 px-2 max-w-7xl mx-auto mt-20">
      <div className="flex flex-1 justify-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-gradient py-1 font-medium">
          Send Crypto <br /> across the world
        </h1>
        <p className="text-left mt-8 text-dark md:w-9/12 w-11/12 text-base text-1xl sm:text-2xl">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        <div className="flex flex-col sm:flex-row justify-start mt-8">
          <button
            type="button"
            onClick={connectWallet}
            className="btn-grad px-3 py-2 rounded-full text-sm font-medium mt-2 text-center text-white w-40"
          >
            Connect Wallet-
          </button>
          <a
            href="#form"
            className="text-center btn-grad-transparent text-black hover:text-white px-3 py-2 sm:ml-3 mt-2 rounded-full text-sm font-medium border border-[#777777] w-40"
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

      <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 relative">
        <div className="absolute -top-[100px] right-[0px] w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>

        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-[200px] sm:w-80 w-full my-5 eth-card">
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
