import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function CardListsDirectory() {
  const navigate = useNavigate();
  const pageDetails = {
    title: "Card Lists",
    buttonList: [
      {
        label: "Champions",
        onClickFn: () => navigate("/mirage-masters/lists/standard-champs"),
      },
      {
        label: "Accessories",
        onClickFn: () => navigate("/mirage-masters/lists/standard-accessories"),
      },
      {
        label: "Commands",
        onClickFn: () => navigate("/mirage-masters/lists/standard-coms"),
      },
    ],
  };

  return <BasePage {...pageDetails} />;
}
