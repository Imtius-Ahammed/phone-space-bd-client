import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Buffering from '../../Shared/Buffering/Buffering';
import DeleteActionModal from '../../Shared/DeleteActionModal/DeleteActionModal';

const AllBuyers = () => {
  const [deleteUser,setDeletingUser] = useState(null);

  const cancelModal = ()=>{
    setDeletingUser(null);
  }


  const {data: buyers=[],isLoading,refetch}= useQuery({
    queryKey: ['buyers'],
    queryFn: async() =>{
     try{
      const res = await fetch('http://localhost:5000/buyers/buyer',{
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

  const handleDeleteUser = buyer=>{
    console.log(buyer)
   
    fetch(`http://localhost:5000/buyers/${buyer._id}`,{
      method: 'DELETE',
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }

    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        refetch();
        toast.success(`${buyer.name} deleted successfully`)
      }
      
    })
  }
  if(isLoading){
    return <Buffering></Buffering>
  }
  return (
    <div>
      <h2>Thi si buyers</h2>

          
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                   
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                    Name
                       
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                       Email
                       
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Role
                      
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                      Delete
                      
                    </div>
                </th>
               
            </tr>
        </thead>
        <tbody>

        {
      buyers.map((buyer,i)=>    <tr key={buyer._id} class="bg-black dark:bg-sky-100 dark:border-sky-300 text-black font-semibold">
      <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap">
          {i+1}
      </th>
      <td class="py-4 px-6">
         {buyer.name}
      </td>
      <td class="py-4 px-6">
         {buyer.email}
      </td>
      <td class="py-4 px-6">
          {buyer.role}
      </td>
      <td class="py-4 px-6 ">
      <label
                      onClick={() => setDeletingUser(buyer)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
         
      </td>
  </tr>
      )
     }
           
          
         
        </tbody>
     
     
    </table>
</div>
{
  deleteUser && <DeleteActionModal
  name={`Are you sure you want to delete ?`}
  message={`Deleting ${deleteUser.name} will be lost forever`}
  cancelModal = {cancelModal}
  successDelete={handleDeleteUser}
  modalInfo = {deleteUser}
  ></DeleteActionModal>
}
    </div>
  );
};

export default AllBuyers;