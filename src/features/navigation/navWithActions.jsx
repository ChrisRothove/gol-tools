import { NavNoActions } from "./navNoActions";

export function NavWithActions({ actions = [] }) {
  return (
    <div className="content-horizontal">
      <NavNoActions />
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
