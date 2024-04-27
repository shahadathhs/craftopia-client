import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WebName from "../components/WebName";

const MainLayouts = () => {
  return (
    <div>
      <div className="py-1">
        <WebName></WebName>
      </div>
      <div className="bg-base-200">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;