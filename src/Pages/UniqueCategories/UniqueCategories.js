
import {  useLoaderData } from "react-router-dom";
import CategoryData from "./CategoryData";

const UniqueCategories = () => {

  const categoryData = useLoaderData();
 
  

  return (
 

    <section className="mt-16">
       <div className="grid lg:grid-cols-3 grid-cols-1 gap-5  m-3">
      {
        categoryData.map(data=><CategoryData key={data._id} data={data}></CategoryData> )
  
      }
     </div>
    </section>


  
 
  );
};

export default UniqueCategories;
