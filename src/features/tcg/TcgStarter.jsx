import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function TcgStarter() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "Choose a Starter Deck",
    buttonList: [
      {
        label: "Disciples of Departure",
        onClickFn: () => navigate("/mirage-masters/decks/preview/departure"),
      },
      {
        label: "Children of Destiny",
        onClickFn: () => navigate("/mirage-masters/decks/preview/destiny"),
      },
      {
        label: "Disney Town Heroes",
        onClickFn: () => navigate("/mirage-masters/decks/preview/disney"),
      },
    ],
  };

  return <BasePage {...pageDetails} />;
}
