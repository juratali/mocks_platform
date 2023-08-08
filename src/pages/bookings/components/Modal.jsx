/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "../../../widgets";
import { useEffect, useState } from "react";
import "./style.css";
import { handleChangeInput } from "../utils";

import {
  AddResultInputs,
  Close,
  InfoInputs,
  ModalName,
  SwitchToggle,
} from "./modal/index";

const BookingModal = ({
  createOrUpdateHandler,
  isLoading,
  data,
  setData,
  isOpen,
  setIsOpen,
  type,
  examId,
}) => {
  if (!isOpen) return null;

  const [isModalVisible, setModalVisible] = useState(false);
  const [mergeResult, setMergeResult] = useState(
    type === "CREATE" ? false : true
  );

  const changeInputHandler = (name, value) => {
    handleChangeInput(data, setData, name, value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setModalVisible(true);
    }, 20);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed left-0 right-0 top-0 bottom-0 bg-rgb_gray"
            onClick={() => {
              setIsOpen(false);
              setData({
                examId: Number(examId),
                name: "",
                surname: "",
                phone_number: "",
              });
            }}
          ></div>

          {/* modal */}
          <div
            className={`fixed top-[0%] right-[0%] w-[420px] min-h-[100vh] h-auto bg-white rounded-s-lg px-3 py-7 ${
              isModalVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition: "all 0.5s ease",
            }}
          >
            {/* Close icon button */}
            <Close setData={setData} setIsOpen={setIsOpen} examId={examId} />

            <form onSubmit={createOrUpdateHandler}>
              <div className="flex flex-col px-10 gap-7">
                <ModalName type={type} />

                {/* Candidate Info Inputs */}
                <InfoInputs
                  data={data}
                  changeInputHandler={changeInputHandler}
                />

                {/* Swtich toggle */}
                <SwitchToggle
                  data={data}
                  mergeResult={mergeResult}
                  setMergeResult={setMergeResult}
                />

                {/* Add result inputs */}
                <AddResultInputs
                  changeInputHandler={changeInputHandler}
                  data={data}
                  mergeResult={mergeResult}
                />

                {/* Add // Save button */}
                <Button
                  name={type === "CREATE" ? "Add candidate" : "Save"}
                  width="w-full"
                  type="submit"
                  isLoading={isLoading}
                  loadingValue={type === "CREATE" ? "Adding.." : "Saving..."}
                />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default BookingModal;
