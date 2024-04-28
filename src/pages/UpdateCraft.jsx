import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const UpdateCraft = () => {
  const craft = useLoaderData()
  console.log(craft)

  //send data to the server
  // fetch(`https://new-coffee-server.vercel.app/coffee/${_id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(updateCoffee)
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('Inside Update PUT', data);
  //     if (data.modifiedCount > 0) {
  //       Swal.fire({
  //         title: 'Success!',
  //         text: 'Existing Coffee Details Successfully Updated',
  //         icon: 'success',
  //         confirmButtonText: 'Cool'
  //       }) 
  //     }
  //   })

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | All Users Art & Craft</title>
        </Helmet>
        <div>
          asd
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UpdateCraft;