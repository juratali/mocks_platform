/* eslint-disable react-hooks/exhaustive-deps */
import { Login } from "./components";
import { authOrgService } from "../../services";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { failure, onStart, success } from "../../store/slices/login";
import { alert } from "../../utils";
import { useNavigate } from "react-router-dom";
import { lsClient } from "../../utils";

const Auth = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    phone_number: "",
    password: "",
  });

  let navigate = useNavigate();

  const addFormHandler = async (e) => {
    e.preventDefault();
    dispatch(onStart());

    try {
      let formData = await authOrgService.login(data);
      lsClient.setItem("accessToken", formData.data.accessToken);
      lsClient.setItem("refreshToken", formData.data.refreshToken);
      dispatch(success(formData.data));
      alert("SUCCESS", formData.data.message);
      navigate("/");
    } catch (error) {
      dispatch(failure(error));
      alert("ERROR", error.response.data.message);
    }
  };

  return (
    <>
      <div className="w-full m-auto bg-white min-h-[100vh] flex justify-between container">
        <div className="flex justify-center items-center w-1/2">
          <img src="/images/Auth.png" alt="notLoaded" />
        </div>
        <div className="w-1/2 bg-main flex flex-col justify-center items-center ">
          <Login
            data={data}
            setData={setData}
            addFormHandler={addFormHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
