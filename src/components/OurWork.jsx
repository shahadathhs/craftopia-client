import OurWorkName from "./OurWorkName";
import coolBg1 from "../assets/bg/cool-bg-1.png";
import coolBg2 from "../assets/bg/cool-bg-2.png";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-3">
        <OurWorkName />
        <p className="font-bold max-w-md mx-auto">At our Art & Craft Store, we specialize in two distinct categories that ignite the spark of creativity: Paper Crafts and Glass Art.</p>
        <p className="text-2xl p-3 text-violet-500 font-semibold">Click on a card to see related Art & Crafts by our store</p>
      </div>
      <div>
        {/* Paper Crafts */}
        <div className="hero my-3">
          <img className="h-full object-cover rounded-lg" src={coolBg1} alt="" />
          <div className="hero-content text-neutral-content">
            <div>
              <h1 className="mb-5 text-xl md:text-3xl font-bold">Paper Crafts: Bringing Ideas to Life</h1>
              <p className="mb-5 font-semibold max-w-3xl">Delve into the world of paper crafts, where imagination knows no bounds. From intricate card making to capturing memories through scrapbooking, our paper crafting section offers a plethora of techniques and projects to explore:</p>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Card Making */}
                <Link to="/cardMaking" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Card Making
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                    Craft heartfelt messages and personalized greetings with our array of materials and techniques, including stamping, embossing, and paper layering.
                  </p>
                </Link>
                {/* Paper Quilling */}
                <Link to="/paperQuilling" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Paper Quilling & Origami
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                  Dive into the art of paper manipulation with paper quillings delicate coils and origamis intricate folds, crafting intricate designs and three-dimensional wonders without limits.
                  </p>
                </Link>
                {/* Scrap Booking */}
                <Link to="/scrapBooking" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Scrap Booking 
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                  Preserve cherished memories and tell your story with our collection of papers, embellishments, and tools for creating stunning photo albums and memory books.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Glass Art */}
        <div className="hero">
          <img className="h-full object-cover rounded-lg" src={coolBg2} alt="" />
          <div className="hero-content text-orange-500">
            <div>
              <h1 className="mb-5 text-xl md:text-3xl font-bold">Glass Art: Illuminating Creativity</h1>
              <p className="mb-5 font-semibold max-w-3xl">Step into the enchanting world of glass art, where transparency meets vibrancy. Explore the diverse techniques and forms within our glass art section:</p>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Glass Painting */}
                <Link to="/glassPainting" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Glass Painting
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                    Express your vision on glass canvases, whether it is adorning windows with colorful designs or embellishing glassware with intricate illustrations.
                  </p>
                </Link>
                {/* Lamp Working */}
                <Link to="/lampWorking" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Lamp Working
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                  Discover the magic of shaping molten glass into beads, sculptures, and more using the delicate art of lampworking, perfect for jewelry-making and intricate creations.
                  </p>
                </Link>
                {/* Glass Dying & Staining */}
                <Link to="/glassDying" className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 mx-auto">
                  <h2 className="block text-xl font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
                    Glass Dying & Staining
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100">
                    Infuse life into glass surfaces with vibrant dyes and intricate stains, transforming them into breathtaking works of art, from stained glass windows to decorative panels and beyond
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;