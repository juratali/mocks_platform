/* eslint-disable react/prop-types */
import { MainInput, Button } from "../../../../widgets";

const UpdateForm = ({
  changeInputHandler,
  data,
  updateFormHandler,
  isLoading,
}) => {
  return (
    <form
      action="#"
      className="flex flex-col gap-4 w-full"
      onSubmit={updateFormHandler}
    >
      <div className="grid grid-flow-row grid-cols-2 gap-2">
        <MainInput
          type={"text"}
          placeholder={"your name"}
          value={data.name}
          name={"name"}
          onChange={changeInputHandler}
        />
        <MainInput
          type={"text"}
          placeholder={"your surname"}
          value={data.surname}
          name={"surname"}
          onChange={changeInputHandler}
        />
        <MainInput
          type={"number"}
          placeholder={"your phone number"}
          value={data.phone_number}
          name={"phone_number"}
          onChange={changeInputHandler}
        />
        <MainInput
          type={"email"}
          placeholder={"your email"}
          value={data.email}
          name={"email"}
          onChange={changeInputHandler}
        />
      </div>
      <Button
        name={"Saqlash"}
        width={"w-[20%]"}
        type={"submit"}
        isLoading={isLoading}
        loadingValue="Saving..."
      />
    </form>
  );
};

export default UpdateForm;
