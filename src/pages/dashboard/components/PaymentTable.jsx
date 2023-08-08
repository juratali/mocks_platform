/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  DataCell,
  HeaderCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "../../../widgets";

const PaymentTable = () => {
  const [isTableVisible, setTableVisibility] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setTableVisibility(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Table isTableVisible={isTableVisible} shadow={`shadow-sm`}>
      <TableHead>
        <TableRow>
          <HeaderCell value={"ID"} />
          <HeaderCell value={"Provider"} />
          <HeaderCell value={"Date"} />
          <HeaderCell value={"Amount"} />
          <HeaderCell value={"Download"} />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow nth_child_bgColor="even:bg-[#f3f3f3]">
          <DataCell value={1} />
          <DataCell value={"ADMIN"} />
          <DataCell value={"20-08-2023"} />
          <DataCell value={"100 000"} />
          <DataCell py="py-0">
            <img src="/icons/Download.svg" alt="#" />
          </DataCell>
        </TableRow>
        <TableRow nth_child_bgColor="even:bg-[#f3f3f3]">
          <DataCell value={1} />
          <DataCell value={"ADMIN"} />
          <DataCell value={"20-08-2023"} />
          <DataCell value={"100 000"} />
          <DataCell py="py-0">
            <img src="/icons/Download.svg" alt="#" />
          </DataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PaymentTable;
