import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyNowModal = ({phones,setPhones}) => {
  const { user } = useContext(AuthContext);
  const {title,resale_price} = phones;
  const handleBuy = (event) => {

    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const name = form.name.value;
    const price = form.price.value;
    const email = form.email.value;
    const phone = form.phone.value;
  };
    // const booking = {
     
     
    //   title,
    //   name,
      
    //   email,
    //   phone,
    //   price,
    // };
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
              name="title"
              type="text"
              disabled
              defaultValue={title}
              placeholder="Your Name"
              className="input w-full "
            />
            <input
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="Email Address"
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
              name="price"
              type="text"
              disabled
              defaultValue={resale_price}
              placeholder="Email Address"
              className="input w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full "
            />

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