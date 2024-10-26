//   import { useState, useEffect } from 'react';
//   import { Link } from 'react-router-dom';
//   import Logo from '../../assets/images/B3logo.png';

//   const techItems = [
//     { title: 'Home', path: '/technology' },
//     { title: 'Services', path: '/technology-services' },
//   ];

//   const recruitmentItems = [
//     { title: 'Home', path: '/recruitment' },
//     { title: 'Services', path: '/recruitment-services' },
//   ];
  

//   export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [active, setActive] = useState('Technology'); // Default active item

//     useEffect(() => {
//       const handleScroll = () => {
//         setScrolled(window.scrollY > 20);
//       };
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleDarkMode = () => {
//       setIsDarkMode(!isDarkMode);
//       document.documentElement.classList.toggle('dark');
//     };

//     return (
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
//         <div className="container mx-auto px-1">
//           <div className="relative flex items-center justify-between h-16">
//             <Link to="/" className="flex items-center">
//               <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
//               <span className="text-lg font-bold text-blue-600 dark:text-blue-400">BitByBit Solutions</span>
//             </Link>

//             {/* <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 border-2  border-black shadow-lg justify-between bg-gray-200 rounded-full overflow-hidden w-80 cursor-pointer">
  
//               <DropdownNavItem title="Technology" items={techItems} active={active === "Technology"} onHover={() => setActive("Technology")} />
//               <DropdownNavItem title="Recruitment" items={recruitmentItems} active={active === "Recruitment"} onHover={() => setActive("Recruitment")} />
//             </div> */}

//             <div className="hidden md:flex  border-2  border-black shadow-lg justify-around p-2 rounded-full overflow-hidden w-80 cursor-pointer">
  
//   <DropdownNavItem title="Technology" items={techItems}  />
//   <DropdownNavItem title="Recruitment" items={recruitmentItems} />
// </div>


//             <div className="hidden md:flex items-center space-x-4 ">
//               <NavLink href="/aboutB3">About B3</NavLink>
//               <NavLink href="/clients">Clients</NavLink>
//               <NavLink href="/contact">Contact</NavLink>
//               <NavLink href="/contact">Blogs</NavLink>
//               <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//             </div>

//             <div className="md:hidden">
//               <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="Toggle menu">
//                 <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
//                   {isOpen ? (
//                     <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414-1.414l4.829 4.828 4.828 4.828z" />
//                   ) : (
//                     <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <MobileNavLink href="/aboutB3">About B3</MobileNavLink>
//               <MobileDropdownNavItem title="Technology" items={techItems} />
//               <MobileDropdownNavItem title="Recruitment" items={recruitmentItems} />
//               <MobileNavLink href="/clients">Clients</MobileNavLink>
//               <MobileNavLink href="/contact">Contact</MobileNavLink>
//             </div>
//             <div className="px-4 py-3">
//               <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//             </div>
//           </div>
//         )}
//       </nav>
//     );
//   }

//   function NavLink({ href, children }) {
//     return (
//       <Link to={href} className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
//         {children}
//       </Link>
//     );
//   }

//   // const DropdownNavItem = ({ title, items, onHover, active }) => {
//   //   const [dropdownVisible, setDropdownVisible] = useState(false);

//   //   return (
//   //     <div
//   //       className={`relative flex-1 py-2 text-center transition-colors duration-300 ${active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"} hover:bg-blue-400 hover:text-white`}
//   //       onMouseEnter={() => { setDropdownVisible(true); onHover(); }}
//   //       onMouseLeave={() => setDropdownVisible(false)}
//   //     >
//   //       {title}
//   //       <svg className="ml-1 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//   //       </svg>

//   //       {dropdownVisible && (
//   //         <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200">
//   //           {items.map((item) => (
//   //             <Link
//   //               key={item.path}
//   //               to={item.path}
//   //               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//   //             >
//   //               {item.title}
//   //             </Link>
//   //           ))}
//   //         </div>
//   //       )}
//   //     </div>
//   //   );
//   // };


//   function DropdownNavItem({ title, items }) {
//     return (
//       <div className="relative group">
//         <button
//           className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none"
//         >
//           {title}
//           <svg className="ml-1 h-4 w-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//         <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//           {items.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   function MobileNavLink({ href, children }) {
//     return (
//       <Link
//         href={href}
//         className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
//       >
//         {children}
//       </Link>
//     )
//   }

//   function MobileDropdownNavItem({ title, items }) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <div className="relative group">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
//         >
//           {title}
//           <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//         <div className={`md:absolute md:left-0 md:mt-2 md:w-48 md:rounded-md md:shadow-lg md:py-1 md:bg-white md:dark:bg-gray-800 md:ring-1 md:ring-black md:ring-opacity-5 md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isOpen ? 'block' : 'hidden'} md:block`}>
//           {items.map((item) => (
//             <Link
//               key={item.path}
//               href={item.path}
//               className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   function ThemeToggle({ isDarkMode, toggleDarkMode }) {
//     return (
//       <button
//         onClick={toggleDarkMode}
//         className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         aria-label="Toggle dark mode"
//       >
//         {isDarkMode ? (
//           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         ) : (
//           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//           </svg>
//         )}
//       </button>
//     )
//   }






























import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close"; 
import Logo from '../../assets/images/B3logo.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";
import { useTheme } from './ThemeProvider';
import { Scale } from "@mui/icons-material";

const techitems = [
  { title: "Home", path: "/technology" },
  { title: "Services", path: "/technology-services" },
  // Add more items as needed
];

const recruitmentitems = [
  { title: "Home", path: "/recruitment" },
  { title: "Services", path: "/recruitment-services" },
  // Add more items as needed
];

function Dropdown({ items, scrolled }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


//   <ul
//   onClick={handleClick}
//   className={`${
//     click ? "hidden" : `absolute w-[140px] list-none border-t-[1px] border-[#0060b5] lg:border-b-2 rounded-b-lg lg:border-white lg:border-t-0 lg:p-2 text-start shadow-lg transition-opacity duration-300 ${scrolled ? "bg-opacity-100 lg:border-b-[2px] rounded-lg bg-blue-200" : "bg-opacity-20"}`
//   }`}
// >
//   {items.map((item, index) => (
//     <li key={index} className="relative text-center bg-gray-700 lg:m-1 border-2 border-transparent hover:border-black dark:hover:border-white rounded-lg overflow-hidden">
//       <Link className="block text-white text-sm w-full h-full pl-2 p-3 no-underline" to={item.path} onClick={() => setClick(false)}>
//         {item.title}
//       </Link>
//     </li>
//   ))}
// </ul>

  return (
    <ul
      onClick={handleClick}
      className={`${
        click ? "hidden" : 
        `absolute w-full dark:bg-black  bg-white list-none border-t-[1px] lg:border-b-[1px] rounded-b-lg lg:border-t-0 lg:p-2 text-start shadow-lg transition-opacity duration-300 
        ${scrolled ? "bg-opacity-100 dark:border-b-2 border-b-[3px] rounded-lg  border-[#0060b5]  dark:border-white " : "dark:bg-opacity-20 bg-opacity-20"}`


      }`}
    >


      {items.map((item, index) => (
        <li key={index} className="relative text-center dark:bg-opacity-20 lg:m-1 border-2 border-transparent hover:border-black dark:hover:border-white rounded-lg overflow-hidden">
          <Link className="block text-black dark:text-white text-sm w-full h-full  p-2 no-underline" to={item.path} onClick={() => setClick(false)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();



  
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleDropdown1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(!dropdown1);
    }
  };

  const toggleDropdown2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(!dropdown2);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth >= 960) {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => setDropdown1(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth >= 960) {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => setDropdown2(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.05;

      if (currentScrollY > lastScrollY && currentScrollY > triggerHeight) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up or near the top, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

//   <nav
//   className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all px-5 duration-300 w-[100vw] flex justify-between items-center h-[65px] ${
//     scrolled ? "bg-blue-200 shadow-lg border-b-2  text-black font-semibold" : "bg-transparent border-b-[1px] border-transparent text-white"
//   } ${showNavbar ? "top-0" : "-top-[65px]"}`} // Adjust the negative top value to match navbar height
//   style={{ zIndex: 100 }}
// >

useEffect(() => {
  console.log("Current theme:", theme); // Check the current theme in the console
}, [theme]);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all px-5 duration-300 w-[100vw] flex justify-between items-center h-[65px]
         ${
        scrolled ? "dark:bg-black font-semibold dark:font-normal bg-white text-black dark:text-white  shadow-lg border-b-2 dark:border-b-[1px] border-[#0060b5] dark:border-white" : "bg-transparent border-b-[1px] border-transparent"
      } ${showNavbar ? "top-0" : "-top-[65px]"}`} // Navbar hidden when scrolled down
      style={{ zIndex: 100 }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center text-white  font-bold text-2xl md:text-lg xl:text-2xl"
        onClick={closeMobileMenu}
        style={{
          color: theme === 'dark' ? 'white' : '#0060b5',
        }}
      >
        <img src={Logo} alt="logo" className="w-10 h-10" />
        &nbsp;BitByBit Solutions
      </NavLink>

      {/* Menu icon for mobile on the right side */}
      <div className="block lg:hidden ml-auto" onClick={handleClick}>
        {click ? <CloseIcon className="text-white text-3xl cursor-pointer" /> : <MenuIcon className="text-white text-3xl cursor-pointer" />}
      </div>

      {/* Navbar Links */}
      <ul
        className={`${
          click
            ? "flex flex-col items-center w-full h-screen fixed z-50 top-16 left-0 justify-start bg-black py-32 space-y-8"
            : "hidden lg:flex items-center"
        } transition-all duration-500`}
      >
        <li>
          <NavLink
            to="/aboutB3"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            About B3
          </NavLink>
        </li>

        {/* Technology Dropdown */}
        <li
          className="relative cursor-pointer mb-20 md:mb-0"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          onClick={toggleDropdown1}
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/technology" || location.pathname === "/technology-services"
                  ? "nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg  dark:border-[#0060b5] border-black text-white font-semibold bg-[#0060b5] dark:bg-transparent "
                : ""
            }`}
          >
            Technology
            <ArrowDropDownIcon 
              className={`transform ${dropdown1 ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`} 
            />
          </span>
          {dropdown1 && <Dropdown items={techitems} scrolled={scrolled} />}
        </li>

        {/* Recruitment Dropdown */}
        <li
          className="relative cursor-pointer py-5"
          style={{
            marginTop: dropdown1 && window.innerWidth < 1024 ? "90px" : "0px",
            transition: "margin-top 0.5s ease",
          }}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}
          onClick={toggleDropdown2}
        >
          <span
            className={`px-3 mx-1 py-1 text-lg flex items-center ${
              location.pathname === "/recruitment" || location.pathname === "/recruitment-services"
                ? "nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg  dark:border-[#0060b5] border-black text-white font-semibold bg-[#0060b5] dark:bg-transparent "
                : ""
            }`}
          >
            Recruitment
            <ArrowDropDownIcon 
              className={`transform ${dropdown2 ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`} 
            />
          </span>
          {dropdown2 && <Dropdown items={recruitmentitems} scrolled={scrolled} />}
        </li>

        <li
          style={{
            marginTop: dropdown2 && window.innerWidth < 1024 ? "90px" : "0px",
            transition: "margin-top 0.5s ease",
          }}
        >
          <NavLink
            to="/clients"
            className={({ isActive }) =>
               `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Clients
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Careers
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-links px-3 mx-1 py-1 border-2  hover:border-black dark:hover:border-white rounded-md text-lg ${
                isActive ? "dark:border-[#0060b5] border-black text-white rounded-md font-semibold bg-[#0060b5] dark:bg-transparent  " : "border-transparent"
              }`
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-white px-3 mx-1 py-1 italic text-xl font-semibold border-b-2 hover:border-black dark:hover:border-white hover:text-[#0060b5] hover:bg-transparent border-white hover:shadow-none ${
                isActive ? "bg-transparent text-[#0060b5]" : "bg-[#0060b5] drop-shadow-lg shadow-md shadow-black"
              }`
            }
            style={{ fontFamily: "Lucida Serif" }}
            onClick={closeMobileMenu}
          >
            Blogs
          </NavLink>
        </li> */}

<li>

<IconButton
  sx={{
    ml: 1,
    padding: '2px',
    borderRadius: '30px',
    backgroundColor: theme === 'dark' ? 'gray' : 'white',
    border: theme === 'dark' ? '2px solid white' : '2px solid black',
    "&:hover": {
      transform: "scale(1.1)", // Correct way to apply scaling on hover
      transition: "transform 0.3s ease-in-out", // Optional: Adds smooth transition effect
    },
  }}
  onClick={toggleTheme}
  color="primary"
>
  {theme === 'dark' ? (
    <LightModeIcon sx={{ color: 'yellow' }} />
  ) : (
    <DarkModeIcon sx={{ color: 'black' }} />
  )}
</IconButton>

        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
