import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    product_title,
    product_image,
    price,
    specification,
    availability,
    rating,
    description,
  } = productData;

  return (
    <div className="w-full h-screen relative mb-36 max-md:h-[250vh]">
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
          <img
            className="h-[90%]"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-2">
          <p className="text-2xl font-bold">{product_title}</p>
          <p className="font-semibold">price: ${price}</p>
          <button className="btn btn-xs btn-outline">{availability ? 'In Stock' : 'Out Of Stock'}</button>
          <p className="text-gray-500 font-semibold">{description}</p>
          <p className="font-bold text-xl">Specification</p>
          <ol className="list-decimal ml-8">
            {
                specification.map((specs, index) => <li key={index}>{specs}</li>)
            }
          </ol>
          <p className="font-bold">Rating</p>
          <p>rating div</p>
          <div className="flex justify-start items-center gap-3 flex-wrap">
            <button className="btn btn-outline bg-[#9538E2] text-white">
              Add To Cart <i className="fa-solid fa-cart-shopping text-xl"></i>
            </button>
            <button className="btn btn-outline bg-[#9538E2] btn-circle text-white">
              <i className="fa-solid fa-heart text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
