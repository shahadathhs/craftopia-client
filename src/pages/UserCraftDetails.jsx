import { useLoaderData} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UserCraftDetails = () => {
  const userCraft = useLoaderData();
  console.table(userCraft);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Craft Details</title>
        </Helmet>
        <div className="p-4 my-3 bg-base-200">
          {/* banner */}
          <div className="hero bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-xl font-bold">
                Journey into <span className="text-violet-600">{userCraft.itemName}</span> : Exploring Artistry and Innovation
                </h1>
                <p className="py-6">
                Embark on a journey of discovery with <span className="text-violet-600">{userCraft.itemName} </span>  
                  and explore the artistry and innovation that define it.
                </p>
              </div>
            </div>
          </div>
          {/* details card */}
          <div className="p-5 mx-auto  bg-gray-100 text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img src={userCraft.photo} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{userCraft.itemName}</a>
                  {/* craft owner */}
                  <div className="flex space-x-4 pt-3">
                    <img alt="" src={userCraft.craftOwnerPhoto || "photo not found"} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                      <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userCraft.craftOwnerName || "name not found"}</a>
                      <span className="text-xs text-gray-600">{userCraft.craftOwnerEmail || userCraft.craftEmail}</span>
                    </div>
                  </div>
                </div>
                {/* craft info on table */}
                <div>
                  <table className="table text-violet-600">
                    <tbody>
                      {/* row 1 */}
                      <tr className="hover">
                        <td>Sub-category</td>
                        <td>{userCraft.subCategory}</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover">
                        <td>Prize</td>
                        <td>{userCraft.prize}</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover">
                        <td>Rating</td>
                        <td>{userCraft.rating}</td>
                      </tr>
                      {/* row 4 */}
                      <tr className="hover">
                        <td>Customization</td>
                        <td>{userCraft.customization}</td>
                      </tr>
                      {/* row 5 */}
                      <tr className="hover">
                        <td>Processing Time</td>
                        <td>{userCraft.processingTime}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 text-center space-y-3">
                    <h3 className="font-bold">About <span className="text-violet-600">{userCraft.itemName}</span></h3>
                    <p>
                    {userCraft.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UserCraftDetails;