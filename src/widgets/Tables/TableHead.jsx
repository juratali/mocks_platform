/* eslint-disable react/prop-types */
const TableHead = ({ children }) => {
  return (
    <thead className="bg-white text-center border-y-[1px] border-y-[#ddd]">
      {children}
    </thead>
  );
};

export default TableHead;
