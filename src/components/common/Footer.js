import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../css-files/NotFoundPage.css';
import Logo from '../../assets/images/B3logo.png'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const dots = Array.from({ length: 3 }, (_, index) => (
    <div key={index} className="h-5 w-5 bg-white  mx-2 rounded-sm animate-spin " style={{ animationDuration: '2000ms' }} />));

  const linkClass = "group relative inline-flex items-center overflow-hidden px-2 py-2 transition-colors duration-300 ";

  const AnimatedLink = ({ href, text }) => (
    <a
      href={href}
      className={`group relative border-l-2 border-transparent hover:border-white transition-all duration-300 ${linkClass}`}
    >
      <span className="relative z-10 group-hover:text-white ">{text}</span>
      <span className="ml-2 hidden relative md:block z-10 transition-transform group-hover:translate-x-1">&rarr;</span>
      <span className="absolute inset-y-0 -left-1 w-full bg-[#0060b5] translate-x-[-100%] group-hover:translate-x-1 transition-transform duration-500 ease-in-out"></span>
    </a>
  );

  return (
    <footer className={`flex justify-center items-center  text-white dark:py-5 dark:bg-transparent`}>
      <div class={`bg-blue-900 dark:mx-2 md:dark:mx-10  shadow-black dark:bg-black/50  dark:backdrop-blur-lg dark:rounded-lg shadow-lg border border-white/70 p-6`}>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-x-8 md:px-10 px-5 pt-10 relative overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="animate-bounce flex duration-1000 justify-center items-end h-24 w-24 ">
              <div className="bg-white  animate-alternate-colors  " style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}>
                <img src={Logo} alt="" className="h-16 w-16  " />
              </div>
            </div>
            <div className="h-10 flex justify-center items-center ">{dots}</div>
            <div className=" w-full">
              <h4 className="text-2xl  font-semibold md:mb-4 border-y-2 text-white w-full  border-white md:py-1 py-2 text-center mt-5">BitByBit Solutions</h4>
            </div>
          </div>
          <div>
            <h4 className="md:text-lg  text-xl text-center md:text-left font-semibold mb-4 border-b border-gray-700 pb-2 mt-10 md:mt-0">Company</h4>
            <ul className=" space-y-[2px]">
              <li><AnimatedLink href="/aboutB3" text="About B3" /></li>
              <li><AnimatedLink href="/contact" text="Contact" /></li>
              <li><AnimatedLink href="/Careers" text="Careers" /></li>
              <li><AnimatedLink href="/clients" text="Clients" /></li>
            </ul>
          </div>

          <div>
            <h4 className="md:text-lg  text-xl text-center md:text-left   font-semibold mb-4 border-b border-gray-700 pb-2  mt-4 md:mt-0">Quick Links</h4>
            <ul className="space-y-[2px]">
              <li><AnimatedLink href="/technology" text="Technology Home" />&nbsp;</li>
              <li><AnimatedLink href="/technology-services" text="Technology Services" /></li>
              <li><AnimatedLink href="/recruitment" text="Recruitment Home" /></li>
              <li><AnimatedLink href="/recruitment-services" text="Recruitment Services" /></li>
            </ul>
          </div>

          <div>
            <h4 className="md:text-lg  text-xl text-center md:text-left   font-semibold mb-4 border-b border-gray-700 pb-2  mt-4 md:mt-0">Contact Us</h4>
            <div className="md:space-y-2">
              <p className="mb-4">(+91) 022 65510355</p>
              <div>


                <p className=" text-base">912 | 1st Floor | Building No 9 | Solitaire Corporate Park | Andheri Kurla Road | Chakala | Andheri (East) | Mumbai - 400 093</p>
                <div className="flex space-x-4 items-end md:mt-8 mt-2 animate-pulse">
                  {[
                    { href: "https://www.facebook.com/people/Bitbybit-Solutions/100076458850415/", name: 'Facebook', icon: <FacebookIcon />, color: "text-blue-600" },
                    { href: "https://www.instagram.com/bitbybitsolutions_/", name: 'Instagram', icon: <InstagramIcon />, color: "text-pink-500" },
                    { href: "https://www.linkedin.com/company/bitbybit-solutions/", name: 'LinkedIn', icon: <LinkedInIcon />, color: "text-blue-700" },
                    { href: "https://x.com/i/flow/login?redirect_after_login=%2FBitByBitSoluti1", name: 'Twitter', icon: <TwitterIcon />, color: "text-blue-400" }
                  ].map(({ href, icon, color, name }, index) => (
                    <div key={index} className="relative group">
                      <a href={href} className={`${color} hover:${color.replace('-600', '-400')} transition-colors duration-300`}>
                        {icon}
                      </a>
                      <span className="absolute bottom-full mb-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300 bg-[#0060b5] p-1 rounded-md">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright w-[100%] text-center my-2 ">
          <p className="text-sm">
            © {currentYear}.  |  BitByBit Solutions.  |  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
