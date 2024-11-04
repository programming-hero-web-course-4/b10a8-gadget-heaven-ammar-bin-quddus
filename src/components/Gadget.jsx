import React from "react";

const Gadget = ({ gadget }) => {
  const { product_image, price, product_title } = gadget;

  return (
    <div className="p-2 w-full bg-[#9538E2]/50 shadow-xl rounded-xl flex flex-col gap-3 justify-center items-start">
      <div className="w-full flex justify-center items-center">
        <img className="w-48 h-48" src={product_image} alt={product_title} />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-3 text-center">
        <p className="text-lg font-bold">{product_title}</p>
        <p className="text-md font-semibold">Price: ${price}</p>
        <button className="bg-[#9538E2] btn btn-outline btn-sm text-white text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Gadget;
