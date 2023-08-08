/* eslint-disable react/prop-types */
const Table = ({ children, isTableVisible = true, shadow = "shadow-md" }) => {
  return (
    <table
      className={`rounded-t-lg border-collapse text-[14px] min-w-[400px] w-full overflow-hidden ${shadow} ${
        isTableVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      {children}
    </table>
  );
};

export default Table;
