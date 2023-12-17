const TITLE = "Standard Commands";

const ROUTE = "standard-coms";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Fire",
    atr: "mag",
    mark: null,
    rare: true,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/fire1.png",
  },
  {
    name: "Combo Plus",
    atr: "spd",
    mark: "split",
    rare: false,
    val: 0,
    range: [0, 2, 4, 6, 8],
    pic: "/assets/com-art/combo1.png",
  },
];

export const STANDARD_COMS = { ROUTE, TITLE, KEYS, LIST };
