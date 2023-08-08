/* eslint-disable react/prop-types */
import { Navbar } from "../../widgets";
import { cardData } from "./utils";
import { CardsList, PaymentTable } from "./components";

const Dashboard = () => {
  return (
    <>
      <Navbar name={"Dashboard"} />

      {/* card */}
      <div className="flex flex-wrap gap-[5%] justify-start">
        {cardData.map((elem) => {
          return <CardsList key={elem.key} elem={elem} />;
        })}
      </div>

      <div className="flex flex-col w-[55%] p-8 gap-6 bg-white rounded-[10px]">
        <div className="flex justify-between">
          <h1 className="text-[22px]">Latest payments</h1>
          <span className="text-main self-center text-[15px]">{`Explore all ->`}</span>
        </div>
        <div className="overflow-x-auto overflow-y-auto w-full h-[40vh]">
          <PaymentTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
