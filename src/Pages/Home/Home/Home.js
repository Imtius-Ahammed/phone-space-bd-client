import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Carousal from '../Carousal/Carousal';
import DataPolicy from '../DataPolicy/DataPolicy';

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Carousal></Carousal>
      <AboutSection></AboutSection>
      <DataPolicy></DataPolicy>

    </div>
  );
};

export default Home;