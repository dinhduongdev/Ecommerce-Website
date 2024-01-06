import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50 capitalize">
      <div className="bg-primary/40 ">
        {/* top navbar */}
        <div className="bg-black">
          <div className="container flex justify-between items-center lg:p-2">
            <div>
              <span>Free shipping, 30-day return or refund guarantee.</span>
            </div>
            <div className="flex gap-3">
              <button>sign in</button>
              <button>faqs</button>
            </div>
          </div>
        </div>
        {/* mid navbar */}
        <div className="container flex justify-between items-center py-5">
          {/* logo  */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl uppercase sm:text-3xl flex gap-2"
            >
              <img src={logo} alt="" className="w-10" />
              shop
            </a>
          </div>
          {/* search button and order button */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all border border-gray-300 rounded-full px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <IoIosSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 group-hover:text-primary" />
            </div>
            {/* order button */}
            <button className="group bg-gradient-to-t from-primary to-secondary py-1 px-4 rounded-full flex items-center gap-3">
              <span className="group-hover:block hidden  transition-all duration-200">
                order
              </span>
              <FaCartShopping className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      {/* bottom navbar */}
    </div>
  );
};

export default Navbar;
