import { Outlet } from "react-router-dom";
import Navbar from "../Section/Navbar/Navbar";
import Footer from "../Section/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
