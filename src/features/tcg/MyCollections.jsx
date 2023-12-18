import { STARTER_COLLECTION } from "./constants/STARTER_COLLECTION";
import { NavWithActions } from "../navigation/navWithActions";
import { CardList } from "./CardList";
import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";
import { STANDARD_COMS } from "../../lists/cards/standard-coms";
import { STANDARD_ACCESSORIES } from "../../lists/cards/standard-acc";
import { getFullCardDetails } from "../../utils/getFullCardDetails";
import { useCardSize } from "../hooks/useCardSize";

export function MyCollections() {
  const lsCollection = localStorage.getItem("collection");

  if (!lsCollection) {
    localStorage.setItem("collection", JSON.stringify(STARTER_COLLECTION));
  }

  const collectionList = lsCollection
    ? JSON.parse(lsCollection)
    : STARTER_COLLECTION;

  const myCollection = getFullCardDetails(collectionList);

  const { size, actions: sizeActions } = useCardSize();

  const actions = sizeActions; // will spread in other actions
  // TODO: add actions for filtering by card type + details view

  return (
    <>
      <h1 className="page-title">Collection</h1>
      <NavWithActions actions={actions} />
      <CardList
        list={myCollection.champions}
        listKey={STANDARD_CHAMPS.ROUTE}
        size={size}
      />
      <CardList
        list={myCollection.accessories}
        listKey={STANDARD_ACCESSORIES.ROUTE}
        size={size}
      />
      <CardList
        list={myCollection.commands}
        listKey={STANDARD_COMS.ROUTE}
        size={size}
      />
    </>
  );
}
