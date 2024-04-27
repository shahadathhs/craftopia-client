

const AddCraft = () => {
  return (
    <div className="py-4">
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
      <div className="py-4 bg-base-200">
        <p className="text-center text-2xl font-bold italic text-orange-500">Fill the from</p>
        <div className="space-y-3">
        <div className="bg-base-200 space-y-3 p-4 rounded-2xl w-4/5 mx-auto">
          <form  
          className="grid grid-cols-1 md:grid-cols-2 gap-7 md:p-12 border-2 rounded-xl border-violet-600"
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
            <div>
              <label className="label">
                <span className="label-text">Category : </span>
              </label>
              <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Taste : </span>
              </label>
              <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Details : </span>
              </label>
              <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" required />
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
  );
};

export default AddCraft;