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
    id: "com1",
    name: "Fire",
    atr: "mag",
    mark: null,
    rare: false,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/fire1.png",
  },
  {
    id: "com2",
    name: "Blizzard",
    atr: "mag",
    mark: null,
    rare: false,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/blizzard1.png",
  },
  {
    id: "com3",
    name: "Thunder",
    atr: "mag",
    mark: null,
    rare: false,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/thunder1.png",
  },
  {
    id: "com4",
    name: "Aero",
    atr: "mag",
    mark: null,
    rare: false,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/aero1.png",
  },
  {
    id: "com5",
    name: "Cure",
    atr: "mag",
    mark: null,
    rare: false,
    val: 0,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pic: "/assets/com-art/cure1.png",
  },
  {
    id: "com6",
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
