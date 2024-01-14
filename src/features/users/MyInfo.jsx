import { Inventory, RecentActors, Style } from "@mui/icons-material";
import { UserWithPoints } from "./UserWithPoints";
import LogoutIcon from "@mui/icons-material/Logout";
import { Switch } from "@mui/material";
import { useServerSettings } from "../hooks/useServerSettings";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";

export function MyInfo({ user, onClose }) {
  const { toggleSetting } = useServerSettings(user);
  const { logout } = useContext(LoginContext);
  const navigate = useNavigate();
  const closeWith = (fn) => {
    return () => {
      fn();
      onClose();
    };
  };

  return (
    <div className="user-details-container content-top">
      <div>
        <UserWithPoints user={user} />
      </div>
      <button
        className="info-button"
        onClick={closeWith(() => navigate("/player-tools/characters"))}
      >
        <RecentActors sx={{ color: "white" }} /> My Characters
      </button>
      <button
        className="info-button"
        onClick={closeWith(() => navigate("/mirage-masters/collection"))}
      >
        <Style sx={{ color: "white" }} /> My Collection
      </button>
      <button
        className="info-button"
        onClick={closeWith(() => navigate("/mirage-masters/decks"))}
      >
        <Inventory sx={{ color: "white" }} /> My Decks
      </button>
      <button className="info-button" onClick={closeWith(logout)}>
        <LogoutIcon sx={{ color: "white" }} /> Log Out
      </button>
      <h2 className="page-title">Settings</h2>
      <div className="settings-block">
        <Switch
          onChange={() => toggleSetting("allows_challenges")}
          checked={user.settings?.allows_challenges || false}
        />
        <span>Allow Challenges</span>
      </div>
      <div className="settings-block">
        <Switch
          onChange={() => toggleSetting("is_collection_public")}
          checked={user.settings?.is_collection_public || false}
        />
        <span>Public Collection</span>
      </div>
    </div>
  );
}
