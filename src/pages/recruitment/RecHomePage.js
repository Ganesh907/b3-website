import React, { useEffect, useState } from 'react';
import jobinterview from '../../assets/videos/jobinterview.mp4'
import HeroSection from '../../components/common/HeroSection';
import CustomAccordion from '../../components/recservicespae/AccordionComponent';
import PromiseCardsContainer from '../../components/rechomepage/PromiseCards';
import { jobRolesWithimages } from '../../data/languagesdata/RecData';
import LanguagesLogos from '../../components/common/LanguagesLogos';

const RecHomePage = () => {

  const searchIconSvg = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"  fill="white" height="100" viewBox="0 0 24 24">
<path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z"></path>
</svg>

  `)}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quotes = [
    "Your success is our priority. With our deep industry knowledge and personalized approach, we match you with top talent that drives your business forward, creating long-term value beyond just filling a position.",

    "Your business deserves the best, and we’re here to deliver. We go beyond resumes to find candidates that align with your company’s values and goals, ensuring a perfect fit every time.",
  ];

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, quotes.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [visibleSteps, setVisibleSteps] = useState(0);
  useEffect(() => {
    if (visibleSteps < 2) {
      const timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleSteps]);

  return (
    <div className="recrHomepageMain  dark:bg-transparent" >
      <HeroSection videoUrl={jobinterview}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className="lg:w-[50vw] w-[90vw] md:h-80 h-auto font-bold drop-shadow-xl">
          <div className='' style={{ cursor: `url(${searchIconSvg}) 40 30, auto` }}>
            <div className="relative">
              <h1
                className=" text-[#0060b5] text-3xl lg:text-5xl font-bold drop-shadow-xl mr-2 "
                style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
              >
                {"Top Talent Access".split("").map((letter, index) => (
                  <span key={index} className="hover:text-white transition-opacity duration-300">
                    {letter}
                  </span>
                ))}
              </h1>

              <span
                className="absolute bottom-0 lg:top-5 top-2 left-0 lg:w-[30vw] w-[90vw] lg:border-b-2 border-b-4 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>

              <style jsx>{`
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    @keyframes gradientShift {
      0% {
        border-image-source: linear-gradient(to right, yellow, blue);
      }
      100% {
        border-image-source: linear-gradient(to right, blue, yellow);
      }
    }
  `}</style>
            </div>

            <div className=" flex items-center">

              <h1 className="drop-shadow-lg  text-white md:text-3xl text-xl my-5 font-bold  pb-4"
                style={{ userSelect: 'none', WebkitUserSelect: 'none', MsUserSelect: 'none' }}
              >
                {"Let Us Find the ".split("").map((letter, index) => (
                  <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300">
                    {letter}
                  </span>
                ))}



                {"Perfect Fit ".split("").map((letter, index) => (
                  <span key={index} className="hover:text-[#0060b5] md:hover:text-[35px] transition-opacity duration-300 text-[#0060b5]  md:text-4xl text-xl">
                    {letter}
                  </span>
                ))}



                {"for Your Company".split("").map((letter, index) => (
                  <span key={index} className="hover:text-[#0060b5]  md:hover:text-[35px] text-white transition-opacity duration-300">
                    {letter}
                  </span>
                ))}
              </h1>

            </div>
          </div>

          <div className="relative w-full h-32 overflow-hidden  mr-2 cursor-pointer">
            <div
              className="absolute w-full h-full flex transition-transform duration-1000 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {quotes.map((quote, index) => (
                <div key={index} className="w-full font-semibold md:text-xl flex-shrink-0 bg-transparent text-white drop-shadow-xl">
                  <p>{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </HeroSection>

      <CustomAccordion />

      <PromiseCardsContainer />


     


      <p className='text-lg text-[#0060b5] dark:text-white bg-white dark:bg-black/30 font-semibold text-center my-20 mx-14 py-5 border-y-2 border-black dark:border-white'>
        <span className="block mb-2 text-3xl font-bold " style={{ fontFamily: 'Playfair Display' }}>
          🔎
          <span className='italic text-[#0060b5]'>Finding the <span className=' text-black dark:text-white'>  Right Talent</span> for You!</span>
          🔎
        </span>
        <span className="block">
          " Whether you need a full-time expert or short-term support, our passionate recruiters are ready to match you with the best candidates! "
        </span>
      </p>

      <LanguagesLogos title="B3 Expertise In IT Recruitment" jobRolesWithimages={jobRolesWithimages} />

    </div>

  );

}


export default RecHomePage;

