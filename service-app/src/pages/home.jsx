// components/Banner.js
import React from 'react';
//import ImageSlideshow from '../components/Banner/ImageSlideshow';
//import Ban from '../components/assets/ban.jpg';
//import Banners from '../components/Banner/banner';
import Banner from '../components/Banner/banner';
import ImageSlideshow from '../components/Banner/ImageSlideshow';

const Home = () => {
  
  return (
    
     <Banner/>,
     <ImageSlideshow/>,
     <Banner 
     heading="Welcome to HM Vehicle Service Center" 
     subheading="At HM Vehicle Service Center, we are dedicated to providing top-quality automotive services to our valued customers. Whether you need routine maintenance, repairs, or diagnostics for your vehicle, our experienced technicians are here to help." 
/>
   
  );
}

export default Home;
