import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const craft = useLoaderData()
  const {
    photo, itemName,  description, prize, 
    rating, _id , processingTime
  } = craft;
  console.log(craft)

  const handleUpdateCraft = event => {
    event.preventDefault();
    
    const form = event.target;
    
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const prize = form.prize.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const updateCraftData = { 
      photo, itemName , subCategory, description, prize, rating, customization,
      processingTime, stockStatus
    }
    console.table(updateCraftData);
    //send data to the server
    fetch(`http://localhost:5000/userCraft/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateCraftData)
    })
      .then(res => res.json())
      .then(data => {
        console.log('User Craft Updated', data);
        if (data.modifiedCount > 0 ) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          }) 
        }
        form.reset();
      })
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Craftopia | Update Your Craft</title>
        </Helmet>
        <div className="my-4 bg-base-200 p-4">
          {/* Banner */}
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-lg">
                <h1 className="text-3xl font-bold">Craft Update Center: Refine Your Masterpiece</h1>
                <p className="py-6">Welcome to the Craft Update Center, where you can refine your masterpiece with precision. Update your craft details effortlessly and ensure it reflects your evolving artistic vision.</p>
              </div>
            </div>
          </div>
          {/* update form */}
          <div className="space-y-3">
            <p className="text-center font-bold text-2xl">Fill the Form to update the Craft</p>
            <div className="space-y-3 p-4 rounded-2xl md:w-4/5 mx-auto">
              <form  onSubmit ={handleUpdateCraft}
              className="grid grid-cols-1 md:grid-cols-2 gap-7 p-3 md:p-12 border-2 rounded-xl border-violet-600"
              > 
                {/* Photo URL */}
                <div className="col-span-1 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Photo : (Make sure that URL is valid) </span>
                  </label>
                  <input type="text" name="photo" placeholder={photo} className="input input-bordered w-full" required />
                </div>
                {/* Item Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Craft Item : </span>
                  </label>
                  <input type="text" name="itemName" placeholder={itemName}className="input input-bordered w-full" required />
                </div>
                {/* SubCategory Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Sub-category : </span>
                  </label>
                  <select name="subCategory" className="select select-bordered w-full" required>
                    <option>Card Making</option>
                    <option>Scrapbooking</option>
                    <option>Paper Quilling & origami</option>
                    <option>Glass Painting</option>
                    <option>Glass Dying & Staining</option>
                    <option>Lampworking</option>
                  </select>
                </div>
                {/* Short Description */}
                <div className="col-span-1 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Description : </span>
                  </label>
                  <textarea name="description" placeholder={description} className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                </div>
                {/* Prize */}
                <div>
                  <label className="label">
                    <span className="label-text">Prize : </span>
                  </label>
                  <input type="text" name="prize" placeholder={prize} className="input input-bordered w-full" required />
                </div>
                {/* Rating */}
                <div>
                  <label className="label">
                    <span className="label-text">Rating : (On 0-5 scale) </span>
                  </label>
                  <input type="text" name="rating" placeholder={rating} className="input input-bordered w-full" required />
                </div>
                {/* Customization */}
                <div>
                  <label className="label">
                    <span className="label-text">Customization : </span>
                  </label>
                  <select name="customization" className="select select-bordered w-full" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                {/* Processing Time */}
                <div>
                  <label className="label">
                    <span className="label-text">Processing Time : (In Days) </span>
                  </label>
                  <input type="number" name="processingTime" placeholder={processingTime}className="input input-bordered w-full" required />
                </div>
                {/* Stock Status */}
                <div className="col-span-1 md:col-span-2 w-full md:w-1/2 mx-auto">
                  <label className="label">
                    <span className="label-text">Stock Status : </span>
                  </label>
                  <select name="stockStatus" className="select select-bordered w-full" required>
                    <option>In Stock</option>
                    <option>Made to Order</option>
                  </select>
                </div>
                {/* Add button */}
                <div className="col-span-1 md:col-span-2">
                  <input className="btn btn-outline text-violet-600  w-full" type="submit" value="Add Craft" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UpdateCraft;