/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  HeaderCell,
  DataCell,
} from "../../../widgets/Tables";
import {
  EditOutlinedIcon,
  DeleteOutlineOutlinedIcon,
  AccessTimeOutlinedIcon,
  Done,
  UnSent,
} from "../../../constants";

const CandidateTable = ({
  data,
  setBookingId,
  setShowUpdateModal,
  setData,
  examId,
  deleteFormHandler,
}) => {
  const [isTableVisible, setTableVisibility] = useState(false);
  const Columns = {
    ID: "ID",
    fullname: "Fullname",
    phone: "Phone",
    status: "IsSent",
    result: "Results",
    actions: "Actions",
  };

  const update = (data) => {
    setBookingId(data.id);
    setShowUpdateModal(true),
      setData({
        examId: Number(examId),
        name: data.name,
        surname: data.surname,
        phone_number: data.phone_number,
        listening: data.listening,
        reading: data.reading,
        writing: data.writing,
        speaking: data.speaking,
      });
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setTableVisibility(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Table isTableVisible={isTableVisible}>
      <TableHead>
        <TableRow className="bg-white text-center border-y-[1px] border-y-[#ddd] ">
          {Object.keys(Columns).map((elem) => {
            return (
              <HeaderCell
                key={elem.length * Math.random()}
                value={Columns[elem]}
              />
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.data.bookings.map((elem) => {
          return (
            <TableRow
              key={elem.id}
              className="border-b-[1px] border-b-[#ddd] bg-[#ffffff70] even:bg-white"
            >
              <DataCell fontWeight={"font-bold"} value={elem.id} />
              <DataCell
                fontWeight={"font-semibold"}
                value={`${elem.name} ${elem.surname}`}
              />

              <DataCell
                fontWeight={"font-semibold"}
                value={elem.phone_number}
              />

              <DataCell fontWeight={"font-semibold"}>
                {elem.status === "SENDING" ? (
                  <AccessTimeOutlinedIcon
                    fontSize="medium"
                    className="text-[#3f3fbe]"
                  />
                ) : elem.status === "FINISHED" ? (
                  <Done fontSize="medium" className="text-[#2ac42c]" />
                ) : elem.status === "UNSENT" ? (
                  <UnSent fontSize="medium" className="text-[red]" />
                ) : (
                  <span>not started</span>
                )}
              </DataCell>

              <DataCell fontWeight={"font-semibold"}>
                <span
                  className={`text-white ${
                    elem.isFilled ? "bg-[#E42369]" : "bg-main"
                  } px-3 py-[3px] rounded-md text-[13px]`}
                >
                  {`Merge${elem.isFilled ? "d" : " result"}`}
                </span>
              </DataCell>

              <DataCell fontWeight={"font-semibold"}>
                <div className="m-0 p-0 flex gap-1">
                  <EditOutlinedIcon
                    fontSize="small"
                    className="cursor-pointer"
                    onClick={() => update(elem)}
                  />
                  <DeleteOutlineOutlinedIcon
                    fontSize="small"
                    className="cursor-pointer text-[red]"
                    onClick={() => deleteFormHandler(elem.id)}
                  />
                </div>
              </DataCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CandidateTable;
