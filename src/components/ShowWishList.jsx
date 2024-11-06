import React from "react";
import { addToStoredProductList } from "../utilities/addToStorage";

const ShowWishList = ({ data }) => {
  const { product_id, product_title, product_image, description, price } = data;

  const handleAddToCart = (id) => {
    addToStoredProductList(id)
  }

  return (
    <div className="w-full p-2 bg-white rounded-xl flex justify-between items-start shadow-xl">
      <div className="flex items-center gap-3">
        <img className="w-24 h-24" src={product_image} alt={product_title} />
        <div>
          <p>{product_title}</p>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <button
            onClick={() => handleAddToCart(product_id)}
            className="btn btn-sm btn-outline bg-[#9538E2] text-white"
          >
            Add To Cart <i className="fa-solid fa-cart-shopping text-xl"></i>
          </button>
        </div>
      </div>
      <button className="btn btn-circle btn-sm">
        <i className="fa-regular fa-circle-xmark text-red-600 text-xl"></i>
      </button>
    </div>
  );
};

export default ShowWishList;
