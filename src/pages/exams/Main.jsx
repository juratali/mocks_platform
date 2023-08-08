/* eslint-disable react-hooks/exhaustive-deps */
// Exams.js
import { useState, useEffect } from "react";
import { Navbar, Button, ExamSkeleton } from "../../widgets";
import {
  ToggleView,
  ExamTable,
  ExamCard,
  AddExamModal,
  UpdateExamModal,
} from "./components";
import { useFetchExams } from "./shared";

const Exams = () => {
  const [toggleGrid, setToggleGrid] = useState(true);
  const [isCardVisible, setCardVisibility] = useState(false);
  const [isTableVisible, setTableVisibility] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const { isLoadingExams, exams, setExams, fetchExams } = useFetchExams();

  useEffect(() => {
    const delay = setTimeout(() => {
      setCardVisibility(true);
      setTableVisibility(true);
    }, 60);

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
        setModalOpen={setModalOpen}
        setExams={setExams}
      />

      <UpdateExamModal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        setUpdateModalOpen={setUpdateModalOpen}
        getExams={fetchExams}
      />

      {toggleGrid &&
        isCardVisible &&
        (isLoadingExams ? (
          <ExamSkeleton />
        ) : (
          <div className="grid gap-6 grid-cols-4">
            {exams.length === 0 ? (
              <h1>Imtixonlar topilmadi!</h1>
            ) : (
              exams.map((exam) => {
                return (
                  <ExamCard
                    key={exam.id}
                    {...exam}
                    setUpdateModalOpen={() => setUpdateModalOpen(true)}
                    fetchExams={fetchExams}
                  />
                );
              })
            )}
          </div>
        ))}

      {!toggleGrid && isTableVisible && <ExamTable exams={exams} />}
    </>
  );
};

export default Exams;
