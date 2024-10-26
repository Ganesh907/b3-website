'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/B3logo.png'
import MobileNavbar from './MobileNavbar';
import { useTheme } from './ThemeProvider';

const techItems = [
  { title: 'Home', path: '/technology' },
  { title: 'Services', path: '/technology-services' },
  { title: 'Career', path: '/careers' },
];

const recruitmentItems = [
  { title: 'Home', path: '/recruitment' },
  { title: 'Services', path: '/recruitment-services' },
  { title: 'Career', path: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname.split('/')[1]);
  }, [location.pathname]);

  const handleMouseMove = (event) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  // Helper function to determine if a path is active
  const isActive = (path) => location.pathname === path;
  const [beamVisible, setBeamVisible] = useState(true);

  // const [isOpen, setIsOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [recruitmentDropdownOpen, setRecruitmentDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setTechDropdownOpen(false);
    setRecruitmentDropdownOpen(false);
  };

  const toggleTechDropdown = () => {
    setTechDropdownOpen(!techDropdownOpen);
  };

  const toggleRecruitmentDropdown = () => {
    setRecruitmentDropdownOpen(!recruitmentDropdownOpen);
  };

  useEffect(() => {
    // Disable scroll when the navbar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isOpen]);
  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setBeamVisible(true)} 
      onMouseLeave={() => setBeamVisible(false)} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
         ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent dark:bg-[rgba(0,0,0,0.5)]'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
            
            <span
      className={`text-xl font-semibold text-${!scrolled && theme === 'dark' ? 'white' : 
        scrolled && theme === 'dark' ? 'white' : 
        !scrolled && theme !== 'dark' ? 'white' : 
        'black'}`}
    >
      BitByBit Solutions
    </span>
            
            {/* <span className="text-xl font-bold text-gray-900 dark:text-white">BitByBit Solutions</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            


          <div className='absolute p-1 flex gap-x-5 left-1/2 transform -translate-x-1/2'>




            
            <div className="relative group gap-x-10">
            <div className="relative">
  {/* Border div */}
  <div
    className={`absolute inset-0 transition-all duration-300 ease-in-out
      ${activeTab === 'technology' || activeTab === 'technology-services' || activeTab === 'careers' ? 'opacity-100 border-0' : 'opacity-100 border-2 border-blue-500'}
    `}
    style={{
      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
      height: '120%',
      top: '-10%',
      pointerEvents: 'none', // Prevents this div from interfering with button hover
    }}
  />
  {/* Background div */}
  <div
    className={`absolute inset-0 transition-all duration-300 ease-in-out
      ${activeTab === 'technology' || activeTab === 'technology-services' || activeTab === 'careers' ? 'opacity-100' : 'opacity-0'}
      hover:opacity-100
    `}
    style={{
      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
      height: '120%',
      top: '-10%',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // From blue-500 to purple-500
    }}
  />
  <button
    // onMouseEnter={() => setActiveTab('technology')}
    className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200 darktext-white text-black`}
  >
    Technology
  </button>
</div>






              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {techItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(item.path) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>














            <div className="relative group">
            <div className="relative">
  {/* Border div */}
  <div
    className={`absolute inset-0 transition-all duration-300 ease-in-out
      ${activeTab === 'recruitment' || activeTab === 'recruitment-services' || activeTab === 'careers' ? 'opacity-100 border-0' : 'opacity-100 border-2 border-green-500'}
    `}
    style={{
      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
      height: '120%',
      top: '-10%',
      pointerEvents: 'none', // Prevents this div from interfering with button hover
    }}
  />
  {/* Background div */}
  <div
    className={`absolute inset-0 transition-all duration-300 ease-in-out
      ${activeTab === 'recruitment' || activeTab === 'recruitment-services' || activeTab === 'careers' ? 'opacity-100' : 'opacity-0'}
      hover:opacity-100
    `}
    style={{
      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
      height: '120%',
      top: '-10%',
      background: 'linear-gradient(to right, #22c55e, #facc15)', // From green-500 to yellow-500
    }}
  />
  <button
    // onMouseEnter={() => setActiveTab('recruitment')}
    className={`relative px-3 py-2 text-lg font-medium transition-colors duration-200 text-white`}
  >
    Recruitment
  </button>
</div>



              
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {recruitmentItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(item.path) ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            </div>



            <Link to="/aboutB3" className={`text-lg font-medium transition-colors duration-200 ${isActive('/aboutB3') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              About B3
            </Link>
            <Link to="/clients" className={`text-lg font-medium transition-colors duration-200 ${isActive('/clients') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Clients
            </Link>
            <Link to="/contact" className={`text-lg font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Contact
            </Link>
            <button
                onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              {theme==='dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        
        </div>
      </div>

      
{/* 
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/technology" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700">Technology</Link>
            <Link to="/recruitment" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700">Recruitment</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700">About B3</Link>
            <Link to="/clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700">Clients</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700">Contact</Link>
          </div>
        </div>
      )} */}


{/* {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg space-y-1">
         
            <div className="relative">
              <button
                onClick={toggleTechDropdown}
                className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200"
              >
                Technology
                <svg className={`w-5 h-5 transition-transform duration-200 ${techDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {techDropdownOpen && (
                <div className="mt-1 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 transition-all duration-200">
                  {techItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleRecruitmentDropdown}
                className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-gray-700 rounded-lg transition duration-200"
              >
                Recruitment
                <svg className={`w-5 h-5 transition-transform duration-200 ${recruitmentDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {recruitmentDropdownOpen && (
                <div className="mt-1 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 transition-all duration-200">
                  {recruitmentItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200">About B3</Link>
            <Link to="/clients" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200">Clients</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200">Contact</Link>
          </div>
        </div>
      )} */}
    

    <MobileNavbar
  isOpen={isOpen}
  toggleNavbar={toggleNavbar} // Pass toggleNavbar here
  toggleTechDropdown={toggleTechDropdown}
  toggleRecruitmentDropdown={toggleRecruitmentDropdown}
  techDropdownOpen={techDropdownOpen}
  recruitmentDropdownOpen={recruitmentDropdownOpen}
/>

      
      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{
            left: `${mousePosition.x}px`,
            transition: 'left 0.1s ease-out',
          }}
        />
      </div>
        {/* Lightning travel beam */}
      {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"> */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 dark:bg-gray-900">
        <div
          className="absolute top-0 left-0 h-full bg-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            width: `${scrollProgress}%`,
            transition: 'width 0.2s ease-out',
          }}
        />
      </div>
  {/* Tracing beam */}
  {beamVisible && ( // Only render if beamVisible is true
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-24 -ml-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{
              left: `${mousePosition.x}px`,
              transition: 'left 0.1s ease-out',
            }}
          />
        </div>
  )}

    </nav>
  );
}
