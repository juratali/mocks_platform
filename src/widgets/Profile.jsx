/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from "react-router-dom";
import React from "react";

const profileData = [
  {
    key: 1,
    title: "Settings",
    path: "/settings/profile",
    icon: "/icons/settings.svg",
  },
  {
    key: 2,
    title: "Log out",
    icon: "/icons/sign out.svg",
    path: "/auth",
  },
];

const Profile = () => {
  const location = useLocation().pathname;

  const handleLogout = () => {
    let isOk = window.confirm("Are you sure?");
    if (isOk) {
      localStorage.clear();
      window.location.href = "/auth";
    }
  };

  return (
    <ul className="absolute top-[105px] right-[50px] bg-white p-4 shadow-2xl">
      <li className="flex gap-3 mb-4">
        <img
          className="w-full h-12"
          src="/icons/profile.svg"
          alt="yuklanmadi!"
        />
        <div className="flex flex-col">
          <div className="flex gap-3">
            <h1 className="text-[17px] font-semibold">Jur'atbek</h1>
            <span className="text-[11px] px-[5px] py-[1.5px] m-0 self-center text-[#15BE45] font-bold bg-status rounded-[4px] shadow-md">
              Active
            </span>
          </div>
          <span className="text-[15px] text-[#999999] ">sardor@gamil.com</span>
        </div>
      </li>

      <ul className="flex flex-col border-t-[1px] border-[#d5d3d3]">
        {profileData.map((elem) => (
          <React.Fragment key={elem.key}>
            <Link
              to={elem.key === 2 ? `${location}` : elem.path}
              onClick={elem.key === 2 ? handleLogout : null}
            >
              <li className="flex gap-2 p-[5px] cursor-pointer">
                <img src={elem.icon} alt="yuklanmadi!" />
                <span>{elem.title}</span>
              </li>
            </Link>
            <hr className="border-[#d5d3d3] " />
          </React.Fragment>
        ))}
      </ul>
    </ul>
  );
};

export default Profile;
