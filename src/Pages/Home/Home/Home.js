import React from 'react';
import Title from '../../../hooks/Title';
import AboutSection from '../AboutSection/AboutSection';
import AdvertiseProducts from '../AdvertiseProducts/AdvertiseProducts';
import Carousal from '../Carousal/Carousal';
import DataPolicy from '../DataPolicy/DataPolicy';
import PhoneCategories from '../PhoneCategories/PhoneCategories';


const Home = () => {
  Title('Home')
  return (
    
    <div className='bg-sky-100'>
      
      <Carousal></Carousal>
      <AboutSection></AboutSection>
      <PhoneCategories></PhoneCategories>
      <DataPolicy></DataPolicy>
      <AdvertiseProducts></AdvertiseProducts>

    </div>
  );
};

export default Home;