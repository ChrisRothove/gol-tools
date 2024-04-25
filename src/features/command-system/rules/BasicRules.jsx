import { BasePage } from "../../BasePage";
import BASIC_RULES from "../constants/basic-rules";

export default function BasicRules() {
  const pageDetails = {
    title: "The Command System",
    copy: BASIC_RULES,
  };
  return <BasePage {...pageDetails} />;
}
