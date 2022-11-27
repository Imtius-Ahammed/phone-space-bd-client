import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                   
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                   Name
                       
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                    Product Name
                       
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                    Email
                      
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                    Order Time
                      
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                    Price
                      
                    </div>
                </th>
                <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">
                    Payment
                      
                    </div>
                </th>
               
            </tr>
        </thead>
        <tbody>

        {
      orders.map((order,i)=>    <tr key={order._id} className="bg-black dark:bg-sky-100 dark:border-sky-300 text-black font-semibold">
      <th scope="row" className="py-4 px-6 font-medium text-black whitespace-nowrap">
          {i+1}
      </th>
      <td className="py-4 px-6">
         {order.name}
      </td>
      <td className="py-4 px-6">
         {order.title}
      </td>
      <td className="py-4 px-6">
          {order.email}
      </td>
      <td className="py-4 px-6">
          {order.datatime}
      </td>
      <td className="py-4 px-6">
          {order.price}
      </td>
      <td className="py-4 px-6">
      {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                     
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <span className="text-primary">Paid</span>
                  )}
      </td>
    
  </tr>
      )
     }
           
          
         
        </tbody>
     
     
    </table>
</div>


  );
};

export default MyOrders;