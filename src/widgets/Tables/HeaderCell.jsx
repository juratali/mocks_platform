/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const HeaderCell = ({ value }) => {
  return (
    <th
      className={`font-bold py-3 px-2.5 text-[#000] text-[15px] leading-5 text-left`}
    >
      {value}
    </th>
  );
};

export default HeaderCell;
