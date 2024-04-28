import { Link, useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ArtCraft = () => {
  const userCrafts = useLoaderData();
  console.log(userCrafts);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | All Users Art & Craft</title>
        </Helmet>
        <div className="flex flex-col">
          {/* banner */}
          <div className="hero bg-base-200 my-6">
            <div className="hero-content text-center">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold">User Craft Corner: Unveiling Artistic Brilliance</h1>
                <p className="py-6">
                Unveil the artistic brilliance of our users in our dedicated craft corner. Explore a gallery of user-contributed crafts, where imagination knows no bounds and creativity knows no limits.
                </p>
              </div>
            </div>
          </div>
          {/* All Craft  Table */}
          <div className="overflow-x-hidden p-0 md:p-5 flex mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="hidden md:grid">SubCategory</th>
                  <th>Rating</th>
                  <th className="hidden md:grid">Customization</th>
                  <th>Price</th>
                  <th className="hidden md:grid">Processing Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {
                  userCrafts.map(userCraft => 
                    <tr key={userCraft._id} className="hover">
                      <th>{userCraft.itemName}</th>
                      <th className="hidden md:grid py-7">{userCraft.subCategory}</th>
                      <th>{userCraft.rating}</th>
                      <th className="hidden md:grid py-7">{userCraft.customization}</th>
                      <th>{userCraft.prize}</th>
                      <th className="hidden md:grid py-7">{userCraft.processingTime} Days</th>
                      <th>
                        <div className="text-sm dark:text-gray-400">
                          <Link to={`/userCraftDetails/${userCraft._id}`}
                          className='btn btn-sm md:btn-md btn-outline dark:text-gray-400'>
                            Details
                          </Link>
                        </div>
                      </th>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ArtCraft;