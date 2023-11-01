import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft
} from "react-icons/ai";
import { useState } from "react";
const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0);

const handleClick = (direction) => {
  if (direction === "left") {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  } else {
    setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  }
};
const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-photo/elegant-beautiful-woman-red-fashionable-suit-wide-hat_149155-1998.jpg?size=626&ext=jpg&ga=GA1.2.1711069012.1680718980&semt=sph",
    title: "JACKET FOR GIRL",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];



  return (
    <div className="relative w-screen h-screen overflow-hidden z-40">
      <div
        className="flex transition-transform duration-1500 ease"
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={`w-screen h-screen flex items-center bg-${item.bg}`}
            key={item.id}
          >
            <div className="flex-1 h-full w-screen">
              <img src={item.img} alt="Slider" className="h-4/5 mx-auto object-cover" />
            </div>
            <div className="flex-1 p-10">
              <h1 className="text-5xl font-bold mb-5">{item.title}</h1>
              <p className="text-xl font-semibold mb-10">{item.desc}</p>
              <button className="px-6 py-2 text-xl font-semibold border border-white rounded hover:bg-white hover:text-black">
                BELI SEKARANG
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 left-5 cursor-pointer opacity-50 hover:opacity-100"
        onClick={() => handleClick("left")}
      >
        <AiOutlineArrowLeft size={32} />
      </div>
      <div
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 right-5 cursor-pointer opacity-50 hover:opacity-100"
        onClick={() => handleClick("right")}
      >
        <AiOutlineArrowRight size={32} />
      </div>
    </div>
  );
};

export default Slider;
