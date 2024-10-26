import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const HeroSection = ({ videoUrl, videoOpacity, MarginAnimtion, children }) => {
    const [bottomRadius, setBottomRadius] = useState('0%');
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = 50;
            const radius = Math.min((scrollTop / maxScroll) * 50, 50);
            setBottomRadius(`${radius}%`);

            if (MarginAnimtion) {
                setIsCentered(scrollTop > 30);
            } else {
                setIsCentered(false);
            }
        };

        const handleResize = () => {
            const isTabletOrLarger = window.innerWidth >= 1024;
            if (isTabletOrLarger) {
                window.addEventListener('scroll', handleScroll);
            } else {
                window.removeEventListener('scroll', handleScroll);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [MarginAnimtion]);

    const headingStyle = {
        transform: isCentered ? 'translateX(50%)' : 'translateX(0)',
        transition: 'transform 1s ease-in-out',
    };

    const containerStyle = {
        borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
        transition: 'border-radius 1s ease-in-out',
    };

    const ScrollFun = () => {
        const scrollDuration = 2000;
        const scrollHeight = window.innerHeight;
        const start = window.scrollY;
        const startTime = performance.now();

        const easeInOutQuad = (t) => {
            return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        const smoothScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / scrollDuration, 1);
            const easedProgress = easeInOutQuad(progress);

            window.scrollTo(0, start + easedProgress * scrollHeight);

            if (timeElapsed < scrollDuration) {
                requestAnimationFrame(smoothScroll);
            }
        };

        requestAnimationFrame(smoothScroll);
    };

    return (
        <div
            className={`relative flex h-[100vh] items-center ${isCentered ? 'border-b-4' : 'border-b-0'} border-b-[#0060b5] justify-start shadow-xl bg-black transition-all duration-1000 ease-in-out`}
            style={containerStyle}
        >
            <div
                className={`text-start absolute z-20 w-[50vw] h-auto drop-shadow-xl mt-10 ${isCentered ? "ml-0" : 'md:ml-10 mx-5 md:mx-0'}`}
                style={headingStyle}
            >
                {children}
            </div>

            <video
                autoPlay
                loop
                muted
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${videoOpacity === 100 ? 'opacity-80' : 'opacity-20'}`}
                style={containerStyle}
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div
                className="absolute inset-0 bg-blue-500"
                style={{
                    opacity: 0.1,
                    borderRadius: `0 0 ${bottomRadius} ${bottomRadius}`,
                    transition: 'border-radius 1s ease-in-out',
                }}
            ></div>

            <div
                className="absolute bottom-0 left-1/2 flex flex-col justify-center items-center mb-5 transform -translate-x-1/2 h-14 text-white z-30 animate-pulse cursor-pointer"
                style={{ animationDuration: "4000ms" }}
            >
                <KeyboardDoubleArrowDownIcon
                    onClick={ScrollFun}
                    className="animate-bounce"
                    style={{ fontSize: "50px", animationDuration: "400ms", animationDelay: "3000ms" }}
                />
                <h1 className='text-xs'>Scroll for more</h1>
            </div>
        </div>
    );
};

export default HeroSection;
