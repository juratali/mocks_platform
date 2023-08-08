/* eslint-disable react/prop-types */
import { overallBand } from "../../../../utils/bandScore";

const SwitchToggle = ({ data, mergeResult, setMergeResult }) => {
  return (
    <div className="flex gap-2 justify-between">
      {/* Overall score info */}
      <p
        className={`text-[15px] text-start opacity-${
          mergeResult ? "100" : "0"
        }`}
      >
        Overall: {""}
        <span className="font-bold">
          {overallBand(
            Number(data.listening),
            Number(data.reading),
            Number(data.writing),
            Number(data.speaking)
          )}
        </span>
      </p>

      <div className="flex gap-2">
        <span className="text-[15px] text-[#333333c7] font-medium">
          Merge result
        </span>
        <label className="toggle" htmlFor="myToggle">
          <input
            className="toggle__input"
            name="toggle"
            type="checkbox"
            id="myToggle"
            defaultChecked={mergeResult}
            onClick={() => setMergeResult(!mergeResult)}
          />
          <div className="toggle__fill"></div>
        </label>
      </div>
    </div>
  );
};

export default SwitchToggle;
