import React, { useState } from "react";
import CartList from "../components/CartList";
import WishList from "../components/WishList";

const Dashboard = () => {
  const [toggle, setToggle] = useState({
    status: true,
    position: "cart",
  });

  const handleToggleButton = (position) => {
    if (position === "cart") {
      setToggle({
        status: true,
        position: "cart",
      });
    } else {
      setToggle({
        status: false,
        position: "wishList",
      });
    }
  };

  return (
    <div className="w-full mb-8">
      <div className="text-center text-white w-full bg-[#9538E2] pb-20 pt-8">
        <p className="text-2xl font-bold">Dashboard</p>
        <p className="text-sm mt-4 text-wrap">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="mt-8 flex justify-center items-center gap-5">
          <button
            onClick={() => handleToggleButton("cart")}
            className={`bg-[#9538E2] btn-outline font-semibold px-3 py-2 rounded-xl ${
              toggle.position === "cart" ? "bg-white text-[#9538E2]" : ""
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleToggleButton("wishList")}
            className={`bg-[#9538E2] btn-outline font-semibold px-3 py-2 rounded-xl ${
              toggle.position === "wishList" ? "bg-white text-[#9538E2]" : ""
            }`}
          >
            Wish List
          </button>
        </div>
      </div>

      <div className="mt-5">{toggle.status ? <CartList /> : <WishList />}</div>
    </div>
  );
};

export default Dashboard;