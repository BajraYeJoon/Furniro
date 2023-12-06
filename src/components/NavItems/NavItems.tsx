import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../lib/constants";

// Define the type of the item object
interface NavItem {
  label: string;
  // Add other properties here if needed
}

const NavItems = () => {
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 gap-16 md:bg-white ">
      {(NAV_ITEMS as NavItem[]).map((item) => (
        <li key={item.label}>
          <Link
            to={item.label}
            className="block py-2 px-3 md:p-0"
            aria-current="page"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
