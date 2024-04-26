import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState('light')

  const handleToggle = event => {
    if (event.target.checked) {
      setMode('synthwave')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('mode', mode)
    const localMode = localStorage.getItem('mode')

    // add custom [data-theme] attribute
    document.querySelector('html').setAttribute('data-theme', localMode)
  }, [mode])

  const links = 
    <>
        <li><NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to="/">Home</NavLink></li>
        
        <li><NavLink 
        className={({ isActive }) => isActive
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to="/artCraft">Art & Craft</NavLink></li>
        
        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to="/addCraft">Add Craft</NavLink></li>

        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to="/myArtCraft">My Art & Craft</NavLink></li>
    </>

  const linksEnd= 
    <>
        <li><NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to='/login'>Login</NavLink></li>

        <li><NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 m-1' 
        : 
        'btn btn-outline border-0 bg-white text-orange-500 m-1'
        }
        to='/register'>Register</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-200 px-2 md:px-6 py-2 md:py-3">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 font-bold text-gray-500">
            {links}
            {linksEnd}
          </ul>
        </div>
        <Link to='/' className="text-2xl md:text-3xl text-blue-700 font-semibold p-0">
        <img src={'/websideicon.png'} alt="" />
        </Link>
      </div>
      {/* Navbar center for lg */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 border-1 font-bold text-gray-500">
          {links}
        </ul>
      </div>
      {/* Navbar end */}
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 border-1 font-bold text-gray-500">
            {linksEnd}
          </ul>
        </div>
        <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;