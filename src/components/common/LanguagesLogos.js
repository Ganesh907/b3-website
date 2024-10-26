import React, { useRef } from 'react';

const LanguagesLogos = ({ title, jobRolesWithimages }) => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div className="mt-10">
      <h1
        className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-4xl font-bold my-10"
        style={{
          fontFamily: 'Goudy Old Style',
          letterSpacing: '0.05em',
        }}
      >
        {title}
      </h1>
      <marquee
        className="w-full  flex justify-start items-center cursor-pointer bg-[#0060b5] text-black py-10 dark:bg-[rgba(0,0,0,0.4)] whitespace-nowrap"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {jobRolesWithimages.map((role, index) => (
          <span
            key={index}
            className={`inline-flex items-center mx-4 rounded-lg text-xl hover:scale-110 hover:bg-black hover:text-white 
              dark:hover:bg-white dark:hover:text-black drop-shadow-lg shadow-lg shadow-black border-x-4 py-5 px-5 bg-white text-black dark:bg-black dark:text-white border-blue-900 transition-all duration-500 ease-in-out`}
          >
            {role.text}
            <img src={role.image} className="w-10 h-10 ml-2" alt={`${role.text} logo`} />
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default LanguagesLogos;
