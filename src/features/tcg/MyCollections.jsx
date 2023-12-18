import { STARTER_COLLECTION } from "./constants/STARTER_COLLECTION";
import { useState } from "react";
import {
  PhotoSizeSelectActual,
  PhotoSizeSelectLarge,
  PhotoSizeSelectSmall,
} from "@mui/icons-material";
import { NavWithActions } from "../navigation/navWithActions";
import { CardList } from "./CardList";
import { STANDARD_CHAMPS } from "../../lists/cards/standard-chaps";
import { STANDARD_COMS } from "../../lists/cards/standard-coms";
import { STANDARD_ACCESSORIES } from "../../lists/cards/standard-acc";
import { getFullCardDetails } from "../../utils/getFullCardDetails";

export function MyCollections() {
  const lsCollection = localStorage.getItem("collection");

  if (!lsCollection) {
    localStorage.setItem("collection", JSON.stringify(STARTER_COLLECTION));
  }

  const collectionList = lsCollection
    ? JSON.parse(lsCollection)
    : STARTER_COLLECTION;

  const myCollection = getFullCardDetails(collectionList);

  const [size, setSize] = useState("sm");
  const actions = [
    {
      icon: <PhotoSizeSelectActual />,
      onClickFn: () => setSize("lg"),
    },
    {
      icon: <PhotoSizeSelectLarge />,
      onClickFn: () => setSize("md"),
    },
    {
      icon: <PhotoSizeSelectSmall />,
      onClickFn: () => setSize("sm"),
    },
  ];

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
