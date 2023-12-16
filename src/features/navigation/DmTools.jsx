import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function DmTools() {
  const navigate = useNavigate();

  const pageDetails = {
    title: "DM Tools",
    buttonList: [
      {
        label: "Mirage Cache",
        onClickFn: () => navigate("/dm-tools/mirage-cache"),
      },
    ],
  };

  return <BasePage {...pageDetails} />;
}
