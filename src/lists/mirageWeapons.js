const TITLE = "Mirage Weapons";

const ROUTE = "mirage-weapons";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Wobbling Whimsy",
    min: 0,
    max: 17,
    subTable: null,
  },
  {
    name: "Mirage Weapon",
    min: 18,
    max: 34,
    subTable: null,
  },
  {
    name: "Iron Gavel",
    min: 35,
    max: 51,
    subTable: null,
  },
  {
    name: "Monster of the Deep",
    min: 52,
    max: 68,
    subTable: null,
  },
  {
    name: "Method of Mimicry",
    min: 69,
    max: 85,
    subTable: null,
  },
  {
    name: "Pumice Lance",
    min: 86,
    max: 100,
    subTable: null,
  },
];

export const MIRAGE_WEAPONS = { TITLE, ROUTE, KEYS, LIST };
