import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category}`} className="btn md:w-full lg:text-lg font-semibold">
      <button>
        {category.category}
      </button>
    </NavLink>
  );
};

export default Categories;
