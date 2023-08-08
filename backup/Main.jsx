/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Navbar, Button, ExamSkeleton } from "../../widgets";
import { ToggleView, ExamTable, ExamCard, AddExamModal } from "./components";
import { examService } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { failure, onStart, success } from "../../store/slices/exam";
import {
  addExamStart,
  addExamFailure,
  addExamSuccess,
} from "../../store/slices/addExam";

const Exams = () => {
  const [toggleGrid, setToggleGrid] = useState(true);
  const [isCardVisible, setCardVisibility] = useState(false);
  const [isTableVisible, setTableVisibility] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [exams, setExams] = useState([]);

  const [data, setData] = useState({
    name: "",
    exam_type: "PREMIUM",
    cost: "",
    date: "",
  });

  const { isLoading } = useSelector((state) => state.addExam);
  const { isLoadingExams } = useSelector((state) => state.exam);

  const dispatch = useDispatch();

  const getExams = async () => {
    dispatch(onStart());
    try {
      const response = await examService.getByAuthor();
      dispatch(success(response.data.exams));
      setExams(response.data.exams);
    } catch (error) {
      dispatch(failure(error));
      console.log(error);
    }
  };

  const addExamHandler = async (e) => {
    e.preventDefault();

    dispatch(addExamStart());

    try {
      const response = await examService.addExam(data);
      dispatch(addExamSuccess());
      setModalOpen(false);
      setExams((prevExams) => [...prevExams, response.data.exam]);
    } catch (error) {
      dispatch(addExamFailure());
      console.log(error);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setCardVisibility(true);
      setTableVisibility(true);
    }, 100);

    getExams();

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Navbar name={"Exams"} />

      <div className="flex justify-between">
        <ToggleView toggleGrid={toggleGrid} setToggleGrid={setToggleGrid} />

        <Button
          width="15%"
          key={new Date()}
          name={"+ New Exam"}
          onClick={() => setModalOpen(true)}
        />
      </div>

      <AddExamModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={data}
        setData={setData}
        addExamHandler={addExamHandler}
        isLoading={isLoading}
      />

      {toggleGrid &&
        isCardVisible &&
        (isLoadingExams ? (
          <ExamSkeleton />
        ) : (
          <div className="grid gap-6 grid-cols-4">
            {exams.map((exams) => {
              return <ExamCard key={exams.id} {...exams} />;
            })}
          </div>
        ))}

      {!toggleGrid && isTableVisible && <ExamTable exams={exams} />}
    </>
  );
};

export default Exams;
