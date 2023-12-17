import { useNavigate } from "react-router";

export function NavWithActions({ actions = [] }) {
  const navigate = useNavigate();
  return (
    <div className="content-horizontal">
      <div className="random-item-button-block">
        <button className="left-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="right-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <div className="action-button-bar">
        {actions.map((action, index) => (
          <button
            key={index}
            className="action-button"
            onClick={action.onClickFn}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
