import React from 'react';


const CategoryData = ({phonedata, setPhones}) => {
  
  const{img,title,_id,original_price,resale_price,used_time,location,seller} = phonedata;
  console.log(phonedata)
 

  return (
    
    <div  className="card bg-base-100 shadow-xl">
      
    <figure>
      <img className='lg:h-[300px]' src={img} alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        <p>{title}</p>
        
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <h1 className='text-xl'> Seller: <strong>{seller}</strong></h1>
      <p>Product Id: <strong>{_id}</strong></p>
      <p>Original Price:<span className='font-medium text-red-400'> $ {original_price}</span></p>
      <p>Resale Price: <span className='font-medium text-red-400'> $ {resale_price}</span></p>
      <p>Used For:  <span className='font-medium'>{used_time}</span></p>
      <p>Address:  <span className='font-medium'>{location}</span></p>
      <div className="card-actions justify-end">
        <div className="card-actions  justify-center "><label className='btn btn-outline' onClick={()=>setPhones(phonedata)} htmlFor="buy-modal">Buy Now</label></div>
      
       
      </div>
    </div>
  </div>
  );
};

export default CategoryData;