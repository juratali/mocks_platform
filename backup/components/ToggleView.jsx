/* eslint-disable react/prop-types */
import { FormatListBulletedIcon, GridViewIcon } from "@/constants";

const ToggleView = ({ toggleGrid, setToggleGrid }) => {
  return (
    <div className="flex gap-1 items-center bg-white p-2 rounded-md shadow-sm">
      {/* List */}
      <div
        onClick={() => setToggleGrid(false)}
        className={`cursor-pointer text-main ${!toggleGrid && "hidden"}`}
      >
        <FormatListBulletedIcon fontSize="small" />
      </div>

      {/* Grid */}
      <div
        onClick={() => setToggleGrid(true)}
        className={`cursor-pointer ${toggleGrid && "hidden"} text-main`}
      >
        <GridViewIcon fontSize="small" />
      </div>
    </div>
  );
};

export default ToggleView;
