import React from 'react'
import WaveBG from '../assets/images/WaveBG.jpg'
import ContactForm from '../components/contactuspage/ContactForm';
import ContactMap from '../components/contactuspage/Map';
import { useTheme } from '../components/common/ThemeProvider';


const ContactUsPage = () => {

        const { theme } = useTheme();
        return (
                <div>
                        <div
                                className="absolute inset-0 bg-blue-500"
                                style={{
                                        opacity: 0.1,
                                        transition: 'border-radius 1s ease-in-out',
                                }}
                        ></div>
                        <div
                                className='flex justify-center items-end md:h-screen bg-black/50 dark:bg-transparent'
                                style={{
                                        backgroundImage: theme === 'dark' ? 'none' : `url(${WaveBG})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundBlendMode: 'overlay',
                                }}>

                                <div className=' md:h-[90vh] w-[100vw] mt-20 bg-red-200 lg:mt-0 flex justify-center flex-col lg:flex-row  items-center p-4 lg:p-20  bg-transparent '>
                                        <div className=' rounded-lg w-full lg:w-[40%]  flex  flex-col justify-center '
                                                data-aos="fade-up" data-aos-duration="1000">
                                                <ContactForm />
                                        </div>
                                        <div className='lg:w-[60%] w-[98%] mt-10 lg:mt-0 lg:p-4 p-0 lg:ms-5 rounded-lg' data-aos="zoom-in" data-aos-duration="1000"
                                                style={{
                                                        backgroundColor: 'rgb(0,0,0,0.4)'
                                                }}>

                                                <ContactMap />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default ContactUsPage;

