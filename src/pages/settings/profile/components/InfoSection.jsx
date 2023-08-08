/* eslint-disable react/prop-types */
const InfoSection = ({ data }) => {
  return (
    <div key={data.key}>
      <span className="text-[16px] font-semibold">{data.key}</span>:{" "}
      <span className={`font-bold ${data.color} text-[15px]`}>
        {data.value}
      </span>
    </div>
  );
};

export default InfoSection;
