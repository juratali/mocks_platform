/* eslint-disable react/prop-types */
import { CloseIcon } from "../../../../constants";

const Close = ({ setIsOpen, setData, examId }) => {
  return (
    <div
      className="text-end cursor-pointer"
      onClick={() => {
        setIsOpen(false),
          setData({
            examId: Number(examId),
            name: "",
            surname: "",
            phone_number: "",
          });
      }}
    >
      <CloseIcon />
    </div>
  );
};

export default Close;
