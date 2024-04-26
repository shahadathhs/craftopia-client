import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquees from "../components/Marquees";
import WebName from "../components/WebName";

const MainLayouts = () => {
  return (
    <div>
      <div className="bg-base-200 py-2">
        <Marquees></Marquees>
        <hr className="border-dashed border-t-2 mt-1 border-violet-600" />
        <Navbar></Navbar>
        <hr className="border-dashed border-t-2 mb-1 border-violet-600" />
        <WebName></WebName>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;