import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function DndTools() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "Dungeons and Darkness",
    buttonList: [
      {
        label: "Lists",
        onClickFn: () => navigate("/dungeons-and-darkness/lists"),
      },
      {
        label: "🔒 DM Tools",
        onClickFn: () => navigate("/dungeons-and-darkness/dm-tools"),
      },
      {
        label: "⚒️ Player Tools",
        onClickFn: () => navigate("/dungeons-and-darkness/player-tools"),
      },
    ],
    subtext: "Dungeons and Darkness Version 3.3.2",
  };

  return <BasePage {...pageDetails} />;
}
