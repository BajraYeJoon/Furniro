import NavItems from "../../components/NavItems/NavItems";
import { MaxWidthWrapper } from "../../components/Wrapper/MaxWidthWrapper";
import { Link } from "react-router-dom";
import NavLogo from "../../components/NavLogo/NavLogo";

const Navbar = () => {
  return (
    <nav className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/img/logo/logo.svg"
                className="h-8"
                alt="Furniro Logo"
              />
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <NavItems />
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <NavLogo />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </nav>
  );
};

export default Navbar;
