import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
let index = -1;

const ManualCraftDetails = () => {
  const manualCraft = useLoaderData();
  console.log(manualCraft);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Manual Craft Details</title>
        </Helmet>
        <div className="p-4 my-3 bg-base-200">
          {/* banner */}
          <div className="hero bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-xl font-bold">
                Journey into <span className="text-violet-600">{manualCraft.item_name}</span> : Exploring Artistry and Innovation
                </h1>
                <p className="py-6">
                Embark on a journey of discovery with <span className="text-violet-600">{manualCraft.item_name} </span>  
                  and explore the artistry and innovation that define it.
                </p>
              </div>
            </div>
          </div>
          {/* details card */}
          <div className="p-5 mx-auto  bg-gray-100 text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img src={manualCraft.image} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{manualCraft.item_name}</a>
                {/* craft info on table */}
                <div>
                  <table className="table text-violet-600">
                    <tbody>
                      {/* row 1 */}
                      <tr className="hover">
                        <td>Sub-category</td>
                        <td>{manualCraft.subcategory_Name}</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover">
                        <td>Price</td>
                        <td>{manualCraft.price}</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover">
                        <td>Rating</td>
                        <td>{manualCraft.rating}</td>
                      </tr>
                      {/* row 4 */}
                      <tr className="hover">
                        <td>Customization</td>
                        <td>{manualCraft.customization}</td>
                      </tr>
                      {/* row 5 */}
                      <tr className="hover">
                        <td>Processing Time</td>
                        <td>{manualCraft.processing_time}</td>
                      </tr>
                      {/* row 6 */}
                      <tr className="hover">
                        <td>Origins</td>
                        <td>{manualCraft.origins}</td>
                      </tr>
                      {/* row 6 */}
                      <tr className="hover">
                        <td>Key Elements</td>
                        <td>
                          {manualCraft.key_elements.map(element => 
                          <ul className="flex flex-col" key={index++} >{element},</ul>

                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 text-center space-y-3">
                    <h3 className="font-bold">About <span className="text-violet-600">{manualCraft.itemName}</span></h3>
                    <p>
                    {manualCraft.short_description}
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

export default ManualCraftDetails;