/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, MainInput } from "../../../widgets";
import { useSelector } from "react-redux";

const Login = ({ data, setData, addFormHandler }) => {
  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { isLoading } = useSelector((state) => state.login);

  return (
    <form
      className="bg-white flex flex-col gap-4 px-12 py-16 w-1/2 h-auto"
      onSubmit={addFormHandler}
    >
      <h1 className="text-center text-[26px] font-bold mb-2">Login</h1>

      <div className="flex flex-col gap-2">
        <MainInput
          type={"number"}
          placeholder={"phone number"}
          value={data.phone_number}
          fontSize="15px"
          onChange={changeInputHandler}
          name={"phone_number"}
          required
          key={125}
        />

        <MainInput
          type={"password"}
          placeholder={"password"}
          value={data.password}
          fontSize="15px"
          onChange={changeInputHandler}
          name={"password"}
          required
          key={5654}
        />
      </div>

      <Button
        type="submit"
        name={"Login"}
        width={"w-full"}
        isLoading={isLoading}
        loadingValue="Loginning...."
      />
    </form>
  );
};

export default Login;
