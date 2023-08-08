import { Outlet } from "react-router-dom";
import { SidebarPage } from "../";

const HomePage = () => {
  return (
    <div className="flex gap-5 h-full mx-0 mt-0 p-0 container mx-auto">
      <div className="flex flex-col pt-8 gap-10 w-[18%] min-h-[100vh] h-auto bg-white shadow-sm">
        <SidebarPage />
      </div>
      <div className="w-[80%] min-h-[100vh] h-auto flex flex-col mx-10 gap-6 pb-20">
        <Outlet context={false} />
      </div>
    </div>
  );
};

export default HomePage;
