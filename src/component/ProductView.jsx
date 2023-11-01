/* eslint-disable no-unused-vars */
import { useState } from "react";
// import CarList from "../components/CarList";
// import Footer from "../components/Footer";
// import Home from "../components/Home";
// import MotorList from "../components/MotorList";
// import Others from "../components/Others";
import Product from "./Product";
import Kaos from "./Kaos";
import Hoodie from "./Hoodie";
import Topi from "./Topi";
import Others from "./Others";


const ProductView = () => {

  const [currentSection, setCurrentSection] = useState('kaos');

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="">
      <div className="">
        <Product className='' handleNavigation={handleNavigation} currentSection={currentSection}/>
        <div className="overflow-hidden h-full w-11/12 m-auto px-4 sm:px-8 lg:px-[130px]" >
          {currentSection === 'kaos' && <Kaos  />}
          {currentSection === 'hoodie' && <Hoodie />}
          {currentSection === 'topi' && <Topi />}
          {currentSection === 'other' && <Others  />}
          
        
        </div>
         
        
      </div>
    </div>
  );
};

export default ProductView;



