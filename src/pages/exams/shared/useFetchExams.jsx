/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { onStart, success, failure } from "../../../store/slices/exam";
import { examService } from "../../../services";
import { useState, useEffect } from "react";

const useFetchExams = () => {
  const [exams, setExams] = useState([]);
  const { isLoadingExams } = useSelector((state) => state.exam);
  const dispatch = useDispatch();

  const fetchExams = async () => {
    dispatch(onStart());
    try {
      const response = await examService.getByAuthor();
      dispatch(success(response.data.exams));
      setExams(response.data.exams);
    } catch (error) {
      dispatch(failure(error));
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return { exams, setExams, isLoadingExams, fetchExams };
};

export default useFetchExams;
