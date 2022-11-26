import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Buffering from '../../Shared/Buffering/Buffering';
import ProductDeleteModal from '../../Shared/ProductDeleteModal/ProductDeleteModal';


const MyProducts = () => {
  const [deleteProduct,setDeletingProduct] = useState(null);
  
  const cancelModal = ()=>{
    setDeletingProduct(null);
  }



  const {data: dataSets=[],isLoading, refetch}= useQuery({
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

  
  const handleDeleteProduct = product=>{
    console.log(product)
   
    fetch(`http://localhost:5000/addproduct/${product._id}`,{
      method: 'DELETE',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        refetch();
        toast.success(`${product.name} deleted successfully`)
      }
      
    })
  }
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
          <label
                      onClick={() => setDeletingProduct(data)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
            <button  className="btn btn-primary">Advertised Button</button>
          </div>
        </div>
      </div>)

      }

{
  deleteProduct && <ProductDeleteModal
  name={`Are you sure you want to delete ?`}
  message={`Deleting ${deleteProduct.name} will be lost forever`}
  cancelModal = {cancelModal}
  successDelete={handleDeleteProduct}
  modalInfo = {deleteProduct}
  ></ProductDeleteModal>
}
    </div>
    
  );
};

export default MyProducts;