import React from "react";
import { Oval } from "react-loader-spinner";

const InterfaceLoader = () => {
  return (
    <div className='fixed inset-0 bg-black flex flex-col items-center justify-center z-50'>
      <Oval
        height={80}
        width={80}
        color="#ffffff"
        secondaryColor="#cccccc"
        strokeWidth={4}
        strokeWidthSecondary={2}
        ariaLabel="oval-loading"
        visible={true}
      />
      <p className="text-white mt-4 text-lg">Starting...</p>
    </div>
  );
};

export default InterfaceLoader;
