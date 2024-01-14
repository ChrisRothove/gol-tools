import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useUpdateUserAttribute } from "../../http/hooks/useUpdateUserAttribute";

export const useDecks = (deckId = "") => {
  const { loginData, updateUser } = useContext(LoginContext);
  const { decks } = loginData;
  const currentDeck = decks.filter((deck) => deck.id === deckId)[0];

  const { mutate: updateAttribute } = useUpdateUserAttribute();

  // TODO better error handling (deck update)
  const addDeck = (newDeck) => {
    const updateDecks = [...decks, newDeck];
    const id = loginData._id;
    const updateObj = {
      decks: updateDecks,
    };

    updateAttribute(
      { id, updateObj },
      {
        onSuccess: () => updateUser(),
        onError: (e) => console.log(e),
      }
    );
  };

  const updateDeck = (newDeck) => {
    const filtered = decks.filter((deck) => deck.id !== newDeck.id);
    const updateDecks = [...filtered, newDeck];
    const id = loginData._id;
    const updateObj = {
      decks: updateDecks,
    };

    updateAttribute(
      { id, updateObj },
      {
        onSuccess: () => updateUser(),
        onError: (e) => console.log(e),
      }
    );
  };

  return {
    decks,
    currentDeck,
    addDeck,
    updateDeck,
  };
};
