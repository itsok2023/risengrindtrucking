import React from 'react';
import CareerForm from './CareerForm';

const Careers = () => {
  return (
    <div id="careers"
      className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat font-sans p-4 sm:p-8 bg-[url('/careers-mobile.png')] md:bg-[url('/careers.png')]"
    >
      {/* IMPROVED: Gradient overlay for better text readability and style */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full text-white">
        
        {/* Left Side: Main Text and Button */}
        <div className="flex flex-col justify-center items-start text-left p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wide [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
            {/* STEP 2: Change the main heading text here */}
            Careers
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-md font-medium">
             {/* STEP 3: Change the descriptive paragraph here */}
            Work for a family owned company who rewards our drivers with bonuses for logging more hours.
          </p>
          {/* IMPROVED: Button with icon and hover animation */}
          <a href="/apply"><button className="flex items-center gap-3 bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg group">
            {/* STEP 5: Change the button text here */}
            APPLY NOW
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button></a>
        </div>
        
        
      </div>
    </div>
  );
};

export default Careers;

