import React, { useContext } from "react";
import { Loader } from ".";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="block w-full my-2 p-3 rounded-lg glassmorphism focus:outline-none"
  />
);

const Form = () => {
  const { handleChange, formData, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div
      className="py-12 md:py-20 sm:w-96 w-full flex flex-col justify-center items-center mx-auto relative z-10"
      id="form"
    >
      <div className="absolute -z-2 top-[50%] -right-[200px] w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto
        </h2>
        <p className="mt-5 text-dark">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
      </div>
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={handleChange}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        handleChange={handleChange}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="btn-grad text-white w-full mt-2 border-[1px] p-2 border-[#dddddd] rounded-full cursor-pointer"
        >
          Send now
        </button>
      )}
    </div>
  );
};

export default Form;
