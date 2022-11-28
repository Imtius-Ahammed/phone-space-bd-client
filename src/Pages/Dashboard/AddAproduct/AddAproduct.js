import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Title from "../../../hooks/Title";

const AddAproduct = () => {
  Title('Add A Products')
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller = form.seller.value;
    const seller_role = form.seller_role.value;
    const used_time = form.used_time.value;

    const original_price = form.original_price.value;
    const resale_price = form.resale_price.value;
    const name = form.name.value;

    const condition = form.condition.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const category_id = form.category_id.value;
    const year = form.year.value;
    const img = form.img.value;
    const description = form.description.value;

    const newProduct = {
      seller,
      seller_role,
      used_time,

      original_price,
      resale_price,
      name,

      condition,
      phone,
      location,
      category_id,
      year,
      img,

      description,
    };
    fetch("https://phone-space-bd-server.vercel.app/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Succesfully Added Product");
          form.reset();
          navigate("/dashboard/myproducts");
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <form onSubmit={handleAddProduct} className="hero bg-sky-100">
      <div className="hero-content  hover:shadow-xl hover:shadow-blue-400 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A product now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-sky-200">
          <div className="card-body lg:w-[700px]">
            <div className="form-control">
              <input
                name="seller"
                disabled
                type="text"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="seller_role"
                disabled
                type="text"
                defaultValue={"sellerProduct"}
                placeholder="Seller Role"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="img"
                type="text"
                placeholder="Product image"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full  mb-5">
              <select
                type="text"
                name="condition"
                required
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Condition
                </option>
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>

            <div className="form-control">
              <input
                name="phone"
                type="text"
                required
                placeholder="phone"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full ">
              <select
                type="text"
                name="location"
                placeholder="Location Division"
                required
                className="select select-bordered"
              >
                <option disabled selected>
                  Select Location
                </option>
                <option>Dhaka</option>
                <option>Comilla</option>
                <option>Sylhet</option>
                <option>Rajshahi</option>
                <option>Chittagong</option>
                <option>Maymensingh</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Rangpur</option>
              </select>
            </div>
            <div className="form-control w-full  ">
              <select
                type="text"
                name="category_id"
                placeholder="Product Category"
                required
                className="select select-bordered"
              >
                <option disabled selected>
                  Category
                </option>
                <option>featurePhones</option>
                <option>smartPhones</option>
                <option>tablets</option>
              </select>
            </div>
            <div className="form-control">
              <label className="font-semibold">Purchase Date</label>

              <input
                name="year"
                type="date"
                placeholder="Purchase Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="used_time"
                type="text"
                placeholder="Used duration"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="original_price"
                type="text"
                placeholder="Original price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                name="resale_price"
                type="text"
                placeholder="Resale price"
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
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddAproduct;
