import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];
const dropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <nav className="relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white dark:mb-4">
      <div className="py-4">
        <div className="container flex items-center justify-between ">
          {/* logo and Links section */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl">
              MyShop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown links */}
                <li className="relative group">
                  <a
                    href="#"
                    className="flex items-center justify-center py-2 gap-[2px] text-gray-500 font-semibold hover:text-black dark:hover:text-white duration-200"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="transition-all duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* dropdown item */}
                  <div className="hidden absolute z-[9999] group-hover:block w-[200px] bg-white shadow-md text-black p-2 rounded-md dark:bg-gray-900 dark:text-white duration-300">
                    <ul className="space-y-2">
                      {dropDownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="inline-block w-full p-2 font-semibold text-gray-500 duration-200 rounded-md hover:text-black hover:bg-primary/20 dark:hover:text-white"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar right section */}
          <div className="flex items-center justify-between gap-4">
            {/* Search Bar section */}
            <div className="relative hidden group sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="absolute text-xl text-gray-600 duration-200 -translate-y-1/2 dark:text-gray-400 group-hover:text-primary top-1/2 right-3" />
            </div>
            {/* Cart button section */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                4
              </div>
            </button>
            {/* Dark Mode section */}
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
