/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  let isConfirm = window.confirm("Are you sure?");

  const navigate = useNavigate();

  if (isConfirm) {
    localStorage.removeItem("token");
    navigate("/auth", {
      replace: true,
    });
  }

  navigate("/", { replace: true });
};

export default SignOut;
