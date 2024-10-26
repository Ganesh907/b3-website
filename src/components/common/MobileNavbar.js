// MobileNavbar.js
'use client';

import React from 'react';
import { Link } from 'react-router-dom';
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

const MobileNavbar = ({ isOpen, toggleNavbar, toggleTechDropdown, toggleRecruitmentDropdown, techDropdownOpen, recruitmentDropdownOpen }) => {
  
  const { theme, toggleTheme } = useTheme(); 

  return (
    isOpen && (
      <div className="md:hidden">
        <div className="px-4 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg space-y-1">
          {/* Technology Link with Dropdown */}
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
                    onClick={toggleNavbar} // Close navbar on link click
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Recruitment Link with Dropdown */}
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
                    onClick={toggleNavbar} // Close navbar on link click
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Additional Links */}
          <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200" onClick={toggleNavbar}>
            About B3
          </Link>
          <Link to="/clients" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200" onClick={toggleNavbar}>
            Clients
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 rounded-lg transition duration-200" onClick={toggleNavbar}>
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
      </div>
    )
  );
};

export default MobileNavbar;
