import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main"
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import CategoryData from "../../Pages/UniqueCategories/CategoryData";
import UniqueCategories from "../../Pages/UniqueCategories/UniqueCategories";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
        path:'/category/:category_id',
        element:<UniqueCategories></UniqueCategories>,
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
        path:'/dashboard'
      }
    ]
  }
])

export default router;