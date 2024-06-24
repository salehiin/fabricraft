import { useContext } from 'react';
import userPic from '../assets/user.png'
import { SiArtstation, SiSnapcraft } from "react-icons/si";
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const  {user, logOut}  = useContext(AuthContext)

  return (
    <div className='navbar bg-[#36454F] text-white shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
        <SiSnapcraft className='text-[#FFF44F]' />
        {/* <SiArtstation className='text-[#FFF44F]' /> */}
          {/* <img className='w-auto h-7' src={logo} alt='' /> */}
          <span className='font-bold font-rice text-[#40E0D0]'>FabriCraft</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/items'>All Art & Craft Items</Link>
          </li>
          

          {!user && <li>
            <Link to="/login">Login</Link>
          </li>
          }
        </ul>

        {user && <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div title={user?.displayName} className='w-10 rounded-full'>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#40E0D0] rounded-box w-52'
          >
            <li>
              <Link to='/addItems' className='justify-between'>Add Craft Item</Link>
            </li>
            <li>
              <Link to='/myItems'>My Art & Craft List</Link>
            </li>
            <li>
              <div>My Bids</div>
            </li>
            <li>
              <div>Bid Requests</div>
            </li>
            <li className='mt-2'>
              <button onClick={logOut} className='bg-[#FFF44F] block text-center text-black'>Logout</button>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar