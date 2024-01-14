import { useContext } from "react";
import { useUpdateUserAttribute } from "../../http/hooks/useUpdateUserAttribute";
import { LoginContext } from "../contexts/LoginContext";

export const useServerSettings = (user) => {
  const { mutate: updateAttribute } = useUpdateUserAttribute();
  const { updateUser } = useContext(LoginContext);

  const toggleSetting = (key) => {
    const newSettings = {
      ...(user.settings || {}),
      [key]: !user.settings?.[key],
    };

    const updateObj = {
      settings: newSettings,
    };

    updateAttribute(
      {
        id: user._id,
        updateObj,
      },
      {
        onSuccess: updateUser,
      }
    );
  };

  return {
    toggleSetting,
  };
};
