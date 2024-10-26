import AuthButton from "./auth-button";
import { useState, useEffect } from "react";
import HamburgerButton from "./hamburger-button";
import { navMenuList } from "../../constants/nav-list";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className="px-2 py-1 z-20 md:px-6 md:h-[60px] fixed w-full flex top-0 md:py-1 md:shadow-md transition-all duration-200 backdrop-blur-sm bg-slate-500/60">
        <div className="flex items-center justify-between pb-[2px] w-full">
          <div className="text-2xl font-bold text-white ">
            <a href="/">P' Blog</a>
          </div>
          <HamburgerButton
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          {/* Mobile Menu */}
          <div
            className={`flex flex-col gap-4 absolute inset-0 transition-all duration-700 ease-in-out bg-slate-700 items-center justify-center z-10 w-full h-screen ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            }
            `}
          >
            {navMenuList.map((item, index) => (
              <a
                key={index}
                className="text-white text-sm transition-all duration-300 ease-in-out hover:text-gray-500"
                href={item.path}
              >
                {item.title}
              </a>
            ))}
            <div className="pt-20">
              <AuthButton
                width={width}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navMenuList.map((item, index) => (
              <a
                key={index}
                className="text-white text-sm hover:text-gray-500"
                href={item.path}
              >
                {item.title}
              </a>
            ))}
            <AuthButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
