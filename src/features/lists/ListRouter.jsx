import { useParams } from "react-router";
import ALL_LISTS from "../../lists/index";
import { ListPage } from "./ListPage";

export function ListRouter() {
  const { listKey } = useParams();

  console.log(ALL_LISTS);
  return <ListPage dataObject={ALL_LISTS[listKey]} />;
}
