import { useNavigate } from "react-router";
import { BasePage } from "../BasePage";

export function AllLists() {
  const navigate = useNavigate();
  const pageDetails = {
    title: "Lists",
    buttonList: [
      {
        label: "Materials",
        onClickFn: () => navigate("/lists/materials"),
      },
    ],
    subtext: "This is a list of all available tables",
  };

  return <BasePage {...pageDetails} />;
}
