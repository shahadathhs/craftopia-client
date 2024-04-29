import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItems = ({userCrafts}) => {
  return (
    <div>
      {/* banner */}
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Craft Items</h1>
            <p className="py-6">
              Discover a world of handmade wonders crafted by our talented community members. Explore unique and inspiring creations added by fellow crafters, and find your next masterpiece today.
            </p>
          </div>
        </div>
      </div>
      {/* card */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          userCrafts.slice(0, 6).map(userCraft =>
            <div key={userCraft._id}
            className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden 
            rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto">
              {/* Craft Owner */}
              <div className="flex space-x-4">
                <img alt="" src={userCraft.craftOwnerPhoto || "photo not found"} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                  <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userCraft.craftOwnerName || "name not found"}</a>
                  <span className="text-xs dark:text-gray-400">{userCraft.craftOwnerEmail || "email not found"}</span>
                </div>
              </div>
              {/* card center */}
              <div>
                <img src={userCraft.photo || "photo not found"} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{userCraft.itemName}</h2>
                <p className="text-sm dark:text-gray-400">{userCraft.description}</p>
              </div>
              {/* card bottom */}
              <div className="flex flex-wrap justify-between">
                
                <div className="space-x-2">
                  <button aria-label="Share this post" type="button" className="p-2 text-center">
                    <p>Prize: {userCraft.prize}$</p>
                  </button>
                  <button aria-label="Bookmark this post" type="button" className="p-2">
                    <p>Rating: {userCraft.rating}</p>
                  </button>
                </div>

                <div className="flex space-x-2 text-sm dark:text-gray-400">
                  <Link to={`/userCraftDetails/${userCraft._id}`}
                    className='btn btn-outline text-violet-600'>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {/* view all button */}
      <div className="pt-8 text-center">
        <Link to="/artCraft"
          className="btn btn-outline border-2 text-violet-600 hover:bg-orange-500 hover:border-0 hover:text-white">
          View All Users Art & Craft
        </Link>
      </div>
    </div>
  );
};

export default CraftItems;

CraftItems.propTypes = {
  userCrafts: PropTypes.array,
}