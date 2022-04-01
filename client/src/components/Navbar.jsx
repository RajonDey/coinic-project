import React from "react";

import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="white-glassmorphism">
      <div className="max-w-7xl mx-auto px-2 py-5">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center sm:items-stretch justify-start">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-black hover:text-white px-5 py-2 rounded-full text-sm font-medium border border-grey hover:bg-[#2546bd]"
              aria-current="page"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
