/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { examService } from "../../../services";
import {
  DeleteOutlineOutlinedIcon,
  EditNoteOutlinedIcon,
} from "../../../constants";
import { alert } from "../../../utils";
import { useDispatch } from "react-redux";
import { getExamId } from "../../../store/slices/updateExam";

const ExamCard = ({ getExams, setUpdateModalOpen, ...exams }) => {
  const [isCardVisible, setCardVisibility] = useState(false);

  const dispatch = useDispatch();

  const deletExam = async (examId) => {
    try {
      let isOk = window.confirm("Are you sure to delete this exam?");
      if (isOk) {
        await examService.delete(examId);
        alert("SUCCESS", "Exam is successfully deleted!");
        getExams();
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  const findExamId = (id) => {
    setUpdateModalOpen(true);
    dispatch(getExamId(id));
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setCardVisibility(true);
    }, 0);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className={`flex flex-col px-5 py-4 rounded-[9px] bg-white shadow-md gap-5 ${
        isCardVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <div className="flex justify-between">
        <img src="/images/exam_icon.svg" className="w-10" alt="#" />
        <div className="flex gap-3">
          <span className="font-medium text-[14px] text-[#757575]">12/88</span>
          <div className="flex">
            <EditNoteOutlinedIcon
              fontSize="small"
              style={{ color: "#757575", cursor: "pointer" }}
              onClick={() => findExamId(exams.id)} // Corrected onClick function
            />
            <DeleteOutlineOutlinedIcon
              fontSize="small"
              style={{ color: "#757575" }}
              className="cursor-pointer"
              onClick={() => deletExam(exams.id)} // Corrected onClick function
            />
          </div>
        </div>
      </div>
      <Link to={"/exams/1"} className="flex flex-col gap-3">
        <div className="flex flex-col gap-[2px]">
          <h1 className="font-bold text-[18px]">{`${exams.name[0].toUpperCase()}${exams.name
            .slice(1, exams.name.length)
            .toLowerCase()}`}</h1>
          <span className="text-[#757575] font-semibold text-[13px]">
            {`#${exams.id}`}, {exams.createdAt.slice(0, 10)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-main font-semibold text-[14px] self-center">
            • Available
          </span>
          <span className="text-[#E42369] font-bold text-[15px]">
            {exams.exam_type === "FREE" ? "FREE" : `${exams.cost} so'm`}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ExamCard;
