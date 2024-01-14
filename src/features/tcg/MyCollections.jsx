import { NavWithActions } from "../navigation/navWithActions";
import { CardList } from "./CardList";
import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";
import { STANDARD_COMS } from "../../lists/cards/standard-coms";
import { STANDARD_ACCESSORIES } from "../../lists/cards/standard-acc";
import { getFullCardDetails } from "../../utils/getFullCardDetails";
import { useCardSize } from "../hooks/useCardSize.jsx";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";
import { useCardTypeFilters } from "../hooks/useCardTypeFilters.jsx";

export function MyCollections() {
  const { loginData } = useContext(LoginContext);

  const collectionList = loginData.collection;

  const myCollection = getFullCardDetails(collectionList);

  const { size, actions: sizeActions } = useCardSize();
  const {
    championsOn,
    accessoriesOn,
    commandsOn,
    actions: typeActions,
  } = useCardTypeFilters();

  const actions = [...sizeActions, ...typeActions];

  return (
    <>
      <h1 className="page-title">Collection</h1>
      <NavWithActions actions={actions} />
      {championsOn && (
        <CardList
          list={myCollection.champions}
          listKey={STANDARD_CHAMPS.ROUTE}
          size={size}
        />
      )}
      {accessoriesOn && (
        <CardList
          list={myCollection.accessories}
          listKey={STANDARD_ACCESSORIES.ROUTE}
          size={size}
        />
      )}
      {commandsOn && (
        <CardList
          list={myCollection.commands}
          listKey={STANDARD_COMS.ROUTE}
          size={size}
        />
      )}
    </>
  );
}
