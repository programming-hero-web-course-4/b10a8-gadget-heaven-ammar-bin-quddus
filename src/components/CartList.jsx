import React, { useEffect, useState } from "react";
import { addToStoredProductList, getProductList } from "../utilities/addToStorage";
import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";

const CartList = () => {
  const allData = useLoaderData();
  //console.log(allData)

  const cartListData = getProductList();
  //console.log(cartListData)

  const [sortCart, setSortCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const filteredCartData = allData.filter((data) =>
      cartListData.includes(data.product_id)
    );
    //console.log(filteredCartData)

    setSortCart(filteredCartData);
    
  }, []);


  const handleSortCart = () => {
    const sortedCartData = [...sortCart].sort((a, b) => b.price - a.price);
    console.log(sortedCartData);

    setSortCart(sortedCartData);
  };


  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex justify-center items-center gap-3">
          <p className="font-semibold">Total Cost: ${totalPrice}</p>
          <button
            onClick={handleSortCart}
            className="btn btn-sm btn-outline bg-[#9538E2] text-white"
          >
            Short By Price <i className="fa-solid fa-right-left"></i>
          </button>
          <button className="btn btn-sm btn-outline bg-[#9538E2] text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-6">
        {sortCart.map((data) => (
          <ShowCart key={data.product_id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
