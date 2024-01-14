import { useGetUserList } from "../../http/hooks/useGetUserList";
import { BasePage } from "../BasePage";

export function PlayerList() {
  const { data } = useGetUserList();
  const players = data?.data;

  const buttonList = players?.map((player) => ({
    label: player.user_name,
    onClickFn: () => {},
  }));

  const pageDetails = {
    title: "Players",
    buttonList,
  };

  return <BasePage {...pageDetails} />;
}
