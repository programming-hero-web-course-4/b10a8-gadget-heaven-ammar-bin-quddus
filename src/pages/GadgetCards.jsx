import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../components/Gadget";

const GadgetCards = () => {
  const { category } = useParams();
  //console.log(category);

  const gadgetData = useLoaderData();
  //console.log(gadgetData);

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredGadget = [...gadgetData].filter(
        (data) => data.category === category
      );
      setGadgets(filteredGadget);
    } else {
      setGadgets(gadgetData);
    }
  }, [gadgetData, category]);

  return (
    <div className="w-full md:w-3/4 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {gadgets.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetCards;
