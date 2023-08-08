/* eslint-disable react/prop-types */
import { MainInput } from "../../../../widgets";

const AddResultInputs = ({ mergeResult, changeInputHandler, data }) => {
  return (
    <div className={`${!mergeResult && "hidden"} flex flex-col gap-2`}>
      <div className="grid grid-flow-row grid-cols-2 gap-2 ">
        <MainInput
          name="listening"
          placeholder="Listening"
          type="number"
          fontSize="text-[15px]"
          onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
          required={mergeResult}
          value={data.listening}
        />
        <MainInput
          name="reading"
          placeholder="Reading"
          type="number"
          fontSize="text-[15px]"
          onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
          required={mergeResult}
          value={data.reading}
        />
        <MainInput
          name="writing"
          placeholder="Writing"
          type="number"
          fontSize="text-[15px]"
          onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
          required={mergeResult}
          value={data.writing}
        />
        <MainInput
          name="speaking"
          placeholder="Speaking"
          type="number"
          fontSize="text-[15px]"
          onChange={(e) => changeInputHandler(e.target.name, e.target.value)}
          required={mergeResult}
          value={data.speaking}
        />
      </div>
    </div>
  );
};

export default AddResultInputs;
