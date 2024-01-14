import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { getFullCardDetails } from "../../utils/getFullCardDetails";

export const useCardListDrawer = () => {
  const { loginData } = useContext(LoginContext);
  const myCollection = getFullCardDetails(loginData.collection);

  const [optionsFromCollection, setCardOptions] = useState(
    myCollection.champions
  );
  const [isOpen, setIsOpen] = useState(false);
  const [cardType, setCardType] = useState("champ");

  const onButtonClick = (cardType) => {
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
    setIsOpen(false);
  };

  return {
    onButtonClick,
    isOpen,
    onClose,
    cardType,
    optionsFromCollection,
  };
};
