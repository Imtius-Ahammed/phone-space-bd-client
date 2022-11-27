import React from "react";
import used2 from "../../../assets/used2.png";

const AboutSection = () => {
  return (
    <section className="mt-32 m-3 ">
      <div className="hero   bg-base-200 ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={used2} className=" -mt-32 lg:w-1/2 lg:h-[500px] " alt="" />
          <div>
            <h1 className="lg:text-5xl text-3xl font-bold">Welcome to PhoneSpaceBD</h1>
            <p className="py-6">
              PhoneSpaceBD is one of the largest retail stockists of
              used mobile phones in the BD. We physically stock thousands of
              handsets across all the main manufacturers from the older retro
              models right up to the latest devices so if you’re looking for an
              affordable quality used mobile, then you are certainly in the
              right place. 
              In the unlikely event that we don’t have the exact
              model you’re looking for it is always worth giving us a call as we
              have new stock arriving on a daily basis and if we don’t have it
              our friendly customer service team will be more than happy to
              place a back order with our purchasing team.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
