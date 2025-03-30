import { NavLink, useLocation } from "react-router-dom";
import { getProductList, getWishList } from "../utilities/addToStorage";
import favIcon from '../assets/favicon-16x16.png'

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navBtn" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Statistics
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
      </li>
    </>
  );

  const location = useLocation();
  //console.log(location)

  const CartCount = getProductList();
  //console.log(count.length)

  const wishCount = getWishList();

  return (
    <div
      className={`navbar rounded-t-xl w-11/12 mx-auto ${
        location.pathname === "/" ? `bg-[#9538E2] text-white` : `bg-base-100`
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src={favIcon} alt="" />Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-6">
        <button className="btn btn-circle relative">
          <i className="fa-solid fa-cart-shopping text-lg"></i>
          <div className="w-6 h-6 rounded-full bg-blue-300 font-semibold absolute -right-2 -top-2 flex items-center justify-center">
            {CartCount.length}
          </div>
        </button>
        <button className="btn btn-circle relative">
          <i className="fa-solid fa-heart text-lg"></i>
          <div className="w-6 h-6 rounded-full bg-blue-300 font-semibold absolute -right-2 -top-2 flex items-center justify-center">
            {wishCount.length}
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
