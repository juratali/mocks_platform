/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderCell,
  DataCell,
  TableRow,
  TableHead,
  Table,
  TableBody,
} from "../../../widgets";

import {
  DeleteOutlineOutlinedIcon,
  EditNoteOutlinedIcon,
  VisibilityOutlinedIcon,
} from "@/constants";

const Columns = {
  ID: "ID",
  name: "Name",
  date: "Date",
  status: "Status",
  cost: "Cost",
  attenders: "Attenders",
  actions: "Actions",
};

const ExamTable = ({ exams }) => {
  const [isTableVisible, setTableVisibility] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setTableVisibility(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return exams.length === 0 ? (
    <h1>Imtixonlar topilmadi!</h1>
  ) : (
    <Table isTableVisible={isTableVisible}>
      <TableHead>
        <TableRow>
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
        {exams.map((exam) => (
          <TableRow key={exam.id}>
            <DataCell
              fontWeight={"font-semibold"}
              textColor={"text-[#000]"}
              value={exam.id}
            />
            <DataCell value={exam.name} />
            <DataCell value={exam.createdAt.slice(0, 10)} />
            <DataCell
              value={"Available"}
              fontWeight={"font-semibold"}
              textColor={"text-[#3BCBB2]"}
            />

            <DataCell
              value={exam.cost}
              fontWeight={"font-semibold"}
              textColor={"text-[#E42369] "}
            />
            <DataCell value={120} />
            <DataCell>
              <Link to={`/exams/${exam.id}`} className="flex gap-[5px]">
                <VisibilityOutlinedIcon fontSize="small" />
                <EditNoteOutlinedIcon fontSize="small" />
                <DeleteOutlineOutlinedIcon
                  fontSize="small"
                  className="text-[red]"
                />
              </Link>
            </DataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExamTable;
