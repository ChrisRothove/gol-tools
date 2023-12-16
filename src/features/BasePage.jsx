import { useNavigate } from "react-router";

export function BasePage({
  title = "",
  buttonList = [],
  subtext = "",
  backButton = true,
}) {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <div className="content-horizontal">
        {backButton && <button onClick={() => navigate(-1)}>Back</button>}
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
