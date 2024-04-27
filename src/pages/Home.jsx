import { useLoaderData } from "react-router-dom";
import OurWork from "../components/OurWork";
import Slider from "../components/Slider";
//import Testimonial from "../components/Testimonial";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Bannar from "../components/Bannar";
import CraftItems from '../components/CraftItems';

const Home = () => {
  const userCrafts = useLoaderData();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
        <title>Craftopia | Haven of Glass and Paper Art</title>
        </Helmet>
        <div>
          <div className="my-6 bg-base-200 p-4">
            <Bannar />
          </div>
          <div className="my-6 bg-base-200 p-4">
            <Slider />
          </div>
          <div className="my-6 bg-base-200 p-4">
            <OurWork />
          </div>
          <div className="my-6 bg-base-200 p-4">
            <CraftItems userCrafts={userCrafts}></CraftItems>
          </div>
        </div>
      </div>
    </HelmetProvider>
    // <div>
    //   <div className="my-6 bg-base-200 p-4">
    //     <OurWork />
    //   </div>
    //   <div className="my-6 bg-base-200 p-4">
    //     <Slider />
    //   </div>
    //   <div className="my-6 bg-base-200 p-4">
    //     <Testimonial reviews={reviews} /> 
    //   </div>
    // </div>
  );
};

export default Home;