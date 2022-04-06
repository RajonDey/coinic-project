import React from "react";

import { MdSecurity } from "react-icons/Md";
import { GiReceiveMoney, GiCoinsPile, GiSpeedometer } from "react-icons/Gi";

const Features = () => {
  return (
    <div
      className="flex items-center justify-center max-w-[100%] lg:max-w-[80%] mx-auto relative"
      id="features"
    >
      <div class="absolute -top-[50px] right-[0px] w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div class="absolute top-[50px] left-[0px] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>

      <div className="shadow-md m-8 shadow-xl rounded-xl w-full glassmorphism">
        <div className="flex flex-col md:flex-row p-10 px-16 py-[60px] items-center text-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <MdSecurity fontSize={72} className="text-blue-500" />
            <div className="rounded-full bg-blue-500 center-icon text-white mt-4">
              1
            </div>
            <div className="text-dark pt-2 font-bold">Security</div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <GiCoinsPile fontSize={72} className="text-green-700" />
            <div className="rounded-full bg-green-700 center-icon text-white mt-4">
              2
            </div>
            <div className="text-dark pt-2 font-bold">Etherum</div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <GiReceiveMoney fontSize={72} className="text-amber-500" />
            <div className="rounded-full bg-amber-500 center-icon text-white mt-4">
              3
            </div>
            <div className="text-dark pt-2 font-bold">Low Fees</div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <GiSpeedometer fontSize={72} className="text-purple-400" />
            <div className="rounded-full bg-purple-400 center-icon text-white mt-4">
              4
            </div>
            <div className="text-dark pt-2 font-bold">Fast Transaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
