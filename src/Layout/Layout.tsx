import { Outlet } from "react-router-dom";
import { MaxWidthWrapper } from "../components/Wrapper/MaxWidthWrapper";
import Navbar from "../Section/Navbar/Navbar";
import Footer from "../Section/Footer/Footer";

const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </MaxWidthWrapper>
  );
};

export default Layout;
