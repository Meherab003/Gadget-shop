import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./home/UserDropdown";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";



const Navbar = () => {
  const { user } = useAuth();
  const navlinks = (
    <>
      <li className="text-white lg:text-red-500 font-medium hover:border lg:border hover:text-red-500 hover:rounded-lg lg:rounded-lg lg:hover:border-red-500 hover:bg-transparent">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-white lg:text-red-500 font-medium hover:border lg:border hover:text-red-500 hover:rounded-lg lg:rounded-lg lg:hover:border-red-500 hover:bg-transparent">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li className="text-white lg:text-red-500 font-medium hover:border lg:border hover:text-red-500 hover:rounded-lg lg:rounded-lg lg:hover:border-red-500 hover:bg-transparent">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-white lg:text-red-500 font-medium hover:border lg:border hover:text-red-500 hover:rounded-lg lg:rounded-lg lg:hover:border-red-500 hover:bg-transparent lg:hover:bg-white">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200">
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
            className="menu menu-sm dropdown-content bg-transparent backdrop-blur-sm rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium border border-red-500"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost btn-sm md:btn-md text-xl">
          Gadget Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-red-800 font-medium">
          {navlinks}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <UserDropdown />
        </div>
      ) : (
        <div className="navbar-end flex items-center justify-end gap-1">
          <Link to="/sign-up">
            <button className="btn text-xs lg:text-md border-slate-300 bg-slate-200 text-black hover:bg-slate-300 hover:border-none flex items-center justify-center gap-1"><FaUser className="hidden md:block"/>  
              Sign Up
            </button>
          </Link>
          <Link to="sign-in">
            <button className="btn text-xs lg:text-md border-black bg-black text-white hover:bg-slate-800 flex items-center justify-center gap-1"><MdLogin className="font-bold lg:text-lg hidden md:block"/>
              Sign in
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
