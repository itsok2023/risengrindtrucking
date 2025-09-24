import React from 'react';

// To use this component, make sure you have React and Tailwind CSS set up in your project.
// You can add Tailwind CSS to your project by following the instructions on their official website.
// The background image is set using an online placeholder.
//
// == HOW TO MAKE CHANGES ==
//
// 1. To change the BACKGROUND IMAGE:
//    - Find the `style` attribute on the main `div`.
//    - Replace the URL in `backgroundImage: 'url(...)'` with the path to your own image.
//    - For example: `backgroundImage: 'url("/path/to/your/image.jpg")'`
//
// 2. To change the MAIN HEADING text:
//    - Find the `<h1>` element and replace "LONGEVITY MATTERS" with your desired heading.
//
// 3. To change the PARAGRAPH text:
//    - Find the `<p>` element and replace the text inside it.
//
// 4. To change the LIST of benefits:
//    - Find the `<ul>` element.
//    - Edit the text inside each `<li>` element (e.g., "Vacation Pay", "Insurance Reimbursement").
//
// 5. To change the BUTTON text:
//    - Find the `<button>` element and change "APPLY NOW" to your preferred text.

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
            60 years strong and not going anywhere. Work for a family owned company who rewards our drivers with bonuses for logging more hours.
          </p>
          {/* IMPROVED: Button with icon and hover animation */}
          <button className="flex items-center gap-3 bg-red-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg group">
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
          </button>
        </div>
        
        {/* Right Side: Benefits List */}
        <div className="flex flex-col justify-center items-start md:items-end text-left md:text-right p-4">
            {/* IMPROVED: "Frosted glass" effect with backdrop blur */}
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                 <ul className="space-y-4 text-xl sm:text-2xl font-semibold">
                    {/* STEP 4: Change the list items (benefits) here */}
                    <li className="[text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">Vacation Pay</li>
                    <li className="[text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">Insurance Reimbursement</li>
                    <li className="[text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">Monthly Bonuses</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

