
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import HeroSection from "../components/common/HeroSection";
import AboutUsBgVideo from '../assets/videos/AboutUsBgVideo.mp4';
import mission from "../assets/images/mission.gif";
import vision from "../assets/images/vision.gif";
import Corevalues from "../components/aboutus/Corevalues";
import MissionVisionGif from "../assets/images/MissionVisionGif.gif"
import TypingText from "../components/common/TypingText";
import LightBg from "../assets/images/LightBg.jpg"
import { useTheme } from "../components/common/ThemeProvider";


const AboutUsPage = () => {
  const { theme } = useTheme();
  const content = [
    {
      heading: "Turning Ideas Into Digital Solutions",
      paragraph: [

        // "BitByBit Solutions is a dynamic and rapidly growing technology startup based in Mumbai, India’s commercial hub.",
        // "Since our inception in 2018, we’ve specialized in delivering high-quality IT solutions to esteemed clients across India and the Indo-Pacific region.",
        // "Our expertise spans custom software development, data management, and digital transformation.",
        // "We are driven by a young and passionate team with diverse experience across multiple industries, enabling us to craft innovative solutions that meet the unique needs of each client.",

        "From seamless software development to advanced data management, we deliver tech that works for you efficiently and effortlessly.",
        "We bring your vision to life with IT solutions designed to drive results and keep you ahead in the digital world."
      ]
    },
    {
      heading: "Connecting Talent, Building Careers",
      paragraph: [
        "Whether you’re looking to hire or find your next job, we’ve got the network and know-how to make it happen.",
        "We match the right people with the right opportunities.",
        "Let’s build your dream team or career together."
      ]
    }
  ];
  const highlightWords = ["Idea", "Talent", "Career"];

  const highlightText = (text) => {
    return text.split(" ").map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      const highlighted = highlightWords.some((highlight) =>
        lowerCaseWord.includes(highlight.toLowerCase())
      );

      return (
        <span key={index} className={highlighted ? "text-yellow-400" : "text-white"}>
          {word}{" "}
        </span>
      );
    });
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, content.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>

      <HeroSection videoUrl={AboutUsBgVideo} videoOpacity={20} MarginAnimtion={true}>
        <div className='lg:w-[50vw] w-[90vw] flex justify-end items-end'>
          <div className="relative w-full md:h-80 h-96  overflow-hidden mr-2 cursor-pointer mb-16">
            <h1 className="text-[#0060b5] text-3xl lg:text-5xl font-bold drop-shadow-xl">
              Who We Are
              <span
                className="absolute bottom-0 top-4 left-0 lg:w-[45vh]  w-[90vw] lg:border-b-2 border-b-4 my-9"
                style={{
                  borderImage: "linear-gradient(to right, yellow, white, blue, black) 1",
                  animation: "gradientShift 6s infinite",
                }}
              ></span>
            </h1>

            <style>
              {`
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
              `}
            </style>

            <div
              className="absolute w-full h-full flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {content.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-transparent font-bold  pl-2 text-white drop-shadow-xl">
                  <h3 className="mt-10 md:mt-4 md:text-2xl text-xl font-semibold inline-block pb-1 my-4">
                    {highlightText(item.heading)}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xl">
                    {item.paragraph.map((point, idx) => (
                      <li key={idx} className="text-white font-semibold text-xl drop-shadow-xl">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroSection>

      <div className="lg:h-[120vh] dark:lg:h-[100vh] w-auto flex md:flex-row flex-col px-5 md:px-20 md:pt-10 dark:md:pt-0 dark:md:px-10 justify-between md:my-10 "
       style={{
        backgroundImage: theme === 'dark' ? 'none' : `url(${LightBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
}}
>

        <div className="md:h-full  md:w-[55%] flex flex-col justify-center md:justify-start z-2 items-start  "
          data-aos={window.innerWidth <= 768 ? "fade-up" : "fade-left"}
          data-aos-duration="3000"
        >
          <div className="flex flex-col justify-between items-center  w-full p-5"
          >
            <img src={mission} alt="" className="h-28 w-28 p-1  border-4 rounded-full border-[#0060b5] transition-all ease-in-out duration-600" />
            <div>

              <div className="text-center text-2xl text-[#0060b5] font-bold mt-10">
                OUR
                <TypingText word=" MISSION" />

              </div>
              <h2 className="mt-4 rounded-2xl  p-3  text-[var(--secondary-color)] drop-shadow-xl border-b-0 italic border-t-4  border-[#0060b5]  "
                style={{ backgroundColor: theme === 'dark' ? 'rgb(0,0,0,0.5)' : '#0060b5' }}>
                {
                  "We strive to provide a tailored, end to end services to our clients and establishing strong partnerships to ensure we understand each others goals and deadlines, without compromising our professional and ethical standards."
                }
              </h2>
            </div>
          </div>
        </div>


        <div className="hidden dark:flex justify-center md:w-[40%] items-center"
          data-aos="zoom-in" data-aos-duration="3000" >
          <img src={MissionVisionGif} alt="" className="md:scale-150 " />
        </div>

        <div className="md:h-full md:w-[55%]  flex flex-col justify-end z-2   items-end  "
          data-aos={window.innerWidth <= 768 ? "fade-up" : "fade-right"}
          data-aos-duration="3000"
        >
          <div className="flex flex-col  justify-between items-center  w-full p-5">

            <img src={vision} alt="" className="h-28 w-28 p-1  border-4 rounded-full border-[#0060b5]" />
            <div>
              <h1 className="text-center text-2xl mt-10 text-[#0060b5] font-bold">
                OUR   <TypingText word=" VISION" />
              </h1>
              <h2 className="mt-4 rounded-2xl  p-3 drop-shadow-xl  border-t-4 italic  border-[#0060b5] "
                 style={{ backgroundColor: theme === 'dark' ? 'rgb(0,0,0,0.5)' : '#0060b5' }}>
                {
                  "To build trust by establishing a winning value chain system based on the ever changing surroundings, with the utmost focus on transforming lives and providing solutions."
                }
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Corevalues />

    </div>
  );
};

export default AboutUsPage;
