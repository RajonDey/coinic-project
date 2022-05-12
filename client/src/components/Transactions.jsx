import React, { useContext } from "react";
import { FcOvertime } from "react-icons/fc";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <img
            className="w-full object-cover"
            src={gifUrl || url}
            alt="nature"
          />
          <div className="bg-black p-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl mx-auto relative">
            <p className="text-[#fff] font-bold text-sm flex leading-4">
              <FcOvertime fontSize={12} /> &nbsp; {timestamp}
            </p>
          </div>
          <div className="flex flex-row justify-between text-left pt-5">
            <h4 className="font-bold text-sm mb-2">
              <a
                href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                target="_blank"
                rel="noreferrer"
              >
                FROM:{" "}
                <span className="text-gray-600">
                  {shortenAddress(addressFrom)}
                </span>
              </a>
              <br />
              <a
                href={`https://ropsten.etherscan.io/address/${addressTo}`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-gray-600 text-base">
                  To:{" "}
                  <span className="text-gray-600">
                    {shortenAddress(addressTo)}
                  </span>
                </p>
              </a>
            </h4>
            <h4 className="font-bold text-sm mb-2">
              Amount: <br /> <span className="text-gray-600">{amount} ETH</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="py-12 md:py-20 max-w-[80%] flex flex-col justify-center items-center mx-auto">
      <div className="mb-12 text-center">
        {currentAccount ? (
          <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Latest Transactions
          </h2>
        ) : (
          <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Connect your account to see the latest transactions
          </h2>
        )}
        <div
          className="flex flex-col lg:flex-row p-10 px-16 items-center text-center justify-between"
          style={{ flexWrap: "wrap" }}
        >
          {dummyData.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
