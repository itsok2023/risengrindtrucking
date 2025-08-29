import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeComparison, setActiveComparison] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Image data - replace with your actual image paths
  const comparisons = [
    {
      before: '/before1.jpg',
      after: '/after1.jpg',
      title: ''
    },
    {
      before: '/before2.jpg',
      after: '/after2.jpg',
      title: ''
    },
    {
      before: '/before3.jpg',
      after: '/after3.jpg',
      title: ''
    },
    {
      before: '/before4.jpg',
      after: '/after4.jpg',
      title: ''
    },
    
  ];

  const handleSliderMove = (e) => {
    if (!isDragging.current) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const startDragging = () => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleSliderMove);
    document.addEventListener('touchmove', handleSliderMove);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
  };

  const stopDragging = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleSliderMove);
    document.removeEventListener('touchmove', handleSliderMove);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('touchend', stopDragging);
  };

  const goToNext = () => {
    setActiveComparison((prev) => 
      prev === comparisons.length - 1 ? 0 : prev + 1
    );
    setSliderPosition(50);
  };

  const goToPrev = () => {
    setActiveComparison((prev) => 
      prev === 0 ? comparisons.length - 1 : prev - 1
    );
    setSliderPosition(50);
  };

  useEffect(() => {
    return () => {
      // Clean up event listeners on unmount
      document.removeEventListener('mousemove', handleSliderMove);
      document.removeEventListener('touchmove', handleSliderMove);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Before & After
        </h2>
        
        {/* Mobile & Tablet: Carousel with arrows */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous comparison"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next comparison"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Comparison Slider */}
            <div className="relative overflow-hidden rounded-xl shadow-lg mx-10">
              <div 
                ref={containerRef}
                className="relative h-80 w-full overflow-hidden"
                onMouseDown={startDragging}
                onTouchStart={startDragging}
              >
                <div className="absolute inset-0">
                  <img 
                    src={comparisons[activeComparison].after} 
                    alt="After" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div 
                  className="absolute top-0 left-0 bottom-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={comparisons[activeComparison].before} 
                    alt="Before" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {comparisons[activeComparison].title}
            </h3>
            
            <div className="flex justify-center space-x-4 mt-4">
              <span className="text-sm font-medium text-gray-600">Before</span>
              <span className="text-sm font-medium text-gray-600">After</span>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${activeComparison === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => {
                    setActiveComparison(index);
                    setSliderPosition(50);
                  }}
                  aria-label={`View comparison ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="text-sm text-gray-500 mt-2">
              {activeComparison + 1} of {comparisons.length}
            </div>
          </div>
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {comparisons.map((comparison, index) => (
            <DesktopComparisonItem 
              key={index} 
              before={comparison.before} 
              after={comparison.after} 
              title={comparison.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Desktop comparison component
const DesktopComparisonItem = ({ before, after, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleSliderMove = (e) => {
    if (!isDragging.current) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const startDragging = (e) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener('mousemove', handleSliderMove);
    document.addEventListener('mouseup', stopDragging);
  };

  const stopDragging = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleSliderMove);
    document.removeEventListener('mouseup', stopDragging);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleSliderMove);
      document.removeEventListener('mouseup', stopDragging);
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden rounded-t-xl">
        <div 
          ref={containerRef}
          className="relative h-full w-full overflow-hidden"
          onMouseDown={startDragging}
        >
          <div className="absolute inset-0">
            <img 
              src={after} 
              alt="After" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="absolute top-0 left-0 bottom-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={before} 
              alt="Before" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          {title}
        </h3>
        
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium text-gray-600">Before</span>
          <span className="text-sm font-medium text-gray-600">After</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;