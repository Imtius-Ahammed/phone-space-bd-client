import React from "react";

const Buffering = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
       <button className="btn loading">loading</button>
      </div>
    </div>
  );
};

export default Buffering;