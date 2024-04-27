import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContest } from './../Providers/AuthProviders';
import Swal from 'sweetalert2';


const AddCraft = () => {
  const { user } = useContext(AuthContest);

  const handleAddCraft = event => {
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
    const name = form.name.value;
    const craftEmail = form.email.value;
    const craftOwnerName = user.displayName;
    const craftOwnerEmail = user.email;
    const craftOwnerPhoto = user.photoURL;

    const craftData = { 
      photo, itemName , subCategory, description, prize, rating, customization,
      processingTime, stockStatus, name, craftEmail, 
      craftOwnerEmail, craftOwnerName, craftOwnerPhoto
    }
    console.table(craftData);
    //send data to the server
    fetch('http://localhost:5000/userCraft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(craftData)
    })
      .then(res => res.json())
      .then(data => {
        console.log('User Craft Post/Add to Server', data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Added Successfully',
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
          <title>Craftopia | Add Craft Items</title>
        </Helmet>
        <div className="py-4">
          {/* banner */}
          <div className="hero bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-lg text-violet-800">
                <h1 className="text-2xl font-bold">Welcome to Craft Submission Page</h1>
                <p className="py-6">
                  Here you can share your creative masterpieces with the world! Simply fill out the form below to add your craft to our collection.
                </p>
                <p className="py-6 pt-0">
                  Once you have filled out the form, click the Add button to submit your craft. We ca not wait to see your incredible creations!
                </p>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="py-4 bg-base-200">
            <p className="text-center text-2xl font-bold italic text-orange-500">Fill the from</p>
            <div className="space-y-3">
            <div className="bg-base-200 space-y-3 p-4 rounded-2xl md:w-4/5 mx-auto">
              <form  onSubmit={handleAddCraft}
              className="grid grid-cols-1 md:grid-cols-2 gap-7 p-3 md:p-12 border-2 rounded-xl border-violet-600"
              > 
                {/* Photo URL */}
                <div className="col-span-1 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Photo : (Make sure that URL is valid) </span>
                  </label>
                  <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" required />
                </div>
                {/* Item Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Craft Item : </span>
                  </label>
                  <input type="text" name="itemName" placeholder="Enter Craft Item Name" className="input input-bordered w-full" required />
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
                  <textarea name="description" placeholder="Add Short Description" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                </div>
                {/* Prize */}
                <div>
                  <label className="label">
                    <span className="label-text">Prize : </span>
                  </label>
                  <input type="text" name="prize" placeholder="Enter Craft Prize" className="input input-bordered w-full" required />
                </div>
                {/* Rating */}
                <div>
                  <label className="label">
                    <span className="label-text">Rating : (On 0-5 scale) </span>
                  </label>
                  <input type="text" name="rating" placeholder="Enter Craft Rating" className="input input-bordered w-full" required />
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
                  <input type="number" name="processingTime" placeholder="Enter Processing Time" className="input input-bordered w-full" required />
                </div>
                {/* Stock Status */}
                <div>
                  <label className="label">
                    <span className="label-text">Stock Status : </span>
                  </label>
                  <select name="stockStatus" className="select select-bordered w-full" required>
                    <option>In Stock</option>
                    <option>Made to Order</option>
                  </select>
                </div>
                {/* Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Name : </span>
                  </label>
                  <input type="text" name="name" placeholder="Enter Full Name" className="input input-bordered w-full" required />
                </div>
                {/* Email */}
                <div className="col-span-1 md:col-span-2">
                  <label className="label">
                    <span className="label-text">Email : </span>
                  </label>
                  <input type="email" name="email" placeholder="Enter a valid email" className="input input-bordered w-full" required />
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
      </div>
    </HelmetProvider>
  );
};

export default AddCraft;