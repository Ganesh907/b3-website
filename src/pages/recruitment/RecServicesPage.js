import React from 'react'
import OurServices from '../../assets/videos/OurServices.mp4'
import HeroSection from '../../components/common/HeroSection';
import { jobRolesWithimages } from '../../data/languagesdata/RecData';
import RecServices from '../../components/recservicespae/RecServices';
import LanguagesLogos from '../../components/common/LanguagesLogos';

const RecServicesPage = () => {


  return (
    <div className='dark:bg-transparent'>
      <HeroSection
        videoUrl={OurServices}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] flex flex-col justify-end items-start font-bold drop-shadow-xl ">

          <div className=" flex flex-col text-start  ">
            <h1 className="text-[#0060b5]  text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Our Solutions
              <span
                className="absolute bottom-0 left-0 w-full border-b-2 border-dotted translate-y-5"
                style={{
                  borderImage: 'linear-gradient(to right, yellow,  blue) 1',
                  animation: 'gradientShift 6s infinite',
                }}
              ></span>

              <style>
                {`
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow,  blue);
      }
      100% {
        border-image-source: linear-gradient(to right, blue,  yellow);
      }
    }
  `}
              </style>
            </h1><br />
            <h1 className="drop-shadow-lg   text-white text-3xl  md:w-auto  mb-5 font-bold "> Your <span className='text-yellow-500'>Hiring</span> Needs


            </h1>

          </div>


          <ul className="list-none space-y-4 text-xl font-semibold mt-2">
            <li
              className="relative pl-4  opacity-0 animate-fadeInRepeat"
              style={{ animationDelay: '0.5s' }} // First item appears after 0.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Discover tailored recruitment strategies to perfect your team fit.
            </li>
            <li
              className="relative pl-4 opacity-0 animate-fadeInRepeat"
              style={{ animationDelay: '1.5s' }} // Second item appears after 1.5s
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Enhance your hiring strategy with our comprehensive talent services.
            </li>
          </ul>

          <style>
            {`
    @keyframes fadeInRepeat {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      30% {
        opacity: 1;
        transform: translateY(0);
      }
      70% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    .animate-fadeInRepeat {
      animation: fadeInRepeat 15s infinite; // Long duration, stops on screen for a long time
    }
  `}
          </style>

        </div>
      </HeroSection>

      <RecServices />

      <LanguagesLogos title="B3 Expertise In IT Recruitment" jobRolesWithimages={jobRolesWithimages} />

    </div>
  )
}

export default RecServicesPage;