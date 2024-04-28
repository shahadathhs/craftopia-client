import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const PaperQuilling = () => {
  const loadedData = useLoaderData()
  console.log(loadedData)

  const paperQuilling = loadedData.filter(craft=> craft.subcategory_Name  === 'Paper Quilling & Origami');
  console.log(paperQuilling)

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Paper Quilling & Origami</title>
        </Helmet>
        <div className="my-4 ">
          <h2 className="text-2xl p-4 font-bold text-center max-w-md mx-auto">
            Here you will get all craft related to Paper Quilling & Origami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
            {
              paperQuilling.map(craft =>
                <div key={craft._id}
                className="mx-auto text-center rounded-md shadow-md p-4 dark:bg-gray-900 dark:text-gray-100">
                  {/* Photo */}
                  <img src={craft.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    {/* card body */}
                    <div className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          {/* row Name */}
                          <tr className="hover">
                            <td>Name:</td>
                            <td>{craft.item_name}</td>
                          </tr>
                          {/* row Price */}
                          <tr className="hover">
                            <td>Price:</td>
                            <td>{craft.price}$</td>
                          </tr>
                          {/* row Rating */}
                          <tr className="hover">
                            <td>Rating:</td>
                            <td>{craft.rating}</td>
                          </tr>
                          {/* row Rating */}
                          <tr className="hover">
                            <td>Subcategory Name:</td>
                            <td>{craft.subcategory_Name}</td>
                          </tr>
                          {/* row customization*/}
                          <tr className="hover">
                            <td>Customization:</td>
                            <td>{craft.customization}</td>
                          </tr>
                          {/* row origins*/}
                          <tr className="hover">
                            <td>Origins:</td>
                            <td>{craft.origins}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* details button */}
                  <div className="text-sm dark:text-gray-400 w-full">
                    <button className="btn btn-outline font-bold dark:text-gray-400">
                      <Link to={`/manualCraft/${craft._id}`}>
                        View Details
                      </Link>
                    </button>
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

export default PaperQuilling;