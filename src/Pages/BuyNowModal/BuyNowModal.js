import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyNowModal = ({phones,setPhones}) => {
  const { user } = useContext(AuthContext);
  const {name,resale_price} = phones;
  const handleBuy = (event) => {

    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const name = form.name.value;
    const price = form.price.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const datetime = form.datetime.value;
  
    const orderBooking = {
     
     
      title,
      name,
      
      email,
      phone,
      price,
      datetime
      
    };
    console.log(orderBooking)
    
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setPhones(null)
          toast.success("Order Confirmed");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  
  return (
    <>
      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            onSubmit={handleBuy}
            className="grid grid-cols-1 gap-3 mt-10"
          >
         
           
          
            <input
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full "
            />
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full "
            />
              <input
              name="title"
              type="text"
              disabled
              value={name}
              placeholder="Product Name"
              className="input w-full "
            />
            <input
              name="price"
              type="text"
              disabled
              
              value={resale_price}
              placeholder="Price"
              className="input w-full "
            />
            <input
              required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full "
            />
            <input
              required
              name="address"
              type="address"
              placeholder="Meeting Address"
              className="input w-full "
            />
             <input required className="input w-full " name='datetime' type="datetime-local"/>

            <input
              className="btn btn-accent w-full "
              type="submit"
              value="Submit"
            />
           
          </form>
        </div>
      </div>
    </>
  );
};


export default BuyNowModal;