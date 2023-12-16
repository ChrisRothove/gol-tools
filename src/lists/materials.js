const TITLE = "Materials";

const ROUTE = "materials";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Blazing Material",
    min: 0,
    max: 2,
  },
  {
    name: "Lightning Material",
    min: 3,
    max: 4,
  },
  {
    name: "Freezing Material",
    min: 5,
    max: 6,
  },
  {
    name: "Bright Material",
    min: 7,
    max: 8,
  },
  {
    name: "Dark Material",
    min: 9,
    max: 10,
  },
  {
    name: "Weapon Material",
    min: 11,
    max: 14,
  },
];

export const MATERIALS = { ROUTE, TITLE, KEYS, LIST };
