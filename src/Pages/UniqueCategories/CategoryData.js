import React from 'react';


const CategoryData = ({phonedata, setPhones}) => {
  
  const{img,original_price,resale_price,used_time,location,seller,name,condition,phone,year,description} = phonedata;
  
 

  return (
    
    <div  className="card bg-base-100  shadow-xl mb-16">
      
    <figure>
      <img className='lg:h-[350px] w-full' src={img} alt="product" />
    </figure>
    <div className="card-body bg-sky-100">
      <h2 className="card-title">
        <p>{name}</p>
        
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <h1 className='text-xl'> Seller: <strong>{seller}</strong></h1>
      <h1 className='text-xl'> Product: <strong>{name}</strong></h1>
      <p>Original Price:<span className='font-medium text-red-400'>${original_price}</span></p>
      <p>Resale Price: <span className='font-medium text-red-400'>${resale_price}</span></p>
      <p>Condition:  <span className='font-medium'>{condition}</span></p>
      <p>Phone:  <span className='font-medium'>{phone}</span></p>
      <p>Location:  <span className='font-medium'>{location}</span></p>
      <p>Year Of Purchase:  <span className='font-medium'>{year}</span></p>
      <p>Used Duration:  <span className='font-medium'>{used_time}</span></p>
      <p>Description:  <span >{description}</span></p>
      
      <div className="card-actions justify-end">
        <div className="card-actions  justify-center "><label className='btn btn-outline' onClick={()=>setPhones(phonedata)} htmlFor="buy-modal">Buy Now</label></div>
      
       
      </div>
    </div>
  </div>
  );
};

export default CategoryData;