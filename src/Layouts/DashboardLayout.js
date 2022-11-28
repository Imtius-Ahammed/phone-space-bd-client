import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

import TopNavbar from '../Pages/Shared/TopNavbar/TopNavbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div >
      <TopNavbar></TopNavbar>
      <div className="drawer drawer-mobile ">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>
    
  </div> 
  <div className="drawer-side bg-sky-50">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-slate-300 text-blue-500 text-xl  ">
      {
        !isAdmin && !isSeller && <><li><Link to='/dashboard'>All Orders</Link></li></>
      }
     {
      isAdmin && <>
       <li className='hover:text-black font-bold hover:bg-sky-400 '><Link to='/dashboard/allsellers'>All Sellers</Link></li>
       <li className='hover:text-black font-bold hover:bg-sky-400 '><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
       <li className='hover:text-black font-bold hover:bg-sky-400 '><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
       
      
      
      </>
    
     }
     {
      isSeller && !isAdmin && !isBuyer&& <>
       <li className='hover:text-black font-bold hover:bg-sky-400 '><Link to='/dashboard'>All Orders</Link></li>
      
       <li className='hover:text-black font-bold hover:bg-sky-400 '><Link to='/dashboard/myproducts'>My Products</Link></li>
       <li className='
       hover:text-black font-bold hover:bg-sky-400'><Link to='/dashboard/addproduct'>Add A Product</Link></li>
      
      </>
     }
     
      
    </ul>
    
  </div>
 
  
</div>

    </div>
    
  );
};

export default DashboardLayout;