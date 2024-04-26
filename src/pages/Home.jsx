import Lotties from "../components/Lotties";
import OurWork from "../components/OurWork";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <div className="my-6 bg-base-200 p-4">
        <OurWork />
      </div>
      <div className="my-6 bg-base-200 p-4">
        <Slider />
      </div>
      <div className="my-6 bg-base-200 p-4">
        <Lotties /> 
      </div>
    </div>
  );
};

export default Home;