import { collapseCommandsToCollection } from "./collapseCommandsByValue";

export const getCollectionFromDeck = (deck) => {
  const champions = deck.champions.map((champ) => ({ ...champ, count: 1 }));
  const accessories = deck.accessories.map((acc) => ({ ...acc, count: 1 }));
  const commands = collapseCommandsToCollection(deck.commands);

  return {
    champions,
    accessories,
    commands,
  };
};
