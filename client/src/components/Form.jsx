const Form = () => {
  return (
    <div
      className="py-12 md:py-20 sm:w-96 w-full flex flex-col justify-center items-center mx-auto"
      id="form"
    >
      <div className="mb-12 text-center">
        <h2 class="text-3xl sm:text-5xl text-white text-gradient py-1">
          Title goes here
        </h2>
        <p class="mt-5 text-dark">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
      </div>
      <input
        type="text"
        placeholder="Address To"
        name="addressTo"
        className="block w-full my-2 p-3 rounded-lg white-glassmorphism focus:outline-none "
      />
      <input
        type="number"
        placeholder="Amount (ETH)"
        name="Amount (ETH)"
        className="block w-full my-2 p-3 rounded-lg white-glassmorphism focus:outline-none "
      />
      <input
        type="text"
        placeholder="Keyword (Gif)"
        name="Keyword (Gif)"
        className="block w-full my-2 p-3 rounded-lg white-glassmorphism focus:outline-none "
      />
      <input
        type="text"
        placeholder="Enter Message"
        name="Enter Message"
        className="block w-full my-2 p-3 rounded-lg white-glassmorphism focus:outline-none "
      />
      <button
        type="button"
        className="text-dark hover:text-white w-full mt-2 border-[1px] p-2 border-[#333333] hover:bg-[#2546bd] rounded-full cursor-pointer"
      >
        Send now
      </button>
    </div>
  );
};

export default Form;
