import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-blue-500 px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
          <div className="text-center ">
            <h1 className="text-3xl font-extrabold text-gray-800">
              F<span className="text-[#FF5722]">oo</span>d F
              <span className="text-[#FF5722]">oo</span>
              die
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link className="bg-[#FF5722] text-white hover:bg-[#E64A19] px-6 py-2 rounded-sm shadow-md font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
