import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredProductList,
  addToStoredWishList,
  getWishList,
} from "../utilities/addToStorage";

const GadgetDetails = () => {
  const { gadgetId } = useParams();
  //console.log(gadgetId)

  const detailsData = useLoaderData();
  //console.log(detailsData)

  const productData = detailsData.find(
    (product) => product.product_id === gadgetId
  );

  //console.log(productData);

  const {
    product_id,
    product_title,
    product_image,
    price,
    specification,
    availability,
    rating,
    description,
  } = productData;

  const handleAddToCart = (id) => {
    addToStoredProductList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
    setIsWish(true)
  };

  const fullStar = Math.floor(rating);
  const emptyStar = 5 - Math.round(rating);

  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    const cartListData = getWishList();

    const filteredWishListData = detailsData.filter((data) => cartListData.includes(data.product_id));

    const isWished = cartListData.includes(filteredWishListData.product_id);
console.log(isWished)
    if(isWished) {
      setIsWish(true)
    }
  }, [detailsData])
  

  return (
    <div className="w-full md:h-screen relative mb-36 max-md:h-[250vh]">
      <div className="text-center text-white w-full bg-[#9538E2] pb-32 pt-8">
        <p className="text-2xl font-bold">Product Details</p>
        <p className="text-sm mt-4 text-wrap">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="absolute rounded-xl bg-white w-[70%] min-h-[70%] top-[30%] left-[15%] mx-auto shadow-2xl p-5 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-full md:w-1/2 h-full">
          <img className="h-[90%]" src={product_image} alt={product_title} />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-2">
          <p className="text-2xl font-bold">{product_title}</p>
          <p className="font-semibold">price: ${price}</p>
          <div className="border border-gray-800 px-2 p... rounded-lg text-xs font-bold">
            {availability ? "In Stock" : "Out Of Stock"}
          </div>
          <p className="text-gray-500 font-semibold">{description}</p>
          <p className="font-bold text-xl">Specification</p>
          <ol className="list-decimal ml-8">
            {specification.map((specs, index) => (
              <li key={index}>{specs}</li>
            ))}
          </ol>
          <p className="font-bold">Rating</p>
          <div className="flex items-center gap-3">
            <div>
              {[...Array(fullStar)].map((_, index) => (
                <span
                  key={`fullStar-${index}`}
                  className="text-yellow-400 text-md"
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
              {[...Array(emptyStar)].map((_, index) => (
                <span
                  key={`emptyStar-${index}`}
                  className="text-white/30 text-md"
                >
                  <i className="fa-solid fa-star"></i>
                </span>
              ))}
            </div>
            <div className="border border-gray-800 px-2 rounded-lg text-xs font-bold">{rating}</div>
          </div>
          <div className="flex justify-start items-center gap-3 flex-wrap">
            <button
              onClick={() => handleAddToCart(product_id)}
              className="btn btn-outline bg-[#9538E2] text-white"
            >
              Add To Cart <i className="fa-solid fa-cart-shopping text-xl"></i>
            </button>
            <button
              disabled={isWish}
              onClick={() => handleAddToWishList(product_id)}
              className="btn btn-outline bg-[#9538E2] btn-circle text-white"
            >
              <i className="fa-solid fa-heart text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
