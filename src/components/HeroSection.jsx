import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [truckDuration, setTruckDuration] = useState(4); // default 4s for desktop/tablet

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);

      // Adjust truck speed for mobile only
      if (window.innerWidth < 768) {
        setTruckDuration(2.5); // faster on mobile
      } else {
        setTruckDuration(4); // default speed for larger screens
      }
    };

    updateWidth(); // set initially
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/header_img.png')",
      }}
      id="home"
    >
      {/* Hero Content */}
      <div className="flex flex-1 items-center justify-center text-center px-6 md:px-12">
        <div className="relative z-10">
          {/* Company Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative inline-block overflow-hidden"
          >
            {/* Text Reveal Mask */}
            <motion.span
              initial={{ backgroundPosition: "100% 0" }}
              animate={{ backgroundPosition: "0% 0" }}
              transition={{
                delay: 1,
                duration: 1,
                ease: "linear",
              }}
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 50%, transparent 50%)",
                backgroundSize: "200% 100%",
              }}
            >
              Rise-N-Grind Trucking
            </motion.span>

            {/* Truck Icon */}
            <motion.div
              initial={{ x: -screenWidth * 0.2, opacity: 1 }}
              animate={{ x: screenWidth * 1.2, opacity: 0 }}
              transition={{
                duration: truckDuration, // dynamic duration
                ease: "linear",
              }}
              className="absolute top-1/2 -translate-y-1/2 text-white text-6xl sm:text-7xl"
            >
              <FaTruck />
            </motion.div>
          </motion.h1>

          {/* Tagline with vibration */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.02, 0.98, 1],
              x: [0, -2, 2, -1, 1, 0],
            }}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            Reliable Hauling, Preparation & Distribution Services
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="w-auto max-w-[200px] mx-auto sm:mx-0 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition">
              Book a Load
            </button>
            <button className="w-auto max-w-[200px] mx-auto sm:mx-0 border border-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
