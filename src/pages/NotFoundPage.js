import React from 'react';
import '../css-files/NotFoundPage.css';

const NotFoundPage = () => {
  const dots = Array.from({ length: 3 }, (_, index) => (
    <div
      key={index}
      className="h-5 w-5 bg-white rounded-md mx-1 animate-spin"
    />
  ));

  return (
    <div className='bg-transparent min-h-screen flex flex-col items-center justify-center'>
      <div className='relative flex flex-col items-center  '>
        <div className='p-2 flex flex-col items-center '>
          <div className="animate-bounce  flex duration-1000 justify-center items-end h-24 w-24">
            <div
              className="bg-white rounded-md p-5 animate-alternate-colors"
              style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}
            >
              <h1 className='font-bold text-alternate-colors text-4xl '>B<sup>3</sup></h1>
            </div>
          </div>

          <div className='h-10 flex justify-center items-center '>
            {dots}
          </div>
        </div>
        <h1 className='text-white font-bold  text-xl lg:text-5xl mt-10'>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
