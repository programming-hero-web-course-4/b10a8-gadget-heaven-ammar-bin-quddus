import React from "react";
import Categories from "../components/Categories";
import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import bannerImage from '../assets/banner.jpg'


const Home = () => {
  const category = useLoaderData();
  //console.log(category);

  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/dashboard');
  }

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home | Gadget heaven</title>
      </Helmet>
      <div className="w-full max-sm:h-[100vh] sm:h-[130vh]">
        <div className="bg-[#9538E2] relative py-6 w-full max-sm:h-[75%] sm:h-[60%] flex flex-col justify-start items-center text-center gap-8 rounded-b-xl">
          <p className="text-2xl md:text-4xl font-bold text-white">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </p>
          <p className="text-base-100">
            Explore the latest gadgets that will take your experience to <br />
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <button onClick={handleShopNow} className="bg-white btn-outline px-3 py-2 rounded-xl">
            Shop Now
          </button>
        </div>
        <div className="absolute -bottom-[10%] left-[15%] sm:-bottom-1/3 sm:left-1/4 max-sm:w-[70%] sm:w-[50%] max-sm:h-[50%] sm:h-[70%] rounded-xl p-3 bg-white/30 backdrop-blur-xl">
          <img
            className="rounded-xl w-full h-full"
            src={bannerImage}
            alt="bannerImg"
          />
        </div>
      </div>

      <p className="text-center text-3xl font-bold mt-8">
        Explore Cutting-Edge Gadgets
      </p>

      <div className="w-full flex max-md:flex-col justify-start items-start gap-5 mt-8">
        {/* category btn */}

        <div className="w-full flex-wrap md:w-1/4 py-3 flex flex-row md:flex-col items-center justify-center gap-4">
          <NavLink
            to='/'
            className={`btn md:w-full lg:text-lg font-semibold ${({isActive}) => isActive ? 'active':''}`}
          >
            <button>All Products</button>
          </NavLink>
          {category.map((category) => (
            <Categories key={category.id} category={category} />
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Home;
