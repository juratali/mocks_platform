import {
  ManageAccountsOutlinedIcon,
  ReceiptOutlinedIcon,
  AccountBalanceWalletOutlinedIcon,
} from "../../../../constants";

const sidebarData = [
  {
    key: 1,
    path: "/profile",
    name: "Profile",
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    key: 2,
    path: "/top-up",
    name: "Top-up",
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    key: 3,
    path: "/payment",
    name: "Payments",
    icon: <ReceiptOutlinedIcon />,
  },
  // {
  //   key: 4,
  //   path: "/security",
  //   name: "Security",
  //   icon: <SecurityOutlinedIcon />,
  // },
];

export default sidebarData;
