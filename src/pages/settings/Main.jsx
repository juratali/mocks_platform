import { Navbar } from "@/widgets";
import { SubSidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="w-full flex flex-col gap-11">
      <Navbar name={"Settings"} />
      <div className="w-full flex gap-[5%] bg-white px-14 w-full py-9 min-h-[70vh] rounded-md shadow-sm">
        <SubSidebar />
        <div className="flex flex-col gap-6 w-[70%] h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
