import { useState } from "react";
import { useTryLogin, useTryRegister } from "../../http/hooks/useTryAuth";

export const useLogin = (onSuccessfulLogin = () => {}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [loginError, setLoginError] = useState(null);

  const { mutate: tryLogin } = useTryLogin();
  const { mutate: tryRegister } = useTryRegister();

  const changeTab = (index) => {
    setUserName("");
    setPassword("");
    setLoginError(null);
    setTabIndex(index);
  };

  const onSubmit = async () => {
    if (!userName || !password) {
      setLoginError("Username and Password are Required.");
      return;
    } else {
      setLoginError(null);
    }

    const body = {
      user_name: userName,
      password: password,
      admin_key: adminKey,
    };

    if (tabIndex === 0) {
      // login
      tryLogin(body, {
        onError: (axiosError) =>
          setLoginError(axiosError?.response?.data?.error),
        onSuccess: (body) => onSuccessfulLogin(body?.data),
      });
    } else {
      // register
      tryRegister(body, {
        onError: (axiosError) =>
          setLoginError(axiosError?.response?.data?.error),
        onSuccess: (body) => onSuccessfulLogin(body?.data),
      });
    }
  };

  return {
    changeTab,
    tabIndex,
    userName,
    password,
    adminKey,
    setUserName,
    setPassword,
    setAdminKey,
    loginError,
    onSubmit,
  };
};
