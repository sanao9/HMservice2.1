// components/Banner.js
import React from 'react';
import ImageSlideshow from '../Banner/ImageSlideshow';
import Ban from '../assets/ban.jpg';

const Banner = ({ banner, heading, subheading }) => {
  return (
    <div className="min-h-screen bg-custom-banner bg-cover bg-center">
      
      <div className="md:px-24 p-4 max-w-screen-3xl mx-auto"> {/* Decreased the top margin */}
     <br/><br/> <ImageSlideshow />
        <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
          <div>
            <img src={Ban} alt="banner" className='lg:h-[386px]' />
          </div>
          <div className="md:w-3/5">
            <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
            <p className='text-[#f5f3f3] text-2xl mb-8'>{subheading}</p>
            <div className='space-x-5 space-y-4'>
              {/* Add buttons or other elements here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
