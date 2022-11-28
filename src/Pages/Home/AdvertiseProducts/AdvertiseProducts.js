import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdvertiseProducts = () => {
  const advertiseData = useLoaderData()
  console.log(advertiseData);
  return (
    <div>
      <h2>Advertisement</h2>
      
    </div>
  );
};

export default AdvertiseProducts;