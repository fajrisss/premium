/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Product({ handleNavigation, currentSection }) {
  
  const [activeNav, setActiveNav] = useState(getCurrentPath());


  function getCurrentPath() {
    return window.location.pathname; 
  }
  useEffect(() => {
    function handlePathChange() {
      setActiveNav(getCurrentPath());
    }

    window.addEventListener("popstate", handlePathChange); 

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  useEffect(() => {
    setActiveNav(getCurrentPath());
  }, []);

  return (  
    <div className="h-max container py-5 pt-20 " id="product">
      <div className=" flex flex-col justify-center items-center gap-4 w-screen">

        <div className="">
          <nav className="cursor-pointers flex gap-2 justify-between items-center w-max h-12 rounded-3xl">
            <a
              href="#kaos"
              className={`${
                activeNav === "/kaos" ? "bg-slate-400" : "hover:bg-slate-400" 
              } ml-1 py-2 px-3 rounded-lg border-2 `}
              onClick={() => handleNavigation('kaos')}
            >
              Kaos
            </a>
            <a
              href="#hoodie"
              className={`${
                activeNav === "/hoodie" ? "bg-slate-400" : "hover:bg-slate-400"
              } py-2 px-3 rounded-lg border-2`}
              onClick={() => handleNavigation('hoodie')}
            >
              Hoodie
            </a>
            <a
              href="#topi"
              className={`${
                activeNav === "/topi" ? "bg-slate-400" : "hover:bg-slate-400"
              } py-2 px-3 rounded-lg border-2 hover:scale-110`}
              onClick={() => handleNavigation('topi')}
            >
              Topi
            </a>
            <a
              href="#other"
              className={`${
                activeNav === "/other" ? "bg-slate-400" : "hover:bg-slate-400"
              } mr-1 py-2 px-3 rounded-lg border-2`}
              onClick={() => handleNavigation('other')}
            >
              Others
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Product;
