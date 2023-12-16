export const getRandWithRange = (list = [], range = 100) => {
  const dynamicRange = list[list.length - 1]?.max || range;
  const result = Math.floor(Math.random() * dynamicRange);
  return list.filter((item) => result >= item.min && result <= item.max)[0];
};
