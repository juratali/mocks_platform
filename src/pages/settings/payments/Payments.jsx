import { SubNavbar } from "@/widgets";
import { PaymentTable } from "./components";

const Payments = () => {
  return (
    <>
      <SubNavbar name={"Payments"} key={"Payments"} />
      <PaymentTable />
    </>
  );
};

export default Payments;
