import featureBg from "../assets/bg/cool-background (2).png"
import Lottie from "lottie-react";
import feature from "../assets/lottiesfile/feature.json"

const Features = () => {
  return (
    <div className="hero">
      <img src={featureBg} className="w-full h-full object-cover" alt="" />
      <div className="hero-content text-black">
        <section>
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            {/* left */}
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-3/5 dark:bg-violet-400 dark:text-gray-900">
              <p className="text-2xl text-center font-bold">Our Key Features</p>
              {/* feature 1 */}
              <div className="flex space-x-2 sm:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">Craft Customization</p>
                  <p className="leading-snug">
                  Personalize your crafts with unique designs, colors, and details. Express your style and creativity with our easy-to-use customization options.
                  </p>
                </div>
              </div>
              {/* feature 2 */}
              <div className="flex space-x-2 sm:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">User Profile</p>
                  <p className="leading-snug">
                  Showcase your creations, track orders, and connect with fellow craft enthusiasts. Your personalized user profile is your gateway to a vibrant crafting community.
                  </p>
                </div>
              </div>
              {/* feature 3 */}
              <div className="flex space-x-2 sm:space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">Craft Management</p>
                  <p className="leading-snug">
                  Organize, update, and track your craft collection effortlessly. Streamline your crafting process and focus on creating beautiful works of art.
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex justify-center items-center mx-auto">
              <Lottie className='h-[200px]' animationData={feature} loop={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;