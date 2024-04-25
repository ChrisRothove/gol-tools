import { useNavigate } from "react-router";
import { CopyRouter } from "./command-system/CopyRouter";

export function BasePage({
  title = "",
  buttonList = [],
  copy = [],
  subtext = "",
  backButton = true,
}) {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <div className="content-horizontal">
        {backButton && (
          <div className="random-item-button-block">
            <button className="left-button" onClick={() => navigate(-1)}>
              Back
            </button>
            <button className="right-button" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        )}
        {copy.map((item) => (
          <CopyRouter key={item} copy={item} />
        ))}
        {buttonList.map((btn) => {
          return (
            <button key={btn.label} onClick={btn.onClickFn}>
              {btn.label}
            </button>
          );
        })}
      </div>

      <p>{subtext}</p>
    </>
  );
}
