import Marquees from "../components/Marquees";
import OurWork from "../components/OurWork";
import Slider from "../components/Slider";
import WebName from "../components/WebName";


const Home = () => {
  return (
    <div>
      <div className="text-center my-6 bg-base-200 p-4 space-y-5">
        <WebName />
        <Marquees />
      </div>
      <div className="my-6 bg-base-200 p-4 space-y-5">
        <OurWork />
      </div>
      <div className="my-6 bg-base-200 p-4 space-y-5">
        <Slider />
      </div>
    </div>
  );
};

export default Home;