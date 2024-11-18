import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";

const UserDropdown = () => {
  const {user, logOut} = useAuth();
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="ring-black ring w-8 p-1 rounded-full ">
            <img src={`${user?.photoURL || 'https://img.icons8.com/plumpy/24/user.png'}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-transparent backdrop-blur-sm rounded-lg z-[1] w-52 p-2 shadow border border-red-500"
      >
        <li className="text-white font-medium hover:border  hover:text-red-500 hover:rounded-lg hover:bg-transparent">
          <Link>Dashboard</Link>
        </li>
        <li className="text-white font-medium">
          <button onClick={handleSignOut} className="btn btn-sm "><MdLogout className="text-lg"/> Sign Out</button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
