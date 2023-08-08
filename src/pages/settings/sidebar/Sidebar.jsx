import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "./utils";
import { LogoutOutlinedIcon } from "@/constants";
import { useState } from "react";

const SettingSidebar = () => {
  const pathUrl = useLocation().pathname.split("/")[2];
  const [toggle, setToggle] = useState(`/${pathUrl}`);

  const LogOut = () => {
    localStorage.clear();
  };

  return (
    <div className="flex flex-col gap-8 w-[25%] border-r-[1px] border-r-[#757575] px-2 py-0 min-h-[70vh]">
      <h1 className="text-[27px] font-semibold text-[#000] ">Settings</h1>

      <ul className="flex flex-col gap-5 p-0">
        {sidebarData.map((elem) => {
          return (
            <Link
              to={`/settings${elem.path}`}
              key={elem.key}
              className="flex gap-4 items-center"
              onClick={() => setToggle(elem.path)}
            >
              {elem.icon}{" "}
              <span
                className={`text-[16px] ${toggle === elem.path && "font-bold"}`}
              >
                {elem.name}
              </span>
            </Link>
          );
        })}

        <Link
          to={"/auth"}
          className="cursor-pointer flex gap-4 items-center text-[red]"
          onClick={LogOut}
        >
          <LogoutOutlinedIcon
            style={{
              display: "inline-block",
              transform: `scaleX(-1)`,
              color: "red",
            }}
          />
          Log out
        </Link>
      </ul>
    </div>
  );
};

export default SettingSidebar;
