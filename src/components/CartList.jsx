import React, { useEffect, useState } from "react";
import { getProductList } from "../utilities/addToStorage";
import { useLoaderData, useNavigate } from "react-router-dom";
import ShowCart from "./ShowCart";

const CartList = () => {
  const allData = useLoaderData();
  //console.log(allData)

  const cartListData = getProductList();
  //console.log(cartListData)

  const filteredCartData = allData.filter((data) =>
    cartListData.includes(data.product_id)
  );
  //console.log(filteredCartData)

  const [cart, setCart] = useState([]);

  const totalPrice = filteredCartData.reduce(
    (cost, product) => cost + product.price,
    0
  );

  useEffect(() => {
    setCart(filteredCartData);
  }, []);

  const handleSortCart = () => {
    const sortedCartData = [...cart].sort((a, b) => b.price - a.price);
    console.log(sortedCartData);

    setCart(sortedCartData);
  };

  const [isPurchase, setIsPurchase] = useState(false);

  console.log(isPurchase);

  const handlePurchase = () => {
    setIsPurchase(true);
  };

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsPurchase(!isPurchase);
    localStorage.removeItem("product-list");
    setCart([]);
    navigate('/');
  };

  return (
    <div className="w-11/12 mx-auto relative">
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
          <button
            onClick={handlePurchase}
            className="btn btn-sm btn-outline bg-[#9538E2] text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-6">
        {cart.map((data) => (
          <ShowCart key={data.product_id} data={data} />
        ))}
      </div>

      <div
        className={`fixed ${
          !isPurchase ? "hidden" : ""
        } top-0 right-0 w-full h-screen backdrop-brightness-50`}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="lg:w-[35%] rounded-xl p-5 bg-white shadow-xl flex flex-col justify-center items-center gap-3">
            <img src="../public/images/Group.png" alt="group" />
            <p className="text-2xl font-bold">Payment Successfully</p>
            <div className="divider"></div>
            <p className="text-lg font-semibold text-gray-500">
              Thanks For Purchasing
            </p>
            <p className="text-xl font-semibold">Total: ${totalPrice}</p>
            <button
              onClick={handleCloseModal}
              className="w-full btn text-white text-xl btn-outline bg-[#9538E2]"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
