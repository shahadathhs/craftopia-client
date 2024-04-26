import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Marquee 
        pauseOnHover
        className="max-w-md mx-auto text-violet-600 font-bold"
        >
          Explore Endless Crafting Possibilities at Craftopia: Where Every Idea Flourishes.
        </Marquee>
        <Marquee 
        pauseOnHover
        className="max-w-md mx-auto text-orange-500 font-bold"
        >
          Unleash Your Creativity with Craftopias Premium Crafting Supplies and Expert Guidance.
        </Marquee>
    </div>
  );
};

export default Marquees;