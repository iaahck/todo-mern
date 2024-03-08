import React from "react";

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mt-10">
        <div className="animate-ping w-10 h-10 m-8 rounded-full bg-red-800"></div>
        <div className="animate-ping w-10 h-10 m-8 rounded-full bg-black"></div>
        <div className="animate-ping w-10 h-10 m-8 rounded-full bg-white"></div>
      </div>
      <div className="text-center">
        <p className="text-center text-white text-4xl text-bold mb-3">
          loading <br /> please wait .....
        </p>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
