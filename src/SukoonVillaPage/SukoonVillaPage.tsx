import React, { useEffect, useState } from 'react';

const SukoonVillaPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showDetailView, setShowDetailView] = useState(false);

  useEffect(() => {
    // Override body styles for fullscreen experience
    const originalBodyStyle = document.body.style.cssText;
    document.body.style.display = 'block';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.overflow = showDetailView ? 'hidden' : 'auto'; // Disable scroll in detail view
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Scroll animation observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    // Scroll progress handler
    const handleScroll = () => {
      if (!showDetailView) {
        const secondSection = document.getElementById('second-section');
        if (secondSection) {
          const rect = secondSection.getBoundingClientRect();
          const sectionHeight = secondSection.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section has been scrolled through
          const scrolled = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + sectionHeight * 0.5)));
          setScrollProgress(scrolled);
        }
      }
    };

    const secondSection = document.getElementById('second-section');
    if (secondSection) {
      observer.observe(secondSection);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Restore original body styles when component unmounts
      document.body.style.cssText = originalBodyStyle;
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showDetailView]);

  const handleImageClick = () => {
    setShowDetailView(true);
  };

  const handleBackClick = () => {
    setShowDetailView(false);
  };

  return (
    <div className="w-full">
      {/* Detail View Overlay */}
      {showDetailView && (
        <div 
          className="fixed inset-0 z-50 animate-zoomIn"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'top left',
            animation: 'zoomInFromCorner 0.8s ease-out forwards'
          }}
        >
          <div 
            className={`relative w-full h-full flex flex-col transition-all duration-1200 ease-out delay-200 ${
              showDetailView 
                ? 'translate-x-0 translate-y-0 scale-100' 
                : 'translate-x-8 translate-y-8 scale-95'
            }`}
          >
            {/* Background Image - 3/4 of screen on desktop, 2/3 on mobile */}
            <div 
              className={`relative h-2/3 md:h-3/4 w-full transition-all duration-1000 ease-out delay-300 ${
                showDetailView 
                  ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                  : 'translate-x-12 translate-y-12 opacity-0 scale-90'
              }`}
            >
              <img 
                src="/s1.jpg"
                alt="Sukoon Villa Detail"
                className="w-full h-full object-cover transition-transform duration-1200 ease-out"
                style={{
                  borderBottomLeftRadius: '150px'
                }}
              />
              
              {/* Header */}
              <div 
                className={`absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-20 transition-all duration-800 ease-out delay-500 ${
                  showDetailView 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0'
                }`}
              >
                <button 
                  onClick={handleBackClick}
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-bold tracking-wider text-white">SUKOON</h1>
                <div className="w-6"></div> {/* Spacer for center alignment */}
              </div>
            </div>

            {/* Bottom Content Section - 1/3 on mobile, 1/4 on desktop */}
            <div 
              className={`h-1/3 md:h-1/4 w-full transition-all duration-1000 ease-out delay-400 ${
                showDetailView 
                  ? 'translate-x-0 translate-y-0 opacity-100' 
                  : 'translate-x-12 translate-y-12 opacity-0'
              }`}
            >
              {/* Main content area */}
              <div className="bg-transparent h-full">
                <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-8 h-full pb-8 md:pb-8">
                  {/* Left Side - Title */}
                  <div 
                    className={`mb-4 md:mb-0 md:mr-8 md:pr-8 transition-all duration-800 ease-out delay-600 ${
                      showDetailView 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-6 opacity-0'
                    }`}
                  >
                    <h2 className="text-xl md:text-3xl font-light text-gray-800 leading-tight">
                      A Sanctuary For<br />
                      The Soul
                    </h2>
                  </div>

                  {/* Vertical divider line */}
                  <div 
                    className={`hidden md:block w-px h-24 bg-gray-300 mr-8 transition-all duration-600 ease-out delay-700 ${
                      showDetailView 
                        ? 'scale-y-100 opacity-100' 
                        : 'scale-y-0 opacity-0'
                    }`}
                  ></div>

                  {/* Right Side - Description and Buttons */}
                  <div 
                    className={`flex-1 max-w-md transition-all duration-800 ease-out delay-800 ${
                      showDetailView 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-6 opacity-0'
                    }`}
                  >
                    <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
                      Nestled in the Kumaon hills, Sukoon Villa is a retreat, a portal to peace, creativity, nature, and quiet
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                      <button 
                        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-all shadow-lg hover:scale-110 duration-200 ease-out delay-900 ${
                          showDetailView 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-4 opacity-0 scale-75'
                        }`}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                      <button 
                        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-all shadow-lg hover:scale-110 duration-200 ease-out delay-1000 ${
                          showDetailView 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-4 opacity-0 scale-75'
                        }`}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* First Section - Hero */}
      <div className="fixed inset-0 w-screen h-screen">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Green Hills Landscape"
          className="w-full h-full object-cover lg:object-center xl:object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            minWidth: '100vw'
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Header */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 text-center text-white px-4 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">SUKOON</h1>
          <p className="text-xs sm:text-sm tracking-widest mt-1">CHITTAVILLAGE ALMORA</p>
        </div>
        
        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="text-center text-white max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide leading-tight">
              A PRIVATE ESCAPE
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic mt-2 tracking-wide">
              <em>in</em> NATURE'S LUXURY.
            </h3>
          </div>
        </div>
        
        {/* Hosted By section */}
        <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-1/2 transform -translate-x-1/2 text-center text-white px-4 z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                <img src={`${process.env.PUBLIC_URL}/Rectangle 21.png`} alt="Pravin Shah" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                <img src={`${process.env.PUBLIC_URL}/Rectangle 23.png`} alt="Shweta Shah" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm opacity-80">Hosted By</p>
              <p className="text-sm sm:text-base font-medium">Pravin & Shweta Shah</p>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 px-4 z-10">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all text-sm sm:text-base min-w-[140px] sm:min-w-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>BOOK NOW</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all text-sm sm:text-base min-w-[140px] sm:min-w-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>CONTACT</span>
            </button>
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white text-xs sm:text-sm opacity-70 z-10">
          <p>27 🌙 mist</p>
        </div>
      </div>

      {/* Second Section */}
      <div id="second-section" className="relative w-screen h-screen min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 mt-[100vh]">
        {/* Header with hamburger menu */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-20">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-bold tracking-wider text-white">SUKOON</h1>
          <div className="w-6"></div> {/* Spacer for center alignment */}
        </div>

        {/* Vertical line */}
        <div className="absolute left-1/2 top-16 w-px h-32 bg-white transform -translate-x-1/2"></div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center h-full px-4 text-center relative">
          {/* Text content with fade animation */}
          <div 
            className="mb-16 pt-32 transition-opacity duration-700 ease-out"
            style={{ 
              opacity: Math.max(0, 1 - scrollProgress * 2),
              transform: `translateY(${scrollProgress * -50}px)`
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              STEP INTO SUKOON,
          </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
              A HAVEN <em className="italic">in</em> THE HIMALAYAS
            </h3>
          </div>

          {/* Animated image container */}
          <div 
            className="relative transition-all duration-700 ease-out cursor-pointer"
            style={{
              transform: `translateY(${isVisible ? (scrollProgress * -200) : 20}px)`,
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? (0.95 + scrollProgress * 0.15) : 0.95,
            }}
            onClick={handleImageClick}
          >
            <div className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img 
                src="/s1.jpg"
                alt="Sukoon Villa at Night"
                className="w-80 sm:w-96 md:w-[500px] lg:w-[600px] h-56 sm:h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div 
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-24 transition-all duration-700 ease-out"
            style={{
              opacity: Math.max(0.3, 1 - scrollProgress * 0.5),
              transform: `translateY(${scrollProgress * 30}px)`
            }}
          >
            <button className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>BOOK NOW</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>CONTACT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SukoonVillaPage;
