/* eslint-disable react/prop-types */
const SearchInput = ({ type = "text", value, name }) => {
  return (
    <form className="flex px-3 py-[3px] bg-grey rounded-[8px] gap-2">
      <img src="/icons/search-normal.svg" className="w-5" alt="#" />
      <input
        type={type}
        value={value}
        name={name}
        placeholder="Search..."
        className="w-[380px] h-[35px] rounded-[8px] outline-none bg-grey text-[16px] placeholder:text-[16px]"
      />
    </form>
  );
};

export default SearchInput;
