import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success(" Successfully Added Services");

const AddAproduct = () => {
  return (
     <form  className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A product now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
          <div className="card-body lg:w-[700px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">service_id</span>
              </label>
              <input
                name="service_id"
                type="text"
                placeholder="service_id"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="img"
                type="text"
                placeholder="img"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="border"
                name="description"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button onClick={notify} className="btn btn-primary">
                Submit
              </button>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </form>
  );
 
};

export default AddAproduct;