import { createContext, useState } from "react";
import { useTryLogin } from "../../http/hooks/useTryAuth";
import { useNavigate } from "react-router";
import { NO_FUNC } from "../../../constants";

export const LoginContext = createContext();
export const loginLocalStorageKey = "loginData";

export const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(null);
  const [autoLoginTried, setAutoLoginTried] = useState(false);
  const { mutate: tryLogin } = useTryLogin();
  const navigate = useNavigate();

  const onSuccessfulLogin = (user) => {
    if (!user) return;
    setLoginData(user);
    const userString = JSON.stringify(user);
    localStorage.setItem(loginLocalStorageKey, userString);
  };

  const logout = () => {
    setLoginData(null);
    localStorage.removeItem(loginLocalStorageKey);
    navigate("/");
  };

  const autoLogin = () => {
    const userFromLS = localStorage.getItem(loginLocalStorageKey);
    const existingUser = JSON.parse(userFromLS);

    if (existingUser) {
      const autoLoginBody = {
        user_name: existingUser.user_name,
        auto_login_key: existingUser.auto_login_key,
      };

      tryLogin(autoLoginBody, {
        onSuccess: (body) => onSuccessfulLogin(body?.data),
        onError: (axiosError) => {
          logout();
          console.log(axiosError?.response?.data?.error);
        },
      });
    }
    setAutoLoginTried(true);
  };

  const updateUser = ({ onSuccessFn = NO_FUNC }) => {
    const body = {
      user_name: loginData.user_name,
      auto_login_key: loginData.auto_login_key,
    };

    tryLogin(body, {
      onSuccess: (body) => {
        onSuccessfulLogin(body?.data);
        onSuccessFn();
      },
      onError: (axiosError) => {
        logout();
        console.log(axiosError?.response?.data?.error);
      },
    });
  };

  if (!autoLoginTried) autoLogin();

  // Data Methods
  const getIsPlayer = () => {
    const isPlayer = loginData?.collection?.champions?.length > 0;
    return isPlayer;
  };

  const loginProviderData = {
    loginData,
    onSuccessfulLogin,
    updateUser,
    logout,
    getIsPlayer,
  };

  return (
    <LoginContext.Provider value={loginProviderData}>
      {children}
    </LoginContext.Provider>
  );
};
