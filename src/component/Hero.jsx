// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import KAOS from './../assets/hero1.webp'
import KAOS2 from './../assets/hero2.webp'
import KAOS3 from './../assets/hero3.webp'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="pt-[52px] lg:pt-[43px] flex flex-col gap-5 justify-center items-center" id="home">
      <div className="h-3/4 w-screen ">
        <Swiper
          loop={true}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative text-yellow-300 flex justify-center items-center">
              <img
                className="object-cover h-[500px] w-screen"
                src={KAOS} alt="kaos polos" loading="lazy"
              />
              <p className="absolute flex justify-center items-center font-poppins font-semi-bold text-slate-700 text-4xl w-screen m-auto rounded-sm">
                COMING SOON..
              </p>
              <p className="absolute top-3 left-5 font-black font-poppins text-lg">EXOTIC </p>
              <p className="absolute top-16 right-9">RED WINE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative text-yellow-300 flex justify-center items-center">
              <img
                className="object-cover h-[500px] w-screen"
                src={KAOS2} alt="kaos polos" loading="lazy"
              />
              <p className="absolute flex justify-center items-center font-poppins font-semi-bold text-slate-700 text-4xl w-screen m-auto rounded-sm">
                COMING SOON..
              </p>
              <p className="absolute top-3 left-5 font-black font-poppins text-lg">EXOTIC </p>
              <p className="absolute top-16 right-9">YELLOW COOKIE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative text-yellow-300 flex justify-center items-center">
              <img
                className="object-cover h-[500px] w-screen"
                src={KAOS3} alt="kaos polos" loading="lazy"
              />
              <p className="absolute flex justify-center items-center font-poppins font-semi-bold text-slate-400 text-4xl w-screen m-auto rounded-sm">
                COMING SOON..
              </p>
              <p className="absolute top-3 left-5 font-black font-poppins text-lg">EXOTIC </p>
              <p className="absolute top-16 right-9">BLUE MOON</p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="flex justify-center flex-col md:flex-row md:w-screen gap-5 items-center m-auto">
        <div className="w-screen px-2 md:px-0 md:w-[280px] h-[180px] overflow-clip object-cover flex justify-center items-center ">
          <img
            className=" hover:scale-110 transition-all duration-500"
            src={KAOS} alt="kaos polos" loading="lazy"
          />
        </div>
        <div className="w-screen px-2 md:px-0 md:w-[280px] h-[180px] overflow-clip object-cover flex justify-center items-center">
          <img
            className=" hover:scale-110 transition-all duration-500"
            src={KAOS2} alt="kaos polos" loading="lazy"
          />
        </div>
        <div className="w-screen px-2 md:px-0 md:w-[280px] h-[180px] overflow-clip object-cover flex justify-center items-center">
          <img
            className=" hover:scale-110 transition-all duration-500"
            src={KAOS3} alt="kaos polos" loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
