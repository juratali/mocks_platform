/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useCookies } from "react-cookie";

const cookieService = () => {
  const [setCookie, get] = useCookies(["token"]);

  setCookie("token", "juratbek1234Access", {
    httpOnly: true,
  });

  let cookies = get("token");
};
