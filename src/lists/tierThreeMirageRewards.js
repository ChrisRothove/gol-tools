const TITLE = "Tier Three Mirage Rewards";

const ROUTE = "tier-3";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Crystal Material Roll",
    min: 0,
    max: 30,
    subTable: "materials",
  },
  {
    name: "Tier 3 Ability",
    min: 31,
    max: 55,
    subTable: null,
  },
  {
    name: "Limit",
    min: 56,
    max: 60,
    subTable: null,
  },
  {
    name: "Summon",
    min: 61,
    max: 70,
    subTable: "mirage-summons",
  },
  {
    name: "Partner",
    min: 71,
    max: 75,
    subTable: null,
  },
  {
    name: "Accessory",
    min: 76,
    max: 90,
    subTable: "mirage-accessories",
  },
  {
    name: "8 Punched Tickets",
    min: 91,
    max: 100,
    subTable: null,
  },
];

export const TIER_THREE_MIRAGE_REWARDS = { ROUTE, TITLE, KEYS, LIST };
