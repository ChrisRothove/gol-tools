import { useNavigate } from "react-router";
import { BasePage } from "../../BasePage";

export default function RuleDocs() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "Command System Rules",
    buttonList: [
      {
        label: "Basic Rules",
        onClickFn: () => navigate("/command-system/rules/basic-rules"),
      },
      {
        label: "Horde Master's Guide",
        onClickFn: () => navigate("/command-system/rules/horde-masters"),
      },
    ],
  };
  return <BasePage {...pageDetails} />;
}
