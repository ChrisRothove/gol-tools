const TITLE = "Standard Accessories";

const ROUTE = "standard-accessories";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    id: "acc1",
    name: "Protect Ring",
    atr: "acc",
    mark: null,
    rare: false,
    CP: 3,
    pow: 0,
    def: 5,
    pic: "/assets/acc-art/protect1.png",
  },
  {
    id: "acc2",
    name: "Protera Ring",
    atr: "acc",
    mark: null,
    rare: false,
    CP: 5,
    pow: 0,
    def: 8,
    pic: "/assets/acc-art/protect1.png",
  },
  {
    id: "acc3",
    name: "Protega Ring",
    atr: "acc",
    mark: null,
    rare: false,
    CP: 7,
    pow: 0,
    def: 10,
    pic: "/assets/acc-art/protect1.png",
  },
];

export const STANDARD_ACCESSORIES = { ROUTE, TITLE, KEYS, LIST };
