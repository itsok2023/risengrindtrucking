import { Info } from 'lucide-react';
import React from 'react';

const CompanyJourney = () => {
  const journeyData = [
    {
      year: "2021",
      title: "Contract Highlights",
      info: [
        "Contracted with Sunrock Industry for paving services, delivering quality results since 2021.",
      
      ],
    },
    {
      year: "2022",
      title: "Major Milestone",
      info: [
        "Launched our flagship product to the public. Expanded the team to 25+ employees.Reached our first 10,000 active users.",
       
      ],
    },
    {
      year: "2023",
      title: "Global Expansion",
      info: [
        "Opened first international office. Product localized for three new languages.User base grew to over 1 million globally.",
       
      ],
    },
    {
      year: "2024",
      title: "Contract Award",
      info: [
        "Awarded Wet Batch Hauling Contract at RDU Airport by Beaver Excavator for Summer 2024",
       
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white pt-8 pb-8 font-sans flex items-center">
      <div className="lg:container mx-auto px-10 sm:px-6 lg:px-8 py-16">
        <div className="text-center md:flex md:justify-center mb-20 w-full">
          <h1 className="text-3xl md:text-4xl font-sans font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white md:w-150">
            Company Journey Roadmap
          </h1>
          
        </div>
        
        {/* Main Content Area */}
        <div className="mt-12">
        
          {/* == DESKTOP ROADMAP == */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* The horizontal connecting line */}
              <div className="absolute top-5 left-0 w-full h-1 bg-gray-700" aria-hidden="true"></div>
              
              <div className="relative flex justify-between">
                {journeyData.map((item, index) => (
                  <div key={index} className="relative flex-1 text-center px-4">
                    {/* Year Circle on the line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-15 h-15 bg-gray-900 border-4 border-white rounded-full flex items-center justify-center z-10">
                      <span className="font-bold text-white text-sm">{item.year}</span>
                    </div>
                    
                    {/* Content Card below the line */}
                    <div className="mt-20 bg-gray-800 rounded-lg p-4 text-left shadow-xl border border-gray-700 min-h-[190px]">
                      <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                      <ul className="text-sm text-gray-400 text-justify space-y-1">
                        {item.info.map((info, i) => <li key={i}>{info}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* == MOBILE TIMELINE == */}
          <div className="lg:hidden relative">
            {/* The vertical line */}
            <div className="absolute top-0 left-4 w-1 h-full bg-gray-700" aria-hidden="true"></div>

            {journeyData.map((item, index) => (
              <div key={index} className="relative pl-16 pb-12">
                {/* Year Circle */}
                <div className="absolute top-0 left-4 -translate-x-1/2 w-12 h-12 bg-gray-900 border-4 border-white rounded-full flex items-center justify-center z-10">
                  <span className="font-bold text-white">{item.year}</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-700">
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <ul className="text-sm text-gray-400 text-justify  space-y-1">
                    {item.info.map((info, i) => <li key={i}>{info}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJourney;

