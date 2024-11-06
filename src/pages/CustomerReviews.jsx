import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ReviewCart from "../components/ReviewCart";

const CustomerReviews = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Reviews | Gadget heaven</title>
      </Helmet>
      <div className="text-center text-white w-full bg-[#9538E2] pb-20 pt-8">
        <p className="text-2xl font-bold">Customer Reviews</p>
        <p className="text-sm mt-4 text-wrap">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
        {data.map((review) => (
          <ReviewCart key={review.customer_id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
