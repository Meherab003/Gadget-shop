import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
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
            className="menu menu-sm dropdown-content bg-base-300 bg-opacity-40 rounded-box z-[1] mt-3 w-52 p-2 shadow text-red-800 font-medium"
          >
            {navlinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Gadget Shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-red-800 font-medium">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end flex items-center justify-end gap-1">
        <Link to='/sign-up'>
          <button className="btn border-slate-300 bg-slate-200 text-black hover:bg-slate-300 hover:border-none">
            Sing Up
          </button>
        </Link>
        <Link to='sign-in'>
          <button className="btn border-black bg-black text-white hover:bg-slate-800">
            Sing in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
