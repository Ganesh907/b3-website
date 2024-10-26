import React from 'react';
import { values } from '../../data/AboutCoreValueData';

import { useTheme } from "../common/ThemeProvider";

const ValueBlock = ({ Icon, iconColor, borderColor, stepNumber, title, description, delay ,theme}) => (
  
  <div
    className='md:w-[18%] md:h-[67vh] flex flex-col justify-between items-center gap-x-[2%]'
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-delay={delay}
  >
    <div className='h-28 w-28 scale-75 md:scale-100 rounded-full bg-white shadow-2xl shadow-black flex justify-center items-center'>
      <Icon sx={{ color: 'black', fontSize: '90px', border: `6px solid ${iconColor}`, borderRadius: '50px', padding: '10px' }} />
    </div>
    <div className='h-36 w-1 bg-transparent hidden md:block border-l-2 border-dotted border-black dark:border-white'></div>
    <div
      className={`h-10 w-10 hidden md:flex justify-center items-center rounded-full font-bold ${stepNumber % 2 === 0 ? 'bg-yellow-400 text-black' : 'bg-[#0060b5] text-white'} border-2 border-white shadow-sm shadow-black animate-pulse`}
    >
      {stepNumber}
    </div>
    <h1 className='text-xl uppercase my-2 font-semibold text-black dark:text-white'>{title}</h1>
    <p className='italic border-t-2 rounded-2xl py-2 bg-[#0060b5] dark:bg-[rgb(0,0,0,0.5)]' 
    style={{
      backgroundColor: theme === 'dark' ? 'rgb(0,0,0,0.5)' : borderColor ,
      color:theme === 'dark' ? 'white':'black',
      borderTopColor: theme==='dark' ? borderColor :'black', borderTopWidth: '2px' }}>
      {description}
    </p>
  </div>
);

const CoreValues = () => {
  const { theme } = useTheme();
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-[#0060b5] text-3xl font-bold uppercase text-center mt-16 mb-5 border-y-2 py-2 px-5 border-black dark:border-white'>
        Core <span className='text-yellow-400'>Values</span>
      </h1>
      <div className='text-white md:h-[80vh] w-[90vw] gap-y-10 px-5 md:px-0 flex flex-col md:flex-row justify-between items-center text-center mb-10 md:mb-0'>
        {values.map((value, index) => (
          <ValueBlock
          theme={theme}
            key={index}
            Icon={value.Icon}
            iconColor={value.iconColor}
            borderColor={value.borderColor}
            stepNumber={value.stepNumber}
            title={value.title}
            description={value.description}
            delay={value.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
