import React, { useRef } from "react";
import TechServicesVideo from "../../assets/videos/TechServicesVideo.mp4";
import HeroSection from "../../components/common/HeroSection";
import TypingTextAnimation from "../../components/common/TypingTextAnimation";
import SplitCard from "../../components/techservicepage/SplitCard";
import { jobRolesWithimages } from "../../data/languagesdata/TechData";
import LanguagesLogos from "../../components/common/LanguagesLogos";

const TechServicesPage = () => {


  return (

    <div>
      <HeroSection
        videoUrl={TechServicesVideo}
        videoOpacity={20}
        MarginAnimtion={true}
      >
        <div className=" flex flex-col justify-end items-end ">
          <TypingTextAnimation />
        </div>
      </HeroSection>
      <SplitCard />
      <LanguagesLogos title="Redefining IT Skill Expertise" jobRolesWithimages={jobRolesWithimages} />
    </div>
  );
};

export default TechServicesPage;
