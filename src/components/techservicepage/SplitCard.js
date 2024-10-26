import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import javascript from "../../assets/images/javascript.png";
import reactlogo from "../../assets/images/reactjs.png";
import nodelogo from "../../assets/images/nodejs .png";
import javalogo from "../../assets/images/java1.png";
import kotline from "../../assets/images/Kotlin_Icon.png";
import flutter from "../../assets/images/flutter.png";
import enterpriselogo from "../../assets/images/enterp.png";
import digital from "../../assets/images/enterprisesol.png";
import solution from "../../assets/images/architecture (2).png";
import EnterpriseSolution from "../../assets/videos/techservices/enterprisevideo.mp4";
import androidappvideo from "../../assets/videos/techservices/appdevvideo.mp4";
import service from "../../assets/images/devops.png";
import itservice from "../../assets/images/it-systems.png";
import software from "../../assets/images/software.png";
import webdevelopmentvideo from "../../assets/videos/techservices/webdevvideo.mp4";
import itservicesvideo from "../../assets/videos/techservices/ManagedItServicesVideo.mp4";
export default class SplitCard extends Component {
  render() {
    return (
      <div className="  flex flex-col items-center  min-h-screen  bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
        <h1 className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-5xl font-bold md:my-20"
          style={{

            fontFamily: 'Goudy Old Style',
            letterSpacing: '0.05em'
          }}>
          Our Professional Services Portfolio
        </h1>

        <div

          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:mt-4 md:relative containt "
        >
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="relative z-20"
          >
            <div className="md:absolute hidden  md:left-10 md:top-10 md:z-10  bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder   custom-border relative border-[4px] border-transparent rounded-[10%] max-w-[23em] custom-border md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">


              <video
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={webdevelopmentvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>
          <div className="bg-[#0060b5] md:pl-0 pl-4 m-2 md:border-none border-2 border-sky-600  rounded-2xl parentDiv md:w-[90%] shadow-xl parentDiv md:relative md:left-20 md:shadow-2xl  md:mx-0 md:p-5 mx-5 md:rounded-xl md:mb-5 md:transform md:transition-all  md:border ">

            <div className="md:flex   md:h-80 md:pl-72 md:flex-col md:items-center     ">
              <div className=" md:h-full  md:flex md:flex-col md:justify-between md:w-full ">
                <div className="md:pl-2 md:flex md:flex-col p-4 md:justify-between ">
                  <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1  text-white ">
                    Web Development
                  </h4>
                  <ul className="text-white list-disc md:pt-6 md:font md:leading-loose ">
                    <li>
                      Enhancing website visibility and search engine ranking for
                      better online presence.
                    </li>
                    <li>
                      Custom web design and development with responsive,
                      user-friendly interfaces.
                    </li>
                    <li>
                      Secure and scalable architectures for robust, future-proof
                      websites.
                    </li>
                    <li>
                      Regular updates and maintenance to ensure smooth
                      operation.
                    </li>
                  </ul>
                </div>
                <div className=" flex flex-row gap-4 md:pb-0 pb-2 mt-4 md:pl-0 pl-4 shadow-2xl shadow-transparent md:flex  md:justify-end md:items-end md:gap-3">
                  <img
                    src={javascript}
                    alt=""
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={reactlogo}
                    alt=""
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    alt=""
                    src={nodelogo}
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:relative containt "
        >
          <div
            data-aos="fade-left"
            data-aos-duration="4000"
            className="relative z-20"
          >
            <div className="md:absolute hidden rounded-2xl  md:right-[-0.75rem] md:top-10 md:z-10   bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder  md:justify-center  md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">
              <video
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={androidappvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-white md:pl-0 pl-8 m-2  parentDiv md:w-[90%] md:left-20 mt-2   md:relative  border-sky-600 border-2 md:shadow-2xl md:p-6 rounded-2xl mx-5 md:mx-0  md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-14 text-[#0060b5]">
                Mobile App Development
              </h4>
              <ul className="text-black md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">
                <li>
                  Custom mobile app design and development with user-friendly
                  interfaces and intuitive UX.
                </li>
                <li>
                  Regular updates and maintenance to keep apps running smoothly.
                </li>
                <li> Cross-platform compatibility for broader reach.</li>
                <li> Robust security measures for data protection.</li>
                <li> Seamless integration with backend systems.</li>
              </ul>
              <div className=" flex flex-row gap-4 md:pb-0 pb-2 md:ml-3 ml-0  mt-2 shadow-2xl shadow-transparent md:flex md:justify-end md:items-end md:gap-3 ">
                <img
                  src={javalogo}
                  alt=""
                  className="md:h-10 h-8  filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={kotline}
                  alt=""
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={flutter}
                  alt=""
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          // data-aos="fade-up"
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12  md:relative containt "
        >
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="relative z-20"
          >
            <div className="md:absolute  hidden  md:left-10  md:top-16  md:z-10 md:p-3  bg-cover bg-center  md:text-2xl md:font-bold md:flex   	 customborder  md:justify-center   md:h-72 lg:h-72 md:w-72 lg:w-1/4 md:hover:-translate-y-8  md:transition-all md:duration-500">
              <video
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={EnterpriseSolution} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-[#0060b5] md:pl-0 pl-8  m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 h-96 md:relative md:left-20 md:shadow-2xl  mx-4 md:mx-0 md:p-3 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col  ">
              <div className="  ">
                <h4 className=" md:text-center heading border-solid border-black font-bold text-[30px] smallcontaint ml-1  md:pl-60 md:pr-32 text-white ">
                  Enterprise Application Solutions
                </h4>
                <div className="md:pl-2  md:flex md:justify-center   ">
                  <ul className="text-white list-disc leading-loose font md:h-[275px] md:pt-10 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                    <li>
                      Implementation of innovative and scalable enterprise
                      solutions.
                    </li>
                    <li>
                      Strategic consulting for enterprise application
                      architecture.
                    </li>
                    <li>
                      Integrated DevOps for efficient and streamlined workflows.
                    </li>
                    <li>Regular code reviews for quality and optimization.</li>
                    <li>Utilization of intuitive design frameworks.</li>
                  </ul>
                </div>
                <div className=" flex md:mr-6 md:pb-0 pb-2 shadow-2xl shadow-transparent  flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={enterpriselogo}
                    alt=""
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={digital}
                    alt=""
                    className="md:h-10 h-8 filter  hover:scale-105 transition duration-300"
                  />
                  <img
                    src={solution}
                    alt=""
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          // data-aos="fade-up"
          data-aos-duration="4000"
          className="md:mx-auto md:w-10/12 md:relative containt mb-4 "
        >
          <div
            data-aos="fade-left"
            data-aos-duration="4000"
            className="relative z-20"
          >
            <div className="md:absolute hidden shadow-2xl shadow-transparent rounded-2xl  md:right-[-0.75rem] md:top-10 md:z-10   bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder  md:justify-center  md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">


              <video
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)]"
                autoPlay
                loop
                muted
              >
                <source src={itservicesvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className=" bg-white m-2 md:pl-0 pl-8 parentDiv md:w-[90%] mt-2  md:relative md:left-20   md:shadow-2xl md:p-6 rounded-2xl  md:transform md:transition-all mx-5 md:mx-0 ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-14 text-[#0060b5]">
                Managed IT Services
              </h4>
              <ul className=" text-black  md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">

                <li>
                  Enhancing performance and efficiency of existing systems for
                  better output.
                </li>
                <li>
                  {" "}
                  Ensuring your IT infrastructure meets industry regulations and
                  standards.
                </li>
                <li>
                  {" "}
                  Identifying and addressing potential issues before they cause
                  downtime.
                </li>
                <li>
                  Streamlining relationships with third-party service providers
                  for seamless operations.
                </li>
              </ul>
              <div className=" flex flex-row md:pb-0 pb-2 gap-4 md:ml-3 ml-0 mt-2 shadow-2xl shadow-transparent md:flex md:justify-end md:items-end md:gap-3 ">
                <img
                  src={service}
                  alt=""
                  className="md:h-10 h-8  filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={itservice}
                  alt=""
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={software}
                  alt=""
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
