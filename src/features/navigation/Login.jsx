import { useLogin } from "../hooks/useLogin";

export function Login({ onSuccessfulLogin }) {
  const {
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
  } = useLogin(onSuccessfulLogin);

  return (
    <div className="content-horizontal content-top">
      <div className="login-toggle">
        <h2
          className={`page-title ${tabIndex === 1 ? "page-title-off" : ""}`}
          onClick={() => changeTab(0)}
        >
          Login
        </h2>
        <h2
          className={`page-title ${tabIndex === 0 ? "page-title-off" : ""}`}
          onClick={() => changeTab(1)}
        >
          Register
        </h2>
      </div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="login-input"
        value={userName}
        onInput={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />
      {tabIndex === 1 && (
        <input
          type="text"
          name="adminKey"
          placeholder="DM Key"
          className="login-input"
          value={adminKey}
          onInput={(e) => setAdminKey(e.target.value)}
        />
      )}
      <button onClick={onSubmit}>{tabIndex ? "Register" : "Login"}</button>
      <p className="error-text">{loginError}</p>
    </div>
  );
}
