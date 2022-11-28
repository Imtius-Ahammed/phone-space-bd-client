import React from 'react';

const ProductDeleteModal = ({name,message,cancelModal,modalInfo,successDelete}) => {
  return (
    <div>
      



<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box bg-sky-200 hover:shadow-xl hover:shadow-blue-500">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=>successDelete(modalInfo)}  htmlFor="confirmation-modal" className="btn btn-primary">Delete!</label>
      <button onClick={cancelModal} className='btn btn-outline'>Cancel</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductDeleteModal;