/* eslint-disable react/prop-types */
const Cardslist = ({ elem }) => {
  return (
    <div className="cursor-pointer flex bg-white px-[31px] py-[28px] w-[25%] rounded-[10px] gap-[30px]">
      <div className="flex items-center">
        <img src={elem.image} alt="yuklanmadi!" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-[#2f2f2f] text-[22px] font-bold">123 282 828</h1>
        <span className="text-[#030229] font-normal text-[15px]">
          {elem.title}
        </span>
      </div>
    </div>
  );
};

export default Cardslist;
