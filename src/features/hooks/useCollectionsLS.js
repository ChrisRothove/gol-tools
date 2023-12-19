import { STARTER_COLLECTION } from "../tcg/constants/STARTER_COLLECTION";
import { getFullCardDetails } from "../../utils/getFullCardDetails";

const COLLECTION_LS_KEY = "collection";

export const useCollectionsLS = () => {
  const lsCollection = localStorage.getItem(COLLECTION_LS_KEY);

  if (!lsCollection) {
    localStorage.setItem(COLLECTION_LS_KEY, JSON.stringify(STARTER_COLLECTION));
  }

  const collectionList = lsCollection
    ? JSON.parse(lsCollection)
    : STARTER_COLLECTION;

  const myCollection = getFullCardDetails(collectionList);

  return {
    myCollection,
  };
};
