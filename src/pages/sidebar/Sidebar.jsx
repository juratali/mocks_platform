import { Link, useLocation } from "react-router-dom";
import { logo } from "@/constants";
import { sidebarData } from "./utils";
import { useState } from "react";

const Sidebar = () => {
  const pathUrl = useLocation().pathname;
  const [activeItem, setActiveItem] = useState(pathUrl);

  return (
    <>
      <div className="flex justify-between">
        <Link to="/" onClick={() => setActiveItem(false)}>
          <img
            className="w-[135px] h-[63px] ml-8"
            src={logo}
            alt="image not loaded!"
          />
        </Link>
        <span className="self-center cursor-pointer"></span>
      </div>

      <ul className="flex flex-col">
        {sidebarData.map((elem) => (
          <Link
            key={elem.key}
            to={elem.path}
            onClick={() => setActiveItem(elem.path)}
            className={`text-[17px] font-normal py-3 pl-8 hover:bg-main focus:bg-main ${
              activeItem === elem.path
                ? "bg-main text-white"
                : "hover:text-white"
            } transition-colors duration-300`}
          >
            <span className="m-0 p-0 flex gap-2">
              {elem.icon} <span>{elem.title}</span>
            </span>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
