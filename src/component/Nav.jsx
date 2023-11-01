
import  { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import LOGO from './../assets/logo.png'
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#product", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" },
  ];
  return ( 
    <>
      <header className="sm:px-8 lg:px-[130px] px-4 py-2 z-50 w-full bg-slate-800 fixed text-slate-100" id="products">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold">
            <img src={LOGO} alt="exotic apparel logo" className="w-24"  loading="lazy"/>
          </a>
          <ul className=" flex justify-center items-center gap-12 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-[50%] lg:bottom-auto bg-slate-100  z-[51]">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Nav;