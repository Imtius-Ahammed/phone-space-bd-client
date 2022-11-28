import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';


const DataPolicy = () => {
  return (
    <section className="text-gray-600  body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Terms & Conditions</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">If you have changed your mind for whatever reason we offer a 14 day returns period starting the day after you receive your order, which is extended to 30 days for faulty items.</p>
    </div>
    <div className="flex flex-wrap w-full sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
         
          <span className="title-font font-medium"> Ensure that the handset (s) is in exactly the same condition as it was when received and that it has not been damaged whilst in your care.</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
          <span className="title-font font-medium"> Please contact us to request a returns number.</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
          <span className="title-font font-medium">  Backup all the data from your handset, then factory reset and wipe your handset</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
          <span className="title-font font-medium">Fill out the returns form and send with your handset – please note that failure to provide the full information on your returns form will result in a delay in processing your return.</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
          <span className="title-font font-medium"> Carefully package your item including all accessories originally received and send it to the following address:</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <FaCheckDouble className='text-indigo-500 w-8 h-6 mr-4 flex-shrink-0'></FaCheckDouble>
          <span className="title-font font-medium">Send via a secure tracked and insured service – please note that the item is your responsibility until it is safely received at our warehouse.</span>
        </div>
      </div>
    </div>
   
  </div>
</section>
  );
};

export default DataPolicy;