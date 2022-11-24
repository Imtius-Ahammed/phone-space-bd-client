import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PhoneCategories = () => {
  const [categories,setCategories]  =useState([])
  console.log(categories)

  useEffect(()=>{
fetch('http://localhost:5000/phoneCategories')
.then(res=> res.json())
.then(data=>setCategories(data))
  },[])
  return (
    <section className='mt-16'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 m-3'>
        {
          categories.map(category =><div key={category._id} category={category} className="card w-full bg-base-100 shadow-xl">
          <figure><img className='lg:h-[400px]' src={category.img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{category.title}</h2>
            <p>{category.info}</p>
            <div className="card-actions justify-end">
              <Link to={`/category/${category.category_id}`}><button  className="btn btn-primary">Buy Now</button></Link>
            </div>
          </div>
        </div> )
        }

      </div>
      
    </section>
  );
};

export default PhoneCategories;