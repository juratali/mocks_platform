/* eslint-disable react/prop-types */
import { EditOutlinedIcon, DeleteOutlineOutlinedIcon } from "@/constants";
import { durovImage } from "../../../../constants";

const ProfileImage = ({ isShown, setShown }) => {
  return (
    <div
      className="w-[150px] h-[150px] relative border custom-image shadow-ld"
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img
        src={durovImage}
        alt="yuklanmadi!"
        className={`${isShown && "opacity-40"}`}
      />
      <div
        className={`absolute flex justify-center gap-2 items-center inset-0 ${
          !isShown && "hidden"
        }`}
      >
        <EditOutlinedIcon
          className="cursor-pointer"
          style={{ fontSize: "26px" }}
        />
        <DeleteOutlineOutlinedIcon
          className="cursor-pointer text-[red]"
          style={{ fontSize: "26px" }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
