import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContest } from "../Providers/AuthProviders";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyArtCraft = () => {
  const userCrafts = useLoaderData();
  const { user } = useContext(AuthContest);
  const userEmail = user.email;
  
  const result = userCrafts.filter(myCraft => {
    return userEmail === myCraft.craftOwnerEmail
  });
  console.log(result)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | All Users Art & Craft</title>
        </Helmet>
        <div>
          {/* banner */}
          <div className="hero bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold">Craft Creators Page: Manage Your Masterpieces</h1>
                <p className="py-6">Welcome to the Craft Creators Page, 
                your one-stop destination to manage your masterpieces. Update, 
                delete, and fine-tune your crafts with ease, putting you in control 
                of your creative journey.</p>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {
              result.map(craft =>
                <div key={craft._id}
                className="mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                  {/* Photo */}
                  <img src={craft.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    {/* card body */}
                    <div className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          {/* row Name */}
                          <tr className="hover">
                            <td>Name:</td>
                            <td>{craft.itemName}</td>
                          </tr>
                          {/* row Price */}
                          <tr className="hover">
                            <td>Price:</td>
                            <td>{craft.prize}$</td>
                          </tr>
                          {/* row Rating */}
                          <tr className="hover">
                            <td>Rating:</td>
                            <td>{craft.rating}</td>
                          </tr>
                          {/* row Rating */}
                          <tr className="hover">
                            <td>Stock Status:</td>
                            <td>{craft.stockStatus}</td>
                          </tr>
                          {/* row customization
 */}
                          <tr className="hover">
                            <td>Customization:</td>
                            <td>{craft.customization
}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* buttons */}
                    <div className="flex justify-between">
                      {/* delete button */}
                      <div className="text-sm dark:text-gray-400">
                        <Link 
                          className='btn btn-sm md:btn-md btn-outline font-bold text-green-500 dark:text-gray-400'>
                          Update Craft
                        </Link>
                      </div>
                      {/* update button */}
                      <div className="text-sm dark:text-gray-400">
                        <Link 
                          className='btn btn-sm md:btn-md btn-outline font-bold text-red-500 dark:text-gray-400'>
                          Delete Craft
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyArtCraft;