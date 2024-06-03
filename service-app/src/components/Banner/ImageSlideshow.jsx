// components/ImageSlideshow.js
import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/acc.jpg';
import slide2 from '../assets/wheels.jpg';
import slide3 from '../assets/bcc.jpg';
import slide4 from '../assets/carwash.jpg';
import slide5 from '../assets/wai.jpg';
import '../Banner/ImageSlideshow.css'; // Import the CSS file

const ImageSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
  <div className="container mx-auto margin-bottom-5px py-20 slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="slideshow-image" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="slideshow-image" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="slideshow-image" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" className="slideshow-image" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" className="slideshow-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlideshow;
