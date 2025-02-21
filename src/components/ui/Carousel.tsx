import { useCallback, useEffect, useState } from "react";
import m1 from "../../assets/1.webp";
import m2 from "../../assets/2.webp";
import m3 from "../../assets/3.webp";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselData = [
    {
      img: m1,
      text: "Ride Into the Horizon",
      buttonText: <Link to={"/all-product"}>View All</Link>,
    },
    {
      img: m2,
      text: "Unleash the Biker in You",
      buttonText: <Link to={"/all-product"}>View All</Link>,
    },
    {
      img: m3,
      text: "Feel the Freedom on Two Wheels",
      buttonText: <Link to={"/all-product"}>View All</Link>,
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselData.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={nextSlider}
        className="absolute top-1/2 right-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <IoIosArrowForward />
      </button>

      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === idx ? "w-8" : "w-2"
            } h-2`}
          ></button>
        ))}
      </div>

      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {carouselData.map((slide, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-60 sm:h-96 md:h-[540px]"
          >
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={`Slide - ${idx + 1}`}
            />
            <div className="absolute top-1/3 left-5  md:left-16 text-white bg-black/50 p-4 rounded-lg">
              <h2 className="text-lg md:text-2xl py-4 font-bold">
                {slide.text}
              </h2>
              <button className="flex border font-medium transition-all duration-300 p-1 px-4 hover:bg-[#f7c788] hover:text-black rounded-md items-center cursor-pointer gap-2">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
