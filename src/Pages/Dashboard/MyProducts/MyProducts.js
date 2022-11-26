import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Buffering from '../../Shared/Buffering/Buffering';


const MyProducts = () => {


  const {data: dataSets=[],isLoading}= useQuery({
    queryKey: ['dataSets'],
    queryFn: async() =>{
     try{
      const res = await fetch('http://localhost:5000/addproduct/sellerProduct',{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
     }
     catch(error){

     }
    }
  });
  if(isLoading){
    return <Buffering></Buffering>
  }

 
 
  
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 m-3'>
      {
        dataSets.map(data=><div key={data._id}  className="card  bg-base-100 shadow-xl">
        <figure><img src={data.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.location}</p>
          <p>{data.location}</p>
          <p>{data.location}</p>
          <p>{data.location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Advertised Button</button>
          </div>
        </div>
      </div>)

      }
    </div>
    
  );
};

export default MyProducts;