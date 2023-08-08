/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import "./Modal.css";
import { CloseIcon } from "@/constants";
import { Button, MainInput } from "../../../widgets";
import { useState, useEffect } from "react";
import { examService } from "../../../services";

const AddExamModal = ({ isOpen, onClose, setExams, setModalOpen }) => {
  if (!isOpen) return null;
  const [isFree, setisFree] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    exam_type: "PREMIUM",
    cost: "",
    date: "",
  });

  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addExamHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await examService.addExam(data);
      setExams((prevExams) => [...prevExams, response.data.exam]);
      setModalOpen(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setModalVisible(true);
    }, 60);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bottom-0 bg-rgb_gray"
        onClick={onClose}
      ></div>

      {/* modal */}
      <form
        onSubmit={addExamHandler}
        className={`bg-white p-8 fixed top-1/2 left-1/2 w-1/4 h-auto modal_exam flex flex-col gap-4 ${
          isModalVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.3s ease-in-out" }}
      >
        <div className="flex justify-end">
          <span onClick={onClose} className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>

        <h1 className="text-center text-[22px] font-bold">Create a new exam</h1>

        <MainInput
          type={"text"}
          placeholder={"Exam name"}
          value={data.name}
          key={"exam_name"}
          name={"name"}
          onChange={changeInputHandler}
          required
          disabled={isLoading}
        />

        <MainInput
          type={"date"}
          placeholder={"Select date"}
          value={data.date}
          key={"exam_date"}
          name={"date"}
          onChange={changeInputHandler}
          required
          disabled={isLoading}
        />

        {/* free or premium checkers */}
        <div className="flex gap-2 w-full">
          <span
            className={`cursor-pointer w-1/2 p-2 text-center rounded-[4px]  ${
              !isFree
                ? "bg-main text-white"
                : "bg-[#c9c9c98a] border border-[#c9c9c98a] text-[black]"
            }`}
            onClick={() => {
              !isLoading && setisFree(false),
                setData((prevData) => ({
                  ...prevData,
                  exam_type: "PREMIUM",
                }));
            }}
          >
            Premium
          </span>
          <span
            className={`cursor-pointer w-1/2 shadow-2xl p-2 text-center rounded-[4px]  ${
              isFree
                ? "bg-main text-white"
                : "bg-[#c9c9c98a] border border-[#c9c9c98a]"
            }`}
            onClick={() => {
              !isLoading && setisFree(true),
                setData((prevData) => ({
                  ...prevData,
                  exam_type: "FREE",
                  cost: null,
                }));
            }}
          >
            Free
          </span>
        </div>

        {!isFree && (
          <MainInput
            type={"string"}
            placeholder={"Enter the amount"}
            value={data.cost}
            key={"amount"}
            name={"cost"}
            required
            onChange={changeInputHandler}
            disabled={isLoading}
          />
        )}

        <div className="flex justify-center">
          <Button
            name={"Create"}
            isLoading={isLoading}
            loadingValue="Creating..."
            type="submit"
            width={"w-[188px]"}
            key={"create_examasa"}
          />
        </div>
      </form>
    </>
  );
};

export default AddExamModal;
