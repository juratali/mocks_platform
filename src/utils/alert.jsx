import { toast } from "react-toastify";
import { Flip } from "react-toastify";

const alert = (type, message) => {
  const props = {
    position: "top-center",
    autoClose: 800,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  };

  switch (type) {
    case "SUCCESS":
      toast.success(`${message}`, props);
      break;
    case "ERROR":
      toast.error(`${message}`, props);
      break;
    default:
      toast("Wait! Default message!", props);
      break;
  }
};

export default alert;
