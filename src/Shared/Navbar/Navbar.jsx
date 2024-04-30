import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      {/* <li><NavLink to="/about">About</NavLink></li> */}
      <li><NavLink to="/collection">Collections</NavLink></li>
      <li><NavLink to="/collections">My Collections</NavLink></li>
      <li><NavLink to="/manage">Manage Items</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          
          {

            user ?

            
            <div className="flex flex-col md:flex-row items-center">

              <div className="tooltip tooltip-left" data-tip={user?.displayName || 'User Unknown'}>
                <div tabIndex={0} role="button" className="mr-1 avatar flex">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userDefaultPic} />
                  </div>
                </div>
              </div>
              
              {/* <button className="btn btn-sm btn-ghost">{user?.displayName || 'User Unknown'}</button>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userDefaultPic} />
                </div>
              </div> */}
              
              <button onClick={handleSignOut} className="btn btn-sm btn-accent">Log Out</button>
            </div>


            :
            <div>
              <Link to="/signin"><button className="btn bg-[#dc0000]">Sign in </button></Link>
              &nbsp; | &nbsp;<Link to="/register"> Register</Link>
            </div>

          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
