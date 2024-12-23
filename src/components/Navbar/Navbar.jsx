import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
const menuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blogs',
  },
];
const Navbar = () => {
  return (
    <nav className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex items-center justify-between'>
          {/* logo and Links section */}
          <div className='flex items-center gap-4'>
            <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              MyShop
            </a>
            {/* menu items */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {menuLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* navbar right section */}
          <div className='flex items-center justify-between gap-4'>
            {/* Search Bar section */}
            <div className='relative group hidden sm:block'>
              <input type='text' placeholder='Search' className='search-bar' />
              <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2 duration-200' />
            </div>
            {/* Cart button section */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white'>4</div>
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
