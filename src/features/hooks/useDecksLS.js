import { useState } from "react";

const DECKS_LS_KEY = "decks";
const EMPTY_SINGLE_DECK = {
  name: "My First Deck",
  id: "my-first-deck",
  champions: [],
  accessories: [],
  commands: [],
};

export const useDecksLS = () => {
  const decksFromLS = localStorage.getItem(DECKS_LS_KEY);

  if (!decksFromLS) {
    localStorage.setItem(DECKS_LS_KEY, JSON.stringify([EMPTY_SINGLE_DECK]));
  }

  const [decks, setDecks] = useState(JSON.parse(decksFromLS));

  const saveDecks = (newDeckList) => {
    localStorage.setItem(DECKS_LS_KEY, JSON.stringify(newDeckList));
    const newDecklistFromLS = localStorage.getItem(DECKS_LS_KEY);
    setDecks(JSON.parse(newDecklistFromLS));
  };
  const addDeck = (deck) => {
    const newDeckList = [...decks, deck];
    saveDecks(newDeckList);
  };

  const updateDeck = (newDeck) => {
    const oldDeck = decks.filter(
      (deckFromList) => deckFromList.id === newDeck.id
    )?.[0];
    const deckIndex = decks.indexOf(oldDeck);
    if (deckIndex !== -1) {
      const newDeckList = [...decks];
      newDeckList[deckIndex] = newDeck;
      saveDecks(newDeckList);
    } else {
      addDeck(newDeck);
    }
  };

  return {
    decks,
    addDeck,
    updateDeck,
  };
};
