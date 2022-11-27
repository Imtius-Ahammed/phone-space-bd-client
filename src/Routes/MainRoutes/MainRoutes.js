import { createBrowserRouter, Link } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main"
import Blogs from "../../Pages/Blogs/Blogs";
import Contacts from "../../Pages/Contacts/Contacts";
import AddAproduct from "../../Pages/Dashboard/AddAproduct/AddAproduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

import UniqueCategories from "../../Pages/UniqueCategories/UniqueCategories";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ProtectedAdminRoutes from "../ProtectedAdminRoutes/ProtectedAdminRoutes";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/login',
        element:<Login></Login>

      },
      {
        path:'/register',
        element:<Register></Register>

      },
      {
        path:'*',
        element:<div>
          <div className="mt-16">
          <h2 className="text-4xl text-center">Return to <Link className="font-bold underline cursor-pointer text-blue-500" to='/'>Home Page</Link></h2>
          </div>
          <div className="flex justify-center">
          <img className="w-[800px] "  src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="" />
          </div></div>
        
      },
      {
        path:'/category/:category_id',
        element:<PrivateRoutes><UniqueCategories></UniqueCategories></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/category/${params.category_id}`
          ),

      }
    ]
  },
  {
    path:"/dashboard",
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path:'/dashboard',
        element:<MyOrders></MyOrders>
      },
      {
        path:'/dashboard/allbuyers',
        element:<ProtectedAdminRoutes><AllBuyers></AllBuyers></ProtectedAdminRoutes>
      },
      {
        path:'/dashboard/allsellers',
        element:<ProtectedAdminRoutes><AllSellers></AllSellers></ProtectedAdminRoutes>
      },
      {
        path:'/dashboard/myproducts',
        element:<MyProducts></MyProducts>
        
      },
     
      {
        path:'/dashboard/addproduct',
        element:<AddAproduct></AddAproduct>
      },
      {
        path:'/dashboard/reporteditems',
        element:<ProtectedAdminRoutes><ReportedItems></ReportedItems></ProtectedAdminRoutes>
      }
    ]
  }
])

export default router;