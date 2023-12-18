import { useNavigate } from "react-router";
import { BasePage } from "./features/BasePage";

function App() {
  const navigate = useNavigate();
  const pageDetails = {
    title: "GoL Tools",
    buttonList: [
      {
        label: "Lists",
        onClickFn: () => navigate("/lists"),
      },
      {
        label: "🔒 DM Tools",
        onClickFn: () => navigate("/dm-tools"),
      },
      {
        label: "⚒️ Player Tools",
        onClickFn: () => navigate("/player-tools"),
      },
      {
        label: "Mirage Masters",
        onClickFn: () => navigate("/mirage-masters"),
      },
    ],
    subtext: "Dungeons and Darkness Version 3.3.2",
    backButton: false,
  };

  return <BasePage {...pageDetails} />;
}

export default App;
