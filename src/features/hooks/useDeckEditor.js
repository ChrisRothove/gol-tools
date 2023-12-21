import { useDecksLS } from "./useDecksLS";
import { useState } from "react";

export const useDeckEditor = (deckId) => {
  const { decks, addDeck, updateDeck } = useDecksLS();

  const currentDeck = decks.filter((deck) => deck.id === deckId)?.[0] ?? {
    name: "New Deck",
    champions: [],
    accessories: [],
    commands: [],
  };

  const [deck, setDeck] = useState(currentDeck);

  const setName = (e) =>
    setDeck((prev) => {
      prev.name = e.target.value;
      return { ...prev };
    });

  const submitDeck = () => {
    console.log(deck);
    const newId = deck?.name.toLowerCase().split(" ").join("-");
    if (!deck.id) {
      const newDeck = { ...deck, id: newId };
      addDeck(newDeck);
    } else {
      updateDeck(deck);
    }
  };

  const getTotalCPUsed = () => {
    let total = 0;
    deck.accessories.forEach((acc) => {
      total += acc.CP;
    });
    deck.commands.forEach((com) => {
      total += com.val;
    });

    return total;
  };

  const getTotalCP = () => {
    let total = 0;
    deck.champions.forEach((champ) => {
      total += champ.CP;
    });

    return total;
  };

  const tryAddToDeck = (listKey, card, e = {}) => {
    e.preventDefault();
    switch (listKey) {
      case "com":
        setDeck((prev) => {
          console.log("com");
          if (getTotalCPUsed() + card.value > getTotalCP()) {
            return prev;
          }
          prev.commands.push(card);
          return { ...prev };
        });
        break;
      case "champ":
        setDeck((prev) => {
          console.log("Champ", prev);
          if (prev.champions.length > 2) return prev;
          prev.champions.push(card);
          return { ...prev };
        });
        break;
      case "acc":
        setDeck((prev) => {
          console.log("acc");
          if (
            prev.accessories.length > 2 ||
            getTotalCPUsed() + card.CP > getTotalCP()
          ) {
            return prev;
          }
          prev.accessories.push(card);
          return { ...prev };
        });
        break;
      default:
        break;
    }
  };

  return {
    deck,
    setName,
    submitDeck,
    getTotalCP,
    tryAddToDeck,
    getTotalCPUsed,
  };
};
