import { useContext, useState } from "react";
import { DECK_LISTS } from "../tcg/constants/DECK_LISTS";
import { getFullCardDetails } from "../../utils/getFullCardDetails";
import { useUpdateUserAttribute } from "../../http/hooks/useUpdateUserAttribute";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";
import { getCollectionFromDeck } from "../../utils/getCollectionFromDeck";

export const useDeckPreview = (deckName) => {
  const deck = DECK_LISTS[deckName];
  const [newName, setNewName] = useState(deck.name);
  const { mutate: setAttribute } = useUpdateUserAttribute();
  const { loginData, updateUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const filledDeck = {
    ...deck,
    ...getFullCardDetails(deck),
  };

  const getTotalCPUsed = () => {
    let total = 0;
    filledDeck.accessories.forEach((acc) => {
      total += acc.CP;
    });
    filledDeck.commands.forEach((com) => {
      total += com.val;
    });

    return total;
  };

  const getTotalCP = () => {
    let total = 0;
    filledDeck.champions.forEach((champ) => {
      total += champ.CP;
    });

    return total;
  };

  const submitDeck = () => {
    const newId = newName.toLowerCase().split(" ").join("-");
    const decks = [
      {
        ...deck,
        name: newName,
        id: newId,
      },
    ];
    const collection = getCollectionFromDeck(deck);
    const id = loginData._id;
    const updateObj = {
      decks,
      collection,
    };
    setAttribute(
      { id, updateObj },
      {
        onSuccess: () => {
          updateUser({
            onSuccessFn: () => navigate("/mirage-masters"),
          });
        },
      }
    );
  };

  return {
    deck: filledDeck,
    newName,
    setNewName,
    getTotalCP,
    getTotalCPUsed,
    submitDeck,
  };
};
