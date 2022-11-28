import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const AdvertiseProducts = () => {
  const [advertise,setAdvertise]  =useState([])
 

  
 

  useEffect(()=>{
fetch('http://localhost:5000/addproduct/seller/advertised')
.then(res=> res.json())
.then(data=>setAdvertise(data))
  },[])
  return (
  <div>
    {
      advertise?.length === 0 ? <></> : <>  <section className='mt-16'>
        <img className='w-full ' src="https://webbullindia.com/icon/Webbull_Banner-dm.jpg" alt="" />
         <div className='bg-base-300 py-6'><h2 className='lg:text-5xl text-3xl  font-bold text-center '>Advertised Products</h2></div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 m-3'>
       
        {
          advertise.map(ads =><div key={ads._id}  className="card bg-base-100  shadow-xl mb-16">
      
          <figure>
            <img className='lg:h-[350px] w-full' src={ads.img} alt="product" />
          </figure>
          <div className="card-body bg-sky-200">
            <h2 className="card-title">
              <p>{ads.name}</p>
              
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <h1 className='text-xl'> Seller: <strong>{ads.seller}</strong></h1>
            <h1 className='text-xl'> Product: <strong>{ads.name}</strong></h1>
            <p>Original Price:<span className='font-medium text-red-400'>${ads.original_price}</span></p>
            <p>Resale Price: <span className='font-medium text-red-400'>${ads.resale_price}</span></p>
            <p>Condition:  <span className='font-medium'>{ads.condition}</span></p>
            <p>Phone:  <span className='font-medium'>{ads.phone}</span></p>
            <p>Location:  <span className='font-medium'>{ads.location}</span></p>
            <p>Year Of Purchase:  <span className='font-medium'>{ads.year}</span></p>
            <p>Used Duration:  <span className='font-medium'>{ads.used_time}</span></p>
            <p>Description:  <span >{ads.description}</span></p>
            
            <div className="card-actions justify-end">
              <Link className='text-xl font-bold underline text-red-400 shadow-md' to={`/category/${ads.category_id}`} >Go to product Category</Link>

     
            
             
            </div>
          </div>
        </div> )
        }

      </div>
    
      
    </section></>
    }
  </div>
  );
};


export default AdvertiseProducts;