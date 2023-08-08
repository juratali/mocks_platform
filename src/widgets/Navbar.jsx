/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchInput, Languages, Profile } from ".";
import { Back } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ name, back_path }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-[70px] w-full px-5 bg-white shadow-sm rounded-md mt-6">
      <div className="flex gap-3 justify-between items-center">
        <Link className={`${!back_path && "hidden"} flex`} to={back_path}>
          <Back fontSize="small" className="self-center" />
        </Link>
        <h1 className="text-[20px] m-0 p-0">{name}</h1>
      </div>
      <SearchInput type={"text"} name={"search"} />
      <div className="flex gap-6 px-0 py-0">
        <Languages />
        <div className="realtive">
          <span
            className="cursor-pointer"
            onClick={() => setOpen((open) => !open)}
          >
            <img src="/icons/profile.svg" alt="#" />
          </span>
          {open && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
