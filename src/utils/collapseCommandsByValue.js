const createCommandSet = (card) => {
  const commandSet = { ...card, baseCard: card };
  commandSet.range.forEach((value) => {
    if (!commandSet.valueList) commandSet.valueList = {};
    commandSet.valueList[value] = 0;
  });

  return commandSet;
};

export const collapseCommandsByValue = (cards) => {
  const commandSets = {};
  cards.forEach((card) => {
    const { val, id, count } = card;

    if (!commandSets[id]) commandSets[id] = createCommandSet(card);
    commandSets[id].valueList[val] += count;
  });

  return commandSets;
};
