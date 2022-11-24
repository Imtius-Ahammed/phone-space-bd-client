
import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import CategoryData from "./CategoryData";

const UniqueCategories = () => {

  const categoryData = useLoaderData();
  const [phones, setPhones] = useState(null);
 
  

  return (
 

    <section className="mt-16">
       <div className="grid lg:grid-cols-3 grid-cols-1 gap-5  m-3">
      {
        categoryData.map(data=><CategoryData key={data._id} phonedata={data} setPhones={setPhones}></CategoryData> )
  
      }
      {
        phones &&(
          <BuyNowModal phones={phones} setPhones={setPhones}></BuyNowModal>
        )
      }
     
     </div>
    </section>


  
 
  );
};

export default UniqueCategories;
