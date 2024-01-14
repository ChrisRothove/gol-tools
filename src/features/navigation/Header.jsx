import { AppBar, Drawer, Toolbar } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useContext, useState } from "react";
import { Login } from "./Login";
import { LoginContext } from "../contexts/LoginContext";
import { UserWithPoints } from "../users/UserWithPoints";
import { MyInfo } from "../users/MyInfo";

export function LoginHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { loginData, onSuccessfulLogin } = useContext(LoginContext);

  const onClose = () => {
    setIsOpen(false);
  };

  const drawerProps = {
    open: isOpen,
    onClose,
  };

  const loginFn = (data) => {
    onSuccessfulLogin(data);
    onClose();
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="header-content">
            <h1>GoL Tools</h1>
            <button className="btn-transparent" onClick={() => setIsOpen(true)}>
              {loginData ? (
                <UserWithPoints user={loginData} />
              ) : (
                <PowerSettingsNewIcon />
              )}
            </button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" {...drawerProps}>
        {loginData ? (
          <MyInfo user={loginData} onClose={onClose} />
        ) : (
          <Login onSuccessfulLogin={loginFn} />
        )}
      </Drawer>
    </>
  );
}
