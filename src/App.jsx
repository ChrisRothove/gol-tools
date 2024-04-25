import { useNavigate } from "react-router";
import { BasePage } from "./features/BasePage";

function App() {
  const navigate = useNavigate();
  const pageDetails = {
    title: "GoL Tools",
    buttonList: [
      {
        label: "Dungeons & Darkness",
        onClickFn: () => navigate("/dungeons-and-darkness"),
      },
      {
        label: "The Command System",
        onClickFn: () => navigate("/command-system"),
      },
      {
        label: "Mirage Masters",
        onClickFn: () => navigate("/mirage-masters"),
      },
    ],
    backButton: false,
  };

  return <BasePage {...pageDetails} />;
}

export default App;
