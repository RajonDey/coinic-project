import React, { useContext } from "react";
import { FcOvertime } from "react-icons/fc";

const Transactions = () => {
  return (
    <div className="py-12 md:py-20 max-w-[80%] flex flex-col justify-center items-center mx-auto">
      <div className="mb-12 text-center">
        <h2 class="text-3xl sm:text-5xl text-white text-gradient py-1">
          Latest Transactions
        </h2>

        <div className="flex flex-col lg:flex-row p-10 px-16 items-center text-center justify-between">
          <div className="flex flex-col items-center justify-center mx-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <img
                  className="w-full object-cover"
                  src="https://picsum.photos/300/400"
                  alt="Image"
                />
                <div className="bg-black p-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl mx-auto relative">
                  <p className="text-[#fff] font-bold text-sm flex leading-4">
                    <FcOvertime fontSize={12} /> &nbsp; Jan 2022, 12:30 PM
                  </p>
                </div>
                <div className="flex flex-row justify-between text-left pt-5">
                  <h4 className="font-bold text-sm mb-2">
                    FROM: <span className="text-gray-600">000 000 0</span>
                    <br />
                    TO: <span className="text-gray-600">0000 00</span>
                  </h4>
                  <h4 className="font-bold text-sm mb-2">
                    Amount: <br /> <span className="text-gray-600">0000</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <img
                  className="w-full object-cover"
                  src="https://picsum.photos/300/400"
                  alt="Image"
                />
                <div className="bg-black p-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl mx-auto relative">
                  <p className="text-[#fff] font-bold text-sm flex leading-4">
                    <FcOvertime fontSize={12} /> &nbsp; Jan 2022, 12:30 PM
                  </p>
                </div>
                <div className="flex flex-row justify-between text-left pt-5">
                  <h4 className="font-bold text-sm mb-2">
                    FROM: <span className="text-gray-600">000 000 0</span>
                    <br />
                    TO: <span className="text-gray-600">0000 00</span>
                  </h4>
                  <h4 className="font-bold text-sm mb-2">
                    Amount: <br /> <span className="text-gray-600">0000</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <img
                  className="w-full object-cover"
                  src="https://picsum.photos/300/400"
                  alt="Image"
                />
                <div className="bg-black p-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl mx-auto relative">
                  <p className="text-[#fff] font-bold text-sm flex leading-4">
                    <FcOvertime fontSize={12} /> &nbsp; Jan 2022, 12:30 PM
                  </p>
                </div>
                <div className="flex flex-row justify-between text-left pt-5">
                  <h4 className="font-bold text-sm mb-2">
                    FROM: <span className="text-gray-600">000 000 0</span>
                    <br />
                    TO: <span className="text-gray-600">0000 00</span>
                  </h4>
                  <h4 className="font-bold text-sm mb-2">
                    Amount: <br /> <span className="text-gray-600">0000</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <img
                  className="w-full object-cover"
                  src="https://picsum.photos/300/400"
                  alt="Image"
                />
                <div className="bg-black p-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl mx-auto relative">
                  <p className="text-[#fff] font-bold text-sm flex leading-4">
                    <FcOvertime fontSize={12} /> &nbsp; Jan 2022, 12:30 PM
                  </p>
                </div>
                <div className="flex flex-row justify-between text-left pt-5">
                  <h4 className="font-bold text-sm mb-2">
                    FROM: <span className="text-gray-600">000 000 0</span>
                    <br />
                    TO: <span className="text-gray-600">0000 00</span>
                  </h4>
                  <h4 className="font-bold text-sm mb-2">
                    Amount: <br /> <span className="text-gray-600">0000</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
