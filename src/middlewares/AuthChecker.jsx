/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { lsClient } from "../utils";

const AuthChecker = ({ children }) => {
  let token = lsClient.getItem();

  let isExpired = false;

  if (!token || isExpired) {
    return <Navigate to={"/auth"} />;
  }

  return children;
};

export default AuthChecker;
