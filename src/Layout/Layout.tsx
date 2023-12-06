import { Outlet } from "react-router-dom";
import { MaxWidthWrapper } from "../components/Wrapper/MaxWidthWrapper";
import Navbar from "../Section/Navbar/Navbar";

const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Outlet />
      <div>FOOTER</div>
    </MaxWidthWrapper>
  );
};

export default Layout;
