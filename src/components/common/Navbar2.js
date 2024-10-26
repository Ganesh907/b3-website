import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/B3logo.png';
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

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'md:bg-[rgba(0,0,0,0.2)] md:dark:bg-[rgba(0,0,0,0.2)] bg-white dark:bg-gray-900'}`}
    >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-black" style={{ color: (scrolled && theme !== 'dark') ? 'black' : 'white' }}>BitByBit Solutions</span>
          </Link>

          {/* Center dropdown navigation */}
          {/* <div className="hidden md:flex justify-around  items-center absolute left-1/2 transform p-1 -translate-x-1/2 dark:bg-black bg-[#0060b5] border-black my-1 rounded-lg border dark:border-white">
            <DropdownNavItem title="Technology" items={techItems} />
            <div className='w-[1px] h-7 bg-white '></div>
            <DropdownNavItem title="Recruitment" items={recruitmentItems} />
          </div> */}



          <div 
      className="group w-20 relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center" 
      style={{
        "--spread": "90deg",
        "--shimmer-color": "#ffffff",
        "--radius": "100px",
        "--speed": "1.5s",
        "--cut": "0.1em",
        "--bg": "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-100%] rotate-gradient">
          <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
        </div>
      </div>
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
      <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white">
      <DropdownNavItem title="Technology" items={techItems} />
      </span>
    </div>


        

          {/* Right side links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink theme={theme} scrolled={scrolled} to="/aboutB3">About B3</NavLink>
            <NavLink theme={theme} scrolled={scrolled} to="/clients">Clients</NavLink>
            <NavLink theme={theme} scrolled={scrolled} to="/contact">Contact</NavLink>
            <ThemeToggle isDarkMode={theme === 'dark'} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600 hover:scale-110 focus:outline-none" aria-label="Toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414-1.414l4.829 4.828 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/aboutB3">About B3</MobileNavLink>
            <MobileDropdownNavItem title="Technology" items={techItems} />
            <MobileDropdownNavItem title="Recruitment" items={recruitmentItems} />
            <MobileNavLink to="/clients">Clients</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
          <div className="px-4 py-3">
            <ThemeToggle isDarkMode={theme === 'dark'} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable navigation link component
function NavLink({ to, children, scrolled ,theme}) {
  return (
    <Link
      to={to}
      className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      style={{ color: (scrolled && theme !== 'dark') ? 'black' : 'white' }}
      
    >
      {children}
    </Link>
  );
}

// Dropdown navigation component for larger screens
function DropdownNavItem({ title, items }) {
  return (
    <div className="relative group">
      {/* <button className="text-lg font-medium text-white hover:text-black p-2 px-10 rounded-lg hover:bg-white dark:text-white dark:hover:text-black transition-colors duration-200 focus:outline-none">
        {title}
      </button> */}

      <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0  left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{title}</span>
</a>

      <div className="absolute left-0 w-48 rounded-md shadow-lg py-1 bg-blue-50 dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {items.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Dropdown component for mobile view
function MobileDropdownNavItem({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700 focus:outline-none"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="space-y-1 pl-4">
          {items.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-gray-700 rounded-md text-base hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile single navigation link component
function MobileNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  );
}

// Theme toggle button component
function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label="Toggle dark mode"
    >
       {isDarkMode ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
