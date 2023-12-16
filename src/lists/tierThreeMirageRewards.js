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
    bossMin: 0,
    bossMax: 25,
    subTable: "materials",
  },
  {
    name: "Tier 3 Ability",
    min: 31,
    max: 55,
    bossMin: 26,
    bossMax: 45,
    subTable: null,
  },
  {
    name: "Limit",
    min: 56,
    max: 60,
    bossMin: 46,
    bossMax: 50,
    subTable: null,
  },
  {
    name: "Summon",
    min: 61,
    max: 70,
    bossMin: 51,
    bossMax: 70,
    subTable: "mirage-summons",
  },
  {
    name: "Partner",
    min: 71,
    max: 75,
    bossMin: 71,
    bossMax: 75,
    subTable: null,
  },
  {
    name: "Accessory",
    min: 76,
    max: 90,
    bossMin: 76,
    bossMax: 90,
    subTable: "mirage-accessories",
  },
  {
    name: "8 Punched Tickets",
    min: 91,
    max: 100,
    bossMin: 91,
    bossMax: 100,
    subTable: null,
  },
];

export const TIER_THREE_MIRAGE_REWARDS = { ROUTE, TITLE, KEYS, LIST };
