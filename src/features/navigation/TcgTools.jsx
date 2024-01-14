import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { TcgStarter } from "../tcg/TcgStarter";

export function TcgTools() {
  const navigate = useNavigate();
  const { getIsPlayer } = useContext(LoginContext);

  const pageDetails = {
    title: "Mirage Masters",
    buttonList: [
      {
        label: "⚒️ Rules",
        onClickFn: () => navigate("/mirage-masters/rules"),
      },
      {
        label: "Card Lists",
        onClickFn: () => navigate("/mirage-masters/lists"),
      },
      {
        label: "My Collection",
        onClickFn: () => navigate("/mirage-masters/collection"),
      },
      {
        label: "My Decks",
        onClickFn: () => navigate("/mirage-masters/decks"),
      },
      {
        label: "⚒️ Buy Packs",
        onClickFn: () => navigate("/mirage-masters/packs"),
      },
      {
        label: "Players",
        onClickFn: () => navigate("/mirage-masters/players"),
      },
    ],
  };

  return getIsPlayer() ? <BasePage {...pageDetails} /> : <TcgStarter />;
}
