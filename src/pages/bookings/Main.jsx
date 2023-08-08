/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Button } from "../../widgets";
import { BookingModal, BookingTable } from "./components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBookings, useResults } from "./hooks";
import { queryClient } from "../../app/main";
import { RefreshIcon, SendIcon, UnSent, Done } from "../../constants";
import { alert } from "../../utils";

const Bookings = () => {
  const { examId } = useParams();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const [data, setData] = useState({
    examId: Number(examId),
    name: "",
    surname: "",
    phone_number: "",
    listening: "",
    reading: "",
    writing: "",
    speaking: "",
    overall_score: "",
  });

  const { fetchBookingsByExam, addUser, updateById, deleteById } = useBookings(
    examId,
    bookingId
  );

  const { allAreTrue, resultSender, checkStatus } = useResults(examId);

  let status = checkStatus.data?.data.status;
  let areAllSent = checkStatus.data?.data?.areAllSent;
  let allAreFilled = allAreTrue.data?.data.allAreTrue;

  const addFormHandler = (e) => {
    e.preventDefault();
    addUser.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookings", examId]);
        queryClient.invalidateQueries(["result", "areFilled"]);
        setShowCreateModal(false);
        setData({
          examId: Number(examId),
          name: "",
          surname: "",
          phone_number: "",
        });
      },
    });
  };

  const updateFormHandler = (e) => {
    e.preventDefault();
    updateById.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(["bookings", examId]);
        queryClient.invalidateQueries(["result", "areFilled"]);
        setShowUpdateModal(false);
        setData({
          examId: Number(examId),
          name: "",
          surname: "",
          phone_number: "",
        });
      },
    });
  };

  const deleteFormHandler = (bookingId) => {
    deleteById.mutate(bookingId, {
      onSuccess: () => {
        alert("SUCCESS", "user successfully deleted!");
        queryClient.invalidateQueries(["bookings", examId]);
        queryClient.invalidateQueries(["sendingStatus"]);
        queryClient.invalidateQueries(["result", "areFilled"]);
      },
    });
  };

  const sendResult = () => {
    if (areAllSent) {
      alert("ERROR", "Sending operation is already finished!");
      return;
    }

    resultSender.mutate(examId, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["sendingStatus"] });
        alert("SUCCESS", "sending is now started...");
      },
    });
  };

  const refresh = () => {
    setIsloading(true);

    queryClient.invalidateQueries(["sendingStatus"]);
    queryClient.invalidateQueries(["bookings", examId]);
    setTimeout(() => {
      setIsloading(false);
    }, 800);
  };

  return (
    <>
      <Navbar name={"Candidates"} key={"candidates"} back_path={"/exams"} />

      {/* Add booking */}
      <BookingModal
        isOpen={showCreateModal}
        setIsOpen={setShowCreateModal}
        data={data}
        setData={setData}
        createOrUpdateHandler={addFormHandler}
        type={"CREATE"}
        isLoading={addUser.isLoading}
        examId={examId}
      />

      <BookingModal
        isOpen={showUpdateModal}
        setIsOpen={setShowUpdateModal}
        data={data}
        setData={setData}
        createOrUpdateHandler={updateFormHandler}
        type={"UPDATE"}
        isLoading={updateById.isLoading}
        examId={examId}
      />

      <div className={`flex  gap-4 justify-between`}>
        <div className={`flex gap-4`}>
          <div
            onClick={refresh}
            className="flex justify-center items-center bg-main px-3 py-1 text-white rounded-sm cursor-pointer"
          >
            <RefreshIcon
              className={isLoading ? "animate-spin" : ""}
              fontSize="medium"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              <Done className="text-[#2ac42c]" />
              <span className="font-semibold text-[#2ac42c]">Sent:</span>
              <span className="ml-1">{status?.finished} ta</span>
            </div>
            <div className="flex">
              <UnSent className="text-[#E42369]" />
              <span className="font-semibold text-[#E42369]">Unsent: </span>
              <span className="ml-1">{status?.unsent} ta</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {/* send button */}
          <button
            disabled={resultSender.isLoading}
            onClick={sendResult}
            className={`flex gap-1 justify-center items-center bg-main text-white px-4 py-2 rounded-sm cursor-pointer ${
              !allAreFilled && "hidden"
            } disabled:cursor-default`}
          >
            <span>{resultSender.isLoading ? "Sending..." : "Send -"}</span>
            <SendIcon fontSize="small" />
          </button>

          {/* button for adding new candidate */}
          <Button
            name={"+ New Candidate"}
            key={new Date()}
            fontSize={"text-[15px]"}
            onClick={() => setShowCreateModal(true)}
          />
        </div>
      </div>

      {fetchBookingsByExam.isLoading ? (
        <h1>loading....</h1>
      ) : fetchBookingsByExam?.error?.response?.status === 404 ? (
        <h1>There is no any data</h1>
      ) : (
        <BookingTable
          data={fetchBookingsByExam.data}
          setBookingId={setBookingId}
          examId={examId}
          setData={setData}
          setShowUpdateModal={setShowUpdateModal}
          deleteFormHandler={deleteFormHandler}
        />
      )}
    </>
  );
};

export default Bookings;
