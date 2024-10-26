import React from "react";
import technology from "../../assets/videos/Technology3y.mp4";
import HeroSection from "../../components/common/HeroSection";
import "./Section2.css";
import CustomAccordion from "../../components/techservicepage/AccordionComponent";
import PromiseCardsContainer from "../../components/techhomepage/PromiseCards";
import LanguagesLogos from "../../components/common/LanguagesLogos";
import { jobRolesWithimages } from "../../data/languagesdata/TechData";

const TechHomePage = () => {

  return (
    <div>
      <HeroSection
        videoUrl={technology}
        videoOpacity={100}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] md:flex md:flex-col md:justify-end  md:gap-2  ">
          <h1
            className={`md:w-full font-bold  text-5xl  font-montserrat pb-4 z-50 text-[#0060b5] `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            Your <span className="text-[#0060b5]">Solution</span>
          </h1>
          <span
            className="absolute md:bottom-[182px] bottom-[230px] left-50 w-[145%] md:w-[48%] border-b-2 border-dotted translate-y-5"
            style={{
              borderImage: "linear-gradient(to right, yellow, white, blue) 1",
              animation: "gradientShift 3s infinite",
            }}
          ></span>

          <style>
            {`
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow,  blue);
      }
      100% {
        border-image-source: linear-gradient(to right,  blue,  yellow);
      }
    }
  `}
          </style>

          <div
            className={`label   w-full mt-2 md:flex md:justify-start  md:gap-3  `}
            style={{ transition: "margin-left 1s ease-in-out" }}
          >
            <h1
              className={`relative w-full font-bold text-5xl text-white md:mt-0 md:top-0 top-3`}
              style={{ transition: "margin-left 1s ease-in-out" }}
            >
              We
              <span className="absolute animate-zoom-design ml-4 text-yellow-400">
                Design
              </span>
              <span className="absolute animate-zoom-develop ml-4 text-yellow-400">
                Develop
              </span>
              <span className="absolute animate-zoom-deliver ml-4 text-yellow-400">
                Deliver
              </span>
            </h1>
          </div>

          <ul className="list-none space-y-4 text-xl font-semibold md:mt-1 ">
            <li
              className="relative pl-4 md:mt-2 mt-8  opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Latest scalable technologies for reliable solutions.
            </li>
            <li
              className="relative pl-4 mt-4 opacity-0 animate-fadeInRepeat text-white"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="absolute left-0 md:top-1/2 top-[28%] transform -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
              Expert custom website, app, and system development.
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

      <CustomAccordion />
      <PromiseCardsContainer />


      <p className='text-lg text-[#0060b5] dark:text-white bg-white dark:bg-black/30 font-semibold text-center my-20 mx-14 py-5 border-y-2 border-black dark:border-white'>
        <span className="block mb-2 text-3xl font-bold italic" style={{ fontFamily: 'Playfair Display' }}>
          🚀
          <span className='italic text-[#0060b5]'> Elevate Your <span className='text-black dark:text-white'>Digital Experience </span>!</span>
          🚀
        </span>
        <span className="block">
          " Whether you’re looking to boost your online vibe or streamline your ops, our squad’s got your back with cutting-edge solutions! "
        </span>
      </p>


      <LanguagesLogos title="Redefining IT Skill Expertise" jobRolesWithimages={jobRolesWithimages} />
    </div>
  );
};



export default TechHomePage;






