import React from "react";

const Banner = ({ background, title, description }) => {
  return (
    <>
      {/* Banner */}
      <div className={`${background} text-white p-8 rounded-lg shadow-lg mb-8`}>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
      </div>
    </>
  );
};

export default Banner;
