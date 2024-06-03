// components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import accessory1 from '../components/assets/wheels.png'; // Import your images
import accessory2 from '../components/assets/coilovers.png';
import accessory3 from '../components/assets/breaks.png';
import accessory4 from '../components/assets/airF.png';
import accessory5 from '../components/assets/oilFilters.png';
import accessory6 from '../components/assets/sparkP.png';
import accessory7 from '../components/assets/afEx.png'; 

const products = [
  { id: 1, name: 'Accessory 1', image: accessory1, price: '$20', description: 'Description of Accessory 1' },
  { id: 2, name: 'Accessory 2', image: accessory2, price: '$30', description: 'Description of Accessory 2' },
  { id: 3, name: 'Accessory 3', image: accessory3, price: '$40', description: 'Description of Accessory 3' },
  { id: 4, name: 'Accessory 4', image: accessory4, price: '$50', description: 'Description of Accessory 4' },
  { id: 5, name: 'Accessory 5', image: accessory5, price: '$60', description: 'Description of Accessory 5' },
  { id: 6, name: 'Accessory 6', image: accessory6, price: '$70', description: 'Description of Accessory 6' },
  { id: 7, name: 'Accessory 7', image: accessory7, price: '$80', description: 'Description of Accessory 7' },
 
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl mb-4">{product.price}</p>
          <p className="mb-4">{product.description}</p>
          {/* Add more details or functionality as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
