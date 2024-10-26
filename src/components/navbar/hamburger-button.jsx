import React from "react";

const HamburgerButton = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  isMobileMenuOpen;
  return (
    <button
      className="md:hidden cursor-pointer flex flex-col gap-[2px] z-[999]"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <div
        className={`w-4 h-[2px] bg-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? "transform rotate-45 translate-y-1" : ""
        }`}
      ></div>
      <div
        className={`w-4 h-[2px] bg-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-4 h-[2px] bg-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? "transform -rotate-45 -translate-y-1" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamburgerButton;
