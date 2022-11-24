import React from 'react';

const CategoryData = ({data}) => {
  console.log(data);
  const{img} = data;
 

  return (
    <div  className="card bg-base-100 shadow-xl">
    <figure>
      <img className='lg:h-[300px]' src={img} alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        <p>{data.title}</p>
        
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <h1 className='text-xl'> Seller: <strong>{data.seller}</strong></h1>
      <p>Product Id: <strong>{data._id}</strong></p>
      <p>Original Price:<span className='font-medium text-red-400'> $ {data.original_price}</span></p>
      <p>Resale Price: <span className='font-medium text-red-400'> $ {data.resale_price}</span></p>
      <p>Used For:  <span className='font-medium'>{data.used_time}</span></p>
      <p>Address:  <span className='font-medium'>{data.location}</span></p>
      <div className="card-actions justify-end">
        <div className="btn btn-outline ">Buy Now</div>
       
      </div>
    </div>
  </div>
  );
};

export default CategoryData;