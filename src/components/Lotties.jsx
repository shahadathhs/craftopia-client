import Lottie from "lottie-react";
import animation from "../assets/lottiesfile/text-animation.json"

const Lotties = () => {
  return (
    <div>
      <div>
        <Lottie className="h-[100px]" animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Lotties;