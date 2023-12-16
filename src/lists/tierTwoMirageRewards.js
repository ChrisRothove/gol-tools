const TITLE = "Tier Two Mirage Rewards";

const ROUTE = "tier-2";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Gem Material Roll",
    min: 0,
    max: 30,
    bossMin: 0,
    bossMax: 25,
    subTable: "materials",
  },
  {
    name: "Wayfinder",
    min: 31,
    max: 40,
    bossMin: 26,
    bossMax: 35,
    subTable: null,
  },
  {
    name: "Tier 2 Ability",
    min: 41,
    max: 60,
    bossMin: 36,
    bossMax: 55,
    subTable: null,
  },
  {
    name: "Tier 3 Ability",
    min: 61,
    max: 70,
    bossMin: 56,
    bossMax: 60,
    subTable: null,
  },
  {
    name: "Pet",
    min: 71,
    max: 75,
    bossMin: 61,
    bossMax: 65,
    subTable: null,
  },
  {
    name: "Weapon",
    min: 76,
    max: 85,
    bossMin: 66,
    bossMax: 85,
    subTable: "mirage-weapons",
  },
  {
    name: "Elemental Affinity Orb",
    min: 86,
    max: 90,
    bossMin: 86,
    bossMax: 90,
    subTable: null,
  },
  {
    name: "5 Punched Tickets",
    min: 91,
    max: 100,
    bossMin: 91,
    bossMax: 100,
    subTable: null,
  },
];

export const TIER_TWO_MIRAGE_REWARDS = { ROUTE, TITLE, KEYS, LIST };
