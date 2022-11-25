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
    <div>
      <TopNavbar></TopNavbar>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet></Outlet>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
      {
        !isAdmin && !isSeller && <><li><Link to='/dashboard'>All Orders</Link></li></>
      }
     {
      isAdmin && <>
       <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
      
      
      </>
    
     }
     {
      isSeller && !isAdmin && !isBuyer&& <>
       <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
      
      </>
     }
     
      
    </ul>
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;