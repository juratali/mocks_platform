/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TableRow = ({ children, nth_child_bgColor = "even:bg-white" }) => {
  return (
    <tr
      className={`border-b-[1px] border-b-[#ddd] bg-[#ffffff70] ${nth_child_bgColor} `}
    >
      {children}
    </tr>
  );
};

export default TableRow;
