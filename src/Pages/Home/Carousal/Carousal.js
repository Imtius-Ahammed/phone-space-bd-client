import React from 'react';

const Carousal = () => {
  return (
    <div className="carousel w-full lg:h-min mt-16">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://gagadget.com/media/post_big/Redmi_K50_Gaming_Edition_aka_POCO_F4_GT.jpg" className="w-full lg:h-screen" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://static.abc.es/media/tecnologia/2021/02/23/iphone-12-1-kBBG--1248x698@abc.jpg" className="w-full lg:h-screen" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.insider.com/620fb22d462ff20019c5a616?width=1136&format=jpeg" className="w-full lg:h-screen" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://m-cdn.phonearena.com/images/review/5485-wide-two_940/OnePlus-10T-vs-iPhone-13-comparison-Huge-charging-differences" className="w-full lg:h-screen" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Carousal;