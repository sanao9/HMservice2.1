import React from 'react';
import './WheelBrand.css';
import wheelBrandImage1 from '../components/assets/anoviaM.PNG';
import wheelBrandImage2 from '../components/assets/ferrada.PNG';


const WheelBrandPage = () => {
  return (
    <div className="container mx-auto mt-30 p-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <h2 className="text-3xl font-bold text-white mb-8">Wheel Brands</h2>
      
      <div className="space-y-10">
        <section className="text-center">
          <img src={wheelBrandImage1} alt="Anovia Titan Wheels" className="max-w-full h-auto rounded-lg mx-auto" />
          <div className="product-details text-white mt-4">
            <h3 className="text-2xl font-semibold mb-2">Anovia Titan Wheels</h3>
            <p className="text-lg mb-2">The Proper Directional Anovia Titan is a five-spoke car wheel available in all popular finishes, sizes, and bolt patterns.</p>
            <ul className="list-disc list-inside mb-2">
              <li>Brand: Anovia</li>
              <li>Model: Titan</li>
              <li>Finishes Available: Black, Gray/Silver & White</li>
            </ul>
            <p className="text-lg font-medium">Price: $299.99</p>
          </div>
        </section>

        <section className="text-center">
          <img src={wheelBrandImage2} alt="Ferrada CM2 Wheels" className="max-w-full h-auto rounded-lg mx-auto" />
          <div className="product-details text-white mt-4">
            <h3 className="text-2xl font-semibold mb-2">Ferrada CM2 Wheels</h3>
            <p className="text-lg mb-2">With an ultra-concave 10-spoke design, the Ferrada CM2 has all the good looks and aggressive fitment you need for an incredible stance.</p>
            <ul className="list-disc list-inside mb-2">
              <li>Brand: Ferrada</li>
              <li>Model: CM2</li>
              <li>Finishes Available: Black, Bronze/Tan & Gray/Silver</li>
            </ul>
            <p className="text-lg font-medium">Price: $299.99</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WheelBrandPage;
