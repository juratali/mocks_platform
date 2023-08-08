// Separate function for changeInputHandler
import { overallBand } from "../../../utils/bandScore";

const handleChangeInput = (data, setData, name, value) => {
  const newValue =
    name === "listening" ||
    name === "reading" ||
    name === "writing" ||
    name === "speaking"
      ? parseFloat(value)
      : value;

  setData((prevData) => ({
    ...prevData,
    [name]: newValue.toString(),
    overall_score:
      name === "listening" ||
      name === "reading" ||
      name === "writing" ||
      name === "speaking"
        ? overallBand(
            name === "listening" ? newValue : parseFloat(prevData.listening),
            name === "reading" ? newValue : parseFloat(prevData.reading),
            name === "writing" ? newValue : parseFloat(prevData.writing),
            name === "speaking" ? newValue : parseFloat(prevData.speaking)
          )
        : prevData.overall_score,
  }));
};

export default handleChangeInput;
