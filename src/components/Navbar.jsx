import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const links = 
    <>
        <li><NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600' 
        : 
        'btn btn-outline border-0 bg-white'
        }
        to="/">Home</NavLink></li>
        
        <li><NavLink 
        className={({ isActive }) => isActive
        ? 
        'btn btn-outline border-0 bg-white text-violet-600' 
        : 
        'btn btn-outline border-0 bg-white'
        }
        to="/artCraft">Art & Craft</NavLink></li>
        
        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600' 
        : 
        'btn btn-outline border-0 bg-white'
        }
        to="/addCraft">Add Craft</NavLink></li>

        <li><NavLink 
        className={({ isActive }) =>  isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600' 
        : 
        'btn btn-outline border-0 bg-white'
        }
        to="/myArtCraft">My Art & Craft</NavLink></li>
    </>

  const linksEnd= 
    <>
        <NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 mr-2' 
        : 
        'btn btn-outline border-0 bg-white mr-2'
        }
        to='/login'>Login</NavLink>

        <NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-outline border-0 bg-white text-violet-600 mr-2' 
        : 
        'btn btn-outline border-0 bg-white mr-2'
        }
        to='/register'>Register</NavLink>
    </>

  return (
    <div className="navbar bg-gray-100 px-2 md:px-6 py-2 md:py-3">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 font-bold text-gray-500">
            {links}
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
        {linksEnd}
      </div>
    </div>
  );
};

export default Navbar;