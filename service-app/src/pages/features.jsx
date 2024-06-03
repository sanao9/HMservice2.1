import React from 'react';
import featuredImg from '../components/assets/png2.PNG';
import featuredImg2 from '../components/assets/png3.PNG';
import featuredImg3 from '../components/assets/png4.PNG';

const Features = () => {
  return (
    <div className="my-12 md:px-8 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/2">
          <h3 className="text-3xl text-white font-bold mb-3">Why we are better than others</h3>
          <p className="text-base text-white leading-relaxed">
            Our vehicle service center stands out from others due to our comprehensive service history, tire safety focus, transparent pricing, customer protection measures, comfort and convenience offerings, and qualified technicians with advanced equipment. We strive to provide you with the best service possible and ensure your satisfaction.
          </p>
        </div>
        {/* Featured cards */}
        <div className="lg:w-1/2 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 bg-opacity-10 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center hover:transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <img src={featuredImg} alt="Featured 1" className="w-full h-auto mb-4" />
            <h5 className="text-xl font-semibold text-white">Manufacturer-recommended service</h5>
          </div>
          <div className="bg-gray-900 bg-opacity-10 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center hover:transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <img src={featuredImg2} alt="Featured 2" className="w-full h-auto mb-4" />
            <h5 className="text-xl font-semibold text-white">Diagnostic checks</h5>
          </div>
          <div className="bg-gray-900 bg-opacity-10 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center hover:transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <img src={featuredImg3} alt="Featured 3" className="w-full h-auto mb-4" />
            <h5 className="text-xl font-semibold text-white">Service history documentation</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
