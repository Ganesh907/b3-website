import React from 'react'
import Permanent from "../../assets/videos/webdevelopment.mp4";
import Recruiters from "../../assets/videos/Recruitment.mp4";
import Temporary from "../../assets/videos/CareerVideo.mp4";
import Permanenticon from "../../assets/images/Permanent1.png";
import Permanenticon2 from "../../assets/images/Permanent2.png";
import Permanenticon3 from "../../assets/images/Permanent3.png";
import Temporaryicon from "../../assets/images/temporary.png";
import Temporaryicon2 from "../../assets/images/temporary2.png";
import Temporaryicon3 from "../../assets/images/temporary3.png";
import Recruitericon from "../../assets/images/Recruitment.png";
import Recruitericon2 from "../../assets/images/Recruitment2.png";
import Recruitericon3 from "../../assets/images/Recruitment3.png";

const RecServices = () => {
  return (
    <div>
      <div className="  flex flex-col items-center  min-h-screen  bg-[linear-gradient(135deg,_#0000_20.5%,_#ffffff_0_29.5%,_#0000_0)_0_50px,_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%)_100px_0,_linear-gradient(135deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0),_linear-gradient(45deg,_#0000_8%,_#ffffff_0_17%,_#0000_0_58%,_#ffffff_0_67%,_#0000_0_83%,_#ffffff_0_92%,_#0000_0),_rgba(71,74,255,0.05)] bg-[200px_200px]">
        <h1 className="text-center uppercase md:text-center text-[#0060b5] dark:text-white text-xl md:text-5xl font-bold md:my-20"
          style={{

            fontFamily: 'Goudy Old Style',
            letterSpacing: '0.05em'
          }}>
          Services Offered
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
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-lg shadow-black dark:shadow-md dark:shadow-black "
                autoPlay
                loop
                muted
              >
                <source src={Permanent} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>


          <div className="bg-[#0060b5] m-2 md:px-0 px-3 md:border-none border-2 border-sky-600 rounded-2xl parentDiv md:w-[90%] shadow-xl parentDiv md:relative md:left-20 md:shadow-2xl  md:p-5 md:rounded-xl md:mb-5 md:transform md:transition-all  md:border ">

            <div className="md:flex   md:h-80 md:pl-72 md:flex-col md:items-center     ">
              <div className=" md:h-full  md:flex md:flex-col md:justify-between md:w-full ">
                <div className="md:pl-2 md:flex md:flex-col p-4 md:justify-between ">
                  <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1  text-white ">
                    Permanent Staffing
                  </h4>
                  <ul className="text-white list-disc md:pt-4 md:font leading-loose ">
                    <li>
                      We provide skilled, highly skilled, and professional recruitment services.
                    </li>
                    <li>
                      We work closely with a wide range of clients as an extension of their own teams.
                    </li>
                    <li>
                      Hiring the right candidates for permanent roles is a long-term commitment.
                    </li>
                    <li>
                      We find the best people for your projects through our tried-and-tested processes.
                    </li>
                    <li>Our services provide a fast turnaround to meet your recruitment needs.</li>
                  </ul>
                </div>
                <div className=" flex flex-row gap-4 mt-4 md:pb-0 md:ml-0 md:mr-6  ml-6 pb-3 shadow-2xl shadow-transparent md:flex  md:justify-end md:items-end md:gap-3">
                  <img
                    src={Permanenticon}
                    alt=''
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Permanenticon2}
                    alt=''
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Permanenticon3}
                    alt=''
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
          className="md:mx-auto md:w-10/12 md:relative containt "
        >
          <div
            data-aos="fade-left"
            data-aos-duration="4000"
            className="relative z-20"
          >
            <div className="md:absolute hidden rounded-2xl  md:right-[-0.75rem] md:top-10 md:z-10   bg-cover bg-center  md:text-2xl md:font-bold md:flex p-3  	 customborder  md:justify-center  md:h-72 lg:h-72 md:w-72 lg:w-1/4 hover:-translate-y-6  md:transition-all md:duration-500">


              <video
                className="imagescss rounded-[20px] object-cover h-full w-full  dark:shadow-md dark:shadow-black shadow-lg shadow-black"
                autoPlay
                loop
                muted
              >
                <source src={Temporary} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-white m-2  parentDiv md:w-[90%] mt-2  md:relative md:left-20 border-sky-600 border-2 md:shadow-2xl md:p-6 md:px-0 px-6 rounded-2xl  md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col md:h-80 md:items-start">
              <h4 className="heading font-bold text-[30px] smallcontaint my-3 ml-1 md:pl-14 text-[#0060b5]">
                Temporary Staffing
              </h4>
              <ul className="text-black md:ml-8 list-disc leading-loose md:h-72 ml-1 font md:p-6 md:w-[74%] ">
                <li>
                  Our Temporary Staffing can help you save valuable time and resources.
                </li>
                <li>
                  Recruitment process, background checks, onboarding, and placement.
                </li>
                <li>Payroll management, monthly compliance, and other staffing needs.</li>
                <li> We also assist with employee training and development.</li>
                <li>We tailor our services to fit your unique business needs.</li>
              </ul>
              <div className=" flex flex-row gap-4 ml-3 mt-2 md:py-0 py-2 shadow-2xl shadow-transparent md:flex md:justify-end md:items-end md:gap-3 ">
                <img
                  src={Temporaryicon}
                  alt=''
                  className="md:h-10 h-8  filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={Temporaryicon2}
                  alt=''
                  className="md:h-10 h-8 filter  hover:grayscale-0 hover:scale-105 transition duration-300"
                />
                <img
                  src={Temporaryicon3}
                  alt=''
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
                className="imagescss rounded-[20px] object-cover h-full w-full  shadow-lg shadow-black dark:shadow-md dark:shadow-black "
                autoPlay
                loop
                muted
              >
                <source src={Recruiters} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className=" bg-opacity-75  rounded  "></div>
            </div>
          </div>

          <div className="bg-[#0060b5]   m-2 mt-2 parentDiv md:w-[90%] border-sky-600 border-2 rounded-2xl md:h-96 md:relative md:left-20 md:shadow-2xl  md:p-3 md:px-0 px-6 md:rounded-xl md:mb-5 md:mt-5 md:transform md:transition-all  md:border-none ">
            <div className="md:flex md:flex-col  ">
              <div className="  ">
                <h4 className=" md:text-center heading border-solid border-black font-bold text-[30px] smallcontaint ml-1  md:pl-60 md:pr-32 text-white ">
                  Recruitment Process Outsourcing (RPO)
                </h4>
                <div className="md:pl-2  md:flex md:justify-center   ">
                  <ul className="text-white list-disc leading-loose font md:h-[275px] md:pt-10 md:pl-80 ml-1 md:w-[100%] md:line-break:anywhere">
                    <li>
                      We offer Recruitment Process Outsourcing (RPO) services.
                    </li>
                    <li>
                      We take on the task of identifying potential candidates for your recruitment needs.
                    </li>
                    <li>
                      Our approach focuses on delivering well-suited candidates.
                    </li>
                    <li>We aim to streamline the recruitment process for your organization.</li>
                    <li>This minimizes the involvement of your HR personnel.</li>
                  </ul>
                </div>
                <div className=" flex mr-6 md:py-0 py-3  shadow-2xl shadow-transparent  flex-row gap-4 md:flex md:justify-end  md:gap-3 ">
                  <img
                    src={Recruitericon}
                    alt=''
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon2}
                    alt=''
                    className="md:h-10 h-8 filter  hover:scale-105 transition duration-300"
                  />
                  <img
                    src={Recruitericon3}
                    alt=''
                    className="md:h-10 h-8 filter   hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default RecServices