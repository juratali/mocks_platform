/* eslint-disable react/prop-types */
import { MainInput } from "../../../../widgets";

const InfoInputs = ({ data, changeInputHandler }) => {
  return (
    <div className="flex flex-col gap-4">
      <MainInput
        name="name"
        placeholder="Name"
        type="text"
        value={data.name}
        fontSize="text-[15px]"
        onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
      />
      <MainInput
        name="surname"
        placeholder="Surname"
        value={data.surname}
        fontSize="text-[15px]"
        onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
      />
      <MainInput
        name="phone_number"
        placeholder="+998 (93) 127-45-67"
        type="number"
        value={data.phone_number}
        fontSize="text-[15px]"
        onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default InfoInputs;
