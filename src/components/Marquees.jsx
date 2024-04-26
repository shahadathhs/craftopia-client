import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div>
      <Marquee 
        pauseOnHover
        className="mx-auto font-bold"
        >
          Welcome to Craftopia: Your Haven of Creativity and Inspiration!
      </Marquee>
      <Marquee 
        delay={2}
        pauseOnHover
        className="mx-auto text-violet-600 font-bold"
        >
          Explore Endless Crafting Possibilities at Craftopia: Where Every Idea Flourishes.
      </Marquee>
    </div>
  );
};

export default Marquees;