import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function Navbar() {
  const { user, logOut } = useAuth();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoods"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addFood"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myorders"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          My Orders
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myFoods/${user?.email}`}
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#FF5722] px-3 py-2 rounded-md font-semibold"
              : "px-3 py-2 text-gray-600 font-medium hover:text-[#E64A19]"
          }
        >
          My Foods
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100  ">
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
          {/* user avatar part  */}

          <div className="dropdown dropdown-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              aria-label="User menu"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={`/myFoods/${user?.email}`}>My Food</Link>
              </li>
              <li>
                <Link to="/addFood">Add Food</Link>
              </li>
              <li>
                <Link to="/myorders">My Orders</Link>
              </li>
            </ul>
          </div>

          {/* ********user******** */}

          {user?.email ? (
            <>
              <Link
                onClick={logOut}
                className="bg-[#FF5722] text-white hover:bg-[#E64A19] px-6 py-2 rounded-sm shadow-md font-semibold"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-[#FF5722] text-white hover:bg-[#E64A19] px-6 py-2 rounded-sm shadow-md font-semibold"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
