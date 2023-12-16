const TITLE = "Mirage Summons";

const ROUTE = "mirage-summons";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Iron Imprisoner",
    min: 0,
    max: 33,
    subTable: null,
  },
  {
    name: "Mimic Master",
    min: 34,
    max: 66,
    subTable: null,
  },
  {
    name: "Ark",
    min: 67,
    max: 100,
    subTable: null,
  },
];

export const MIRAGE_SUMMONS = { ROUTE, TITLE, KEYS, LIST };
