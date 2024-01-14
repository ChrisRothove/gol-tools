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

export const collapseCommandsToCollection = (cards) => {
  const result = [];
  cards.forEach((card) => {
    const { val, id } = card;

    const exitingEntry = result.filter(
      (card) => card.id === id && card.val === val
    )[0];
    if (!exitingEntry) {
      result.push({ ...card, count: 1 });
    } else {
      exitingEntry.count += 1;
    }
  });
  console.log(result);
  return result;
};
