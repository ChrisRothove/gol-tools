import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function TcgTools() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "Mirage Masters",
    buttonList: [
      {
        label: "Card Lists",
        onClickFn: () => navigate("/mirage-masters/lists"),
      },
      {
        label: "My Collection",
        onClickFn: () => navigate("/mirage-masters/collection"),
      },
      {
        label: "⚒️ My Decks",
        onClickFn: () => navigate("/mirage-masters/decks"),
      },
      {
        label: "⚒️ Buy Packs",
        onClickFn: () => navigate("/mirage-masters/packs"),
      },
    ],
  };

  return <BasePage {...pageDetails} />;
}
