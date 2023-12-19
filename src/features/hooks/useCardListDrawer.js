import { useState } from "react";
import { useCollectionsLS } from "./useCollectionsLS";

export const useCardListDrawer = () => {
  const { myCollection } = useCollectionsLS();

  const [selectedCard, setSelectedCard] = useState(null);
  const [optionsFromCollection, setCardOptions] = useState(
    myCollection.champions
  );
  const [isOpen, setIsOpen] = useState(false);
  const [cardType, setCardType] = useState("champ");

  const onButtonClick = (cardType, card) => {
    if (card) setSelectedCard(card);
    switch (cardType) {
      case "champ":
        setCardOptions(myCollection.champions);
        break;
      case "acc":
        setCardOptions(myCollection.accessories);
        break;
      case "com":
        setCardOptions(myCollection.commands);
        break;

      default:
        break;
    }
    setCardType(cardType);
    setIsOpen(true);
  };

  const onClose = () => {
    setSelectedCard(null);
    setIsOpen(false);
  };

  return {
    selectedCard,
    onButtonClick,
    isOpen,
    onClose,
    cardType,
    optionsFromCollection,
  };
};
