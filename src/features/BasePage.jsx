export function BasePage({ title = "", buttonList = [], subtext = "" }) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <div className="content-horizontal">
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
