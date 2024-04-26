import Slider from "../components/Slider";
import WebName from "../components/WebName";


const Home = () => {
  return (
    <div className="text-center my-6 bg-base-200 p-4 space-y-5">
      <WebName />
      <Slider />
    </div>
  );
};

export default Home;