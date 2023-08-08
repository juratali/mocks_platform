/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { SubNavbar } from "@/widgets";
import { profileData } from "./utils";
import { InfoSection, ProfileImage, UpdateForm } from "./components";
import { useMutation, useQuery } from "react-query";
import { authOrgService } from "../../../services";
import { queryClient } from "../../../app/main";
import { alert } from "../../../utils";

const ProfileSettings = () => {
  const [isShown, setShown] = useState(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
    phone_number: "",
    email: "",
  });

  const changeInputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateInfoMuatation = useMutation((data) =>
    authOrgService.updateInfo(data)
  );

  const getme = useQuery(["organizerInfo"], {
    queryFn: authOrgService.getMe,
  });

  useEffect(() => {
    if (getme.isSuccess) {
      const organizer = getme.data?.data?.data?.Organizer[0];
      setData({
        name: organizer.name,
        surname: organizer.surname,
        email: organizer.email,
        phone_number: organizer.phone_number,
      });
    }
  }, [getme.isSuccess]);

  const updateFormHandler = (e) => {
    e.preventDefault();
    updateInfoMuatation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(["organizerInfo"]);
        alert("SUCCESS", "your info updated successfully!");
      },
      onError: (error) => {
        let errorMessage = error?.response?.data?.message;
        alert(
          "ERROR",
          `${errorMessage ? errorMessage : "Error while updating!"}`
        );
      },
    });
  };

  return (
    <>
      <SubNavbar name={"Profile"} key={"Profile"} />

      {/* profile info section */}
      <div className="flex gap-10 cursor-auto">
        <ProfileImage isShown={isShown} setShown={setShown} />

        <div className="flex flex-col justify-between">
          {profileData.map((elem) => {
            return <InfoSection key={elem.key} data={elem} />;
          })}
        </div>
      </div>

      <UpdateForm
        changeInputHandler={changeInputHandler}
        data={data}
        updateFormHandler={updateFormHandler}
        isLoading={updateInfoMuatation.isLoading}
      />
    </>
  );
};

export default ProfileSettings;
