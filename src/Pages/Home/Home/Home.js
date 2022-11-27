import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Carousal from '../Carousal/Carousal';
import DataPolicy from '../DataPolicy/DataPolicy';
import PhoneCategories from '../PhoneCategories/PhoneCategories';


const Home = () => {
  return (
    <div className='bg-sky-100'>
      
      <Carousal></Carousal>
      <AboutSection></AboutSection>
      <PhoneCategories></PhoneCategories>
      <DataPolicy></DataPolicy>

    </div>
  );
};

export default Home;