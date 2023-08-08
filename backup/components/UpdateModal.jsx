/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import "./Modal.css";
import { CloseIcon } from "@/constants";
import { Button, MainInput } from "../../../widgets";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { examService } from "../../../services";

const UpdateExamModal = ({ isOpen, onClose, setUpdateModalOpen, getExams }) => {
  if (!isOpen) return null;
  const [isFree, setisFree] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { examId } = useSelector((state) => state.examId);

  const [data, setData] = useState({
    name: "",
    exam_type: "PREMIUM",
    cost: "",
    date: "",
  });

  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getExamById = async () => {
    try {
      const response = await examService.getExamById(examId.payload);
      const { name, cost, exam_type, date } = response.data.exam;

      // Correctly format the date using slice, split, reverse, and join functions
      let changedDate = date.slice(0, 10).split("-");
      let formatDate = `${changedDate[0]}-${changedDate[1]}-${changedDate[2]}`;

      setData({
        name,
        exam_type,
        cost,
        date: formatDate,
      });

      if (exam_type === "PREMIUM") {
        setisFree(false);
      } else if (exam_type === "FREE") {
        setisFree(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const updateExam = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await examService.update(examId.payload, data);
      setUpdateModalOpen(false);
      setIsLoading(false);
      getExams();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setModalVisible(true);
    }, 60);

    getExamById();
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
        className={`bg-white p-8 fixed top-1/2 left-1/2 w-1/4 h-auto modal_exam flex flex-col gap-4 ${
          isModalVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.3s ease-in-out" }}
        onSubmit={updateExam}
      >
        <div className="flex justify-end">
          <span onClick={onClose} className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>

        <h1 className="text-center text-[22px] font-bold">
          Update and Save exam
        </h1>

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
            name={"Update and save"}
            isLoading={isLoading}
            loadingValue="Saving..."
            type="submit"
            width={"w-[188px]"}
            key={"create_examasa"}
          />
        </div>
      </form>
    </>
  );
};

export default UpdateExamModal;
