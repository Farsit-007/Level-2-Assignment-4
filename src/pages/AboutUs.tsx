import { useNavigate } from "react-router-dom";
// import a1 from "./a1."
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-cover bg-center text-white py-12 p-8"
        style={{
          backgroundImage: "url('./about.jpg')",
        }}
      >
        <h3 className="text-left font-bold text-2xl sm:text-5xl md:text-6xl">
          SpeedGear Hub - The Heartbeat of <br />
          Two-Wheelers in Bangladesh
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-12 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-6">About SpeedGear Hub</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            At SpeedGear Hub, we are more than just a motorcycle manufacturer;
            we are a symbol of Bangladesh's rich heritage of innovation and
            engineering excellence. Our bikes are designed not just for the
            road, but for adventure. From high-performance sports bikes to
            efficient commuter vehicles, we cater to every rider's needs. With
            cutting-edge technology, stylish designs, and sustainability at the
            core of everything we do, SpeedGear Hub leads the way in providing a
            seamless and exhilarating riding experience.
          </p>
          <p className="text-lg leading-relaxed mt-6 text-gray-700">
            With an unwavering commitment to quality, our products go through
            rigorous testing to ensure top-notch performance. We aim to make
            every ride memorable, offering a seamless blend of power, comfort,
            and style that is unmatched in the industry. As a proud part of
            Bangladesh's two-wheeler revolution, we continue to innovate and
            lead the way with a focus on the future of mobility.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./a1.jpg"
            alt="SpeedGear Hub Bikes"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Our Vision & Mission Section */}
      <div className="grid lg:grid-cols-2 gap-10 mt-12 px-4 sm:px-8 lg:px-16">
        <div className="flex justify-center items-center">
          <img
            src="./a2.jpeg"
            alt="Our Vision and Mission"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our vision is to be the most trusted and innovative two-wheeler
            brand in Bangladesh, providing quality bikes that combine
            performance with design and sustainability. Our mission is to make
            every rider feel the thrill of the open road, empowering them with
            the freedom to explore new horizons.
          </p>
          <p className="text-lg leading-relaxed mt-6 text-gray-700">
            We strive to lead the way in creating sustainable, cutting-edge
            bikes that contribute to a cleaner, greener planet. At SpeedGear
            Cycles, our goal is not just to manufacture vehicles but to build
            lifelong relationships with our riders. Our innovation, commitment,
            and drive fuel our journey as we transform the way people experience
            two-wheelers in Bangladesh.
          </p>
        </div>
      </div>

      <div className="my-12 bg-gradient-to-r from-[#f7c788] via-gray-600 to-black py-16 text-white text-center">
        <h2 className="text-4xl font-bold">
          Join the SpeedGear Hub Family Today!
        </h2>
        <p className="text-xl mt-4">
          Discover your perfect ride with SpeedGear Hub. Ride with confidence,
          ride with us.
        </p>
        <button
          onClick={() => navigate("/all-product")}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all"
        >
          Explore Our Bikes
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
