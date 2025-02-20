import { useEffect, useState } from "react";

const Testimonial = () => {
  const array = [
    {
      name: "John Doe",
      designation: "Biker Enthusiast",
      testimonialDescription:
        "The Motor Hub's bike collection is absolutely top-notch! The quality, comfort, and speed are beyond expectations. I love how the bikes are engineered for smooth handling, whether it's for a weekend ride or an adventure. It's the perfect balance of style and performance.",
      keyWord: "bike",
    },
    {
      name: "Jane Doe",
      designation: "Motorcyclist",
      testimonialDescription:
        "I've been using Motor Hub for my bike needs, and I couldn't be happier. The design is sleek, and the engine performance is outstanding. It's not only powerful but also incredibly fuel-efficient. Highly recommend it to anyone looking for a great riding experience!",
      keyWord: "motorcycle",
    },
    {
      name: "Shiyam Sarker",
      designation: "Rider",
      testimonialDescription:
        "Motor Hub's bikes have taken my riding experience to the next level. The build quality is unmatched, and the bike's performance is exceptional on both city roads and highways. The comfort level on long rides is a game-changer.",
      keyWord: "rider",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="max-w-full min-w-[350px] mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
            >
              <path
                fill="black"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </svg>
          </button>
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              transform="rotate(180)"
            >
              <path
                fill="black"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 100 : 50)
            }%)`,
          }}
        >
          {array.map((each, idx) => (
            <div
              key={idx}
              className="p-4 min-w-full md:min-w-[50%] transition-transform"
            >
              <div className="h-full p-8 rounded-lg shadow-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                <div className="mb-4 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-6 h-6 text-white"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                </div>
                <p className="leading-relaxed mb-6 text-white text-lg font-semibold">
                  {each?.testimonialDescription}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{each.name}</span>
                  <span className="text-white text-sm">
                    {each?.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
