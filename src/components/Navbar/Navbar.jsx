import { Link } from "react-router-dom";

import { CiHome } from "react-icons/ci";
import { FaCalculator } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";

const navlinkStyle =
  "flex items-center gap-1 transition-all duration-500 hover:bg-gray-600 hover:text-white hover:text-white px-3 py-2 rounded text-md font-medium";

const Navbar = () => {
  return (
    <nav>
      <div className="p-3 font-bold flex justify-between">
        <div className="left">
          <a href="#" className="text-md font-medium px-3 py-2 ">
            4-in-1
          </a>
        </div>
        <div className="right">
          <ul className="flex gap-2">
            <li className={navlinkStyle}>
              <CiHome size={24} />
              <Link to="/">Home</Link>
            </li>
            <li className={navlinkStyle}>
              <FaCalculator size={24} />
              <Link to="/calculator">Calculator</Link>
            </li>
            <li className={navlinkStyle}>
              <BiTask size={24} />
              <Link to="/todoList">Todo List</Link>
            </li>
            <li className={navlinkStyle}>
              <CiClock2 size={24} />
              <Link to="/clock">Clock</Link>
            </li>
            <li className={navlinkStyle}>
              <TiWeatherPartlySunny size={24} />
              <Link to="/weather">Weather App</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
