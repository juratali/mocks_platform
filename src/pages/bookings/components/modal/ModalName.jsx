/* eslint-disable react/prop-types */
const ModalName = ({ type }) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-2xl font-semibold text-[#000]">
        {type === "CREATE" ? "Create candidate" : "Update candidate"}
      </h1>
    </div>
  );
};

export default ModalName;
