
import React from 'react';
import { Link } from 'react-router-dom';
import accessory1 from '../components/assets/wheels.png'; 
import accessory2 from '../components/assets/coilovers.png';
import accessory3 from '../components/assets/breaks.png';
import accessory4 from '../components/assets/airF.png';
import accessory5 from '../components/assets/oilFilters.png';
import accessory6 from '../components/assets/sparkP.png';
import accessory7 from '../components/assets/afEx.png'; 
import './ProductList.css'; 

const products = [
  { id: 1, name: 'Wheels', image: accessory1 },
  { id: 2, name: 'Coil-suspentions', image: accessory2 },
  { id: 3, name: 'Breaks', image: accessory3 },
  { id: 4, name: 'Air-filters', image: accessory4 },
  { id: 5, name: 'Oil-filters', image: accessory5 },
  { id: 6, name: 'Spark-plugs', image: accessory6 },
  { id: 7, name: 'AfterMarket-exhausts', image: accessory7 },
  
];

const ProductList = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-white mb-4">Accessories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="text-center">
            <div className="product-item">
              <img src={product.image} alt={product.name} className="product-image cursor-pointer" />
              <p className="product-name mt-2 text-lg font-medium text-white">{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
