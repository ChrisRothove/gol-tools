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
    subTable: "materials",
  },
  {
    name: "Wayfinder",
    min: 31,
    max: 40,
    subTable: null,
  },
  {
    name: "Tier 2 Ability",
    min: 41,
    max: 60,
    subTable: null,
  },
  {
    name: "Tier 3 Ability",
    min: 61,
    max: 70,
    subTable: null,
  },
  {
    name: "Pet",
    min: 71,
    max: 75,
    subTable: null,
  },
  {
    name: "Weapon",
    min: 76,
    max: 85,
    subTable: "mirage-weapons",
  },
  {
    name: "Elemental Affinity Orb",
    min: 86,
    max: 90,
    subTable: null,
  },
  {
    name: "5 Punched Tickets",
    min: 91,
    max: 100,
    subTable: null,
  },
];

export const TIER_TWO_MIRAGE_REWARDS = { ROUTE, TITLE, KEYS, LIST };
