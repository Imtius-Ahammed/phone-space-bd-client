import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
  const {data: buyers=[]}= useQuery({
    queryKey: ['buyers'],
    queryFn: async() =>{
      const res = await fetch('http://localhost:5000/buyers/seller');
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
      <h2>This is Sellers</h2>

      <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
     {
      buyers.map((buyer,i)=> <tr key={buyer._id}>
        <th>{i+1}</th>
        <td>{buyer.name} <h1 className='font-bold text-success'>{buyer.role}</h1></td>
        <td>{buyer.email}</td>
        <td>Blue</td>
      </tr>
      )
     }
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllSellers;