const Pagination = () => {
  return (
    <>
      <ul className="inline-flex -space-x-px text-base h-10 flex gap-2">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight  bg-white border border border-[#9898986e] rounded-l-lg  shadow-md "
          >
            {`<`}
          </a>
        </li>

        <div className="flex gap-1">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight  bg-main border border border-main shadow-xl  text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight  border border border-[#9898986e] bg-white shadow-md"
            >
              2
            </a>
          </li>
        </div>

        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight  bg-white border border-[#9898986e] rounded-r-lg shadow-md"
          >
            {`>`}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
