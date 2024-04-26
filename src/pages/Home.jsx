import { useLoaderData } from "react-router-dom";
import OurWork from "../components/OurWork";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const reviews = useLoaderData();
  console.log(reviews);

  return (
    <div>
      <div className="my-6 bg-base-200 p-4">
        <OurWork />
      </div>
      <div className="my-6 bg-base-200 p-4">
        <Slider />
      </div>
      <div className="my-6 bg-base-200 p-4">
        <Testimonials reviews={reviews} /> 
      </div>
    </div>
  );
};

export default Home;