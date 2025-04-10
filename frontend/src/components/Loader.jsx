import React from 'react';
import { InfinitySpin  } from 'react-loader-spinner'; 

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <InfinitySpin 
        color="#33991d"
        size="100"
        text="Loading..."
        textColor="#a7cd21"
        visible={true}
      />
    </div>
  );
};

export default Loader;
