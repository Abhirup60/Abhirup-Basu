import React from "react";

const InterfaceLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0e0b1f]">
      <div className="relative w-12 h-12 mb-4">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 8)}%`,
              left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 8)}%`,
              transform: "translate(-50%, -50%)",
              animation: `spin 1s linear infinite`,
              animationDelay: `${i * 0.125}s`,
            }}
          />
        ))}
        <style>
          {`
            @keyframes spin {
              0% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
              100% { opacity: 0.2; transform: scale(0.8); }
            }
          `}
        </style>
      </div>
      <p className="text-white text-lg animate-pulse">Loading...</p>
    </div>
  );
};

export default InterfaceLoader;
