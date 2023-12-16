export const getRandWithRange = (
  list = [],
  minKey = "min",
  maxKey = "max",
  range = 100
) => {
  const dynamicRange = list[list.length - 1]?.max || range;
  const result = Math.floor(Math.random() * dynamicRange);

  return list.filter(
    (item) =>
      result >= (item[minKey] || item["min"]) &&
      result <= (item[maxKey] || item["max"])
  )[0];
};
