import { useNavigate } from "react-router";

export function NavNoActions() {
  const navigate = useNavigate();
  return (
    <div className="random-item-button-block">
      <button className="left-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <button className="right-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
