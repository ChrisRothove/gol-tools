import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function CsTools() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "Command System",
    buttonList: [
      {
        label: "Rules",
        onClickFn: () => navigate("/command-system/rules"),
      },
      {
        label: "Characters",
        onClickFn: () => navigate("/command-system/characters"),
      },
      {
        label: "Encounters",
        onClickFn: () => navigate("/command-system/encounters"),
      },
    ],
    subtext: "Command System Version 3.3.2",
  };

  return <BasePage {...pageDetails} />;
}
