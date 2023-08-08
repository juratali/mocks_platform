/* eslint-disable react/prop-types */
const DataCell = ({
  children,
  textColor,
  value,
  fontWeight,
  py = "py-3",
  bgColor,
}) => {
  return (
    <td
      className={`${py} px-2.5 ${
        textColor ? textColor : "text-[#3F3F3F]"
      } break-all min-w-[20px] ${fontWeight} ${bgColor} `}
    >
      {value} {children}
    </td>
  );
};

export default DataCell;
