import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 p-8 rounded shadow-md w-full max-w-9xl">
        <h3 className="text-3xl font-bold mb-6 text-center text-white">About HM Service Center</h3>
        
        <p className="mb-4 text-white">
          Welcome to HM Service Center, your trusted destination for all your vehicle service and repair needs.
          With years of experience in the automotive industry,
          we are committed to providing top-quality service and ensuring customer satisfaction.
        </p>
        <p className="mb-4 text-white">
          At HM Service Center, we have a team of highly skilled technicians who specialize in 
          diagnosing, repairing, and maintaining various vehicle makes and models. 
          Our technicians stay updated with the latest advancements in automotive technology to ensure accurate and efficient repairs.
        </p>
        <p className="mb-4 text-white">
          We pride ourselves on using genuine parts and high-quality materials to ensure the longevity and performance of your vehicle.
          Whether you need routine maintenance or complex repairs, you can trust us to deliver exceptional service at competitive prices.
        </p>
        <p className="mb-4 text-white">
          Customer satisfaction is our top priority. We strive to provide transparent pricing, detailed estimates,
          and clear communication throughout the service process. 
          Our friendly and knowledgeable staff is always ready to answer your questions and provide the best solutions for your vehicle.
        </p>
        <p className="text-white">
          Visit HM Service Center today and experience the difference. We are here to keep your vehicle running smoothly and safely on the road.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
