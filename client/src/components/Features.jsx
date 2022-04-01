import React from "react";

import { MdSecurity } from "react-icons/Md";
import { GiReceiveMoney, GiCoinsPile, GiSpeedometer } from "react-icons/Gi";

const Features = () => {
  return (
    <div className="flex items-center justify-center" id="features">
      <div className="shadow-md m-8 shadow-xl rounded-xl w-full white-glassmorphism">
        <div className="flex flex-col md:flex-row p-10 px-16 items-center text-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <MdSecurity fontSize={72} />
            <div className="rounded-full bg-blue-500 center-icon text-white mt-4">
              1
            </div>
            <div className="text-dark pt-2 font-bold">Security</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiCoinsPile fontSize={72} />
            <div className="rounded-full bg-green-700 center-icon text-white mt-4">
              2
            </div>
            <div className="text-dark pt-2 font-bold">Etherum</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiReceiveMoney fontSize={72} />
            <div className="rounded-full bg-amber-500 center-icon text-white mt-4">
              3
            </div>
            <div className="text-dark pt-2 font-bold">Low Fees</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiSpeedometer fontSize={72} />
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
