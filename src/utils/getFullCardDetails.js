import lists from "../lists/cards";

const getChampDetails = (champions) =>
  champions.map((champ) => {
    const targetCard = lists.allChamps.filter(
      (card) => champ.id === card.id
    )[0];

    return {
      ...targetCard,
      ...champ,
    };
  });

const getComDetails = (commands) =>
  commands.map((com) => {
    const targetCard = lists.allComs.filter((card) => com.id === card.id)[0];

    return {
      ...targetCard,
      ...com,
    };
  });

const getAccDetails = (accessories) =>
  accessories.map((acc) => {
    const targetCard = lists.allAcc.filter((card) => acc.id === card.id)[0];

    return {
      ...targetCard,
      ...acc,
    };
  });

export const getFullCardDetails = (collection) => {
  if (!collection) return;

  const champions = getChampDetails(collection.champions);
  const commands = getComDetails(collection.commands);
  const accessories = getAccDetails(collection.accessories);

  return {
    champions,
    commands,
    accessories,
  };
};
