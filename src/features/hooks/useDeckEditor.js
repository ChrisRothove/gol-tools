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

  const validateChampCard = (card) => {
    const isDuplicate = deck.champions.find((champ) => champ.id === card.id);
    const maxCapacity = deck.champions.length > 2;

    return !(isDuplicate || maxCapacity);
  };

  const validateAccCard = (card) => {
    const isOverCost = getTotalCPUsed() + card.CP > getTotalCP();
    const isDuplicate = deck.accessories.find((acc) => acc.id === card.id);
    const maxCapacity = deck.accessories.length > 2;

    return !(isDuplicate || isOverCost || maxCapacity);
  };

  const validateComCard = (card) => {
    const isOverCost = getTotalCPUsed() + card.val > getTotalCP();
    const duplicates = deck.commands.filter(
      (acc) => acc.id === card.id && acc.val === card.val
    );
    const isTooMany = duplicates.length > card.count - 1;
    const maxCapacity = deck.commands.length >= 20;

    return !(isOverCost || isTooMany || maxCapacity);
  };

  const tryDeleteFromDeck = (listKey, card, e = {}) => {
    e.preventDefault();
    switch (listKey) {
      case "com":
        setDeck((prev) => {
          const duplicates = deck.commands.filter(
            (com) => com.val === card.val && com.id === card.id
          );
          const idx = deck.commands.indexOf(duplicates?.[0]);

          if (idx < 0) return prev;
          prev.commands.splice(idx, 1);
          return { ...prev };
        });
        break;
      case "champ":
        setDeck((prev) => {
          const newChamps = prev.champions.filter(
            (champ) => champ.id !== card.id
          );
          return { ...prev, champions: newChamps };
        });
        break;
      case "acc":
        setDeck((prev) => {
          const newAcc = prev.accessories.filter((acc) => acc.id !== card.id);
          return { ...prev, accessories: newAcc };
        });
        break;
      default:
        break;
    }
  };

  const tryAddToDeck = (listKey, card, e = {}) => {
    e.preventDefault();
    switch (listKey) {
      case "com":
        setDeck((prev) => {
          console.log("com");
          if (!validateComCard(card)) {
            return prev;
          }
          prev.commands.push(card);
          return { ...prev };
        });
        break;
      case "champ":
        setDeck((prev) => {
          console.log("Champ", prev);
          if (!validateChampCard(card)) return prev;
          prev.champions.push(card);
          return { ...prev };
        });
        break;
      case "acc":
        setDeck((prev) => {
          console.log("acc");
          if (!validateAccCard(card)) {
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
    tryDeleteFromDeck,
    getTotalCPUsed,
    rules: {
      validateChampCard,
      validateAccCard,
      validateComCard,
    },
  };
};
