import { useParams } from "react-router";
import lists from "../../lists/cards";
import { CardList } from "./CardList";
import { NavWithActions } from "../navigation/navWithActions";
import { useCardSize } from "../hooks/useCardSize";

export function CardListPage() {
  const { listKey } = useParams();
  const { size, actions } = useCardSize("lg");

  return (
    <>
      <h1 className="page-title">{lists[listKey]?.TITLE}</h1>
      <NavWithActions actions={actions} />
      <CardList list={lists[listKey]?.LIST} listKey={listKey} size={size} />
    </>
  );
}
