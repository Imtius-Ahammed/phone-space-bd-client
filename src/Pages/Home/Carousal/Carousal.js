import React from 'react';
import { Link } from 'react-router-dom';

const Carousal = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link to="#slide4" className="btn btn-circle">❮</Link> 
      <Link to="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt=''  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link to="#slide1" className="btn btn-circle">❮</Link> 
      <Link to="#slide3" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" alt=''  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link to="#slide2" className="btn btn-circle">❮</Link> 
      <Link to="#slide4" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full"  alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link to="#slide3" className="btn btn-circle">❮</Link> 
      <Link to="#slide1" className="btn btn-circle">❯</Link>
    </div>
  </div>
</div>
  );
};

export default Carousal;