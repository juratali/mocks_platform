/* eslint-disable react/no-unescaped-entities */
import { SubNavbar } from "@/widgets";

const TopUp = () => {
  return (
    <>
      <SubNavbar name={"Top-up Balance"} key={"TopUp"} />
      <h1>
        Sorry! At the moment payments are made only through admin, Soon we will
        solve this problem and the possibility to pay through payment providers
        will appear, God willing!
      </h1>

      <ul className="w-[40%]">
        <li className="flex justify-between">
          <span>Phone: </span>
          <span className="font-semibold">+998 (93) 467-12-70</span>
        </li>
        <li className="flex justify-between">
          <span>Telegram: </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/juratali"
            className="text-[blue] font-semibold"
          >
            @juratali
          </a>
        </li>
      </ul>
    </>
  );
};

export default TopUp;
