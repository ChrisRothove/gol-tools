const TITLE = "Tier One Mirage Rewards";

const ROUTE = "tier-1";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
];

const LIST = [
  {
    name: "Shotlock Voucher",
    min: 0,
    max: 15,
    subTable: null,
  },
  {
    name: "Shard Material Roll",
    min: 16,
    max: 40,
    subTable: "materials",
  },
  {
    name: "Reserve Token",
    min: 41,
    max: 60,
    subTable: null,
  },
  {
    name: "Tier 1 Ability",
    min: 61,
    max: 80,
    subTable: null,
  },
  {
    name: "HP-UP",
    min: 81,
    max: 85,
    subTable: null,
  },
  {
    name: "MP-UP",
    min: 86,
    max: 90,
    subTable: null,
  },
  {
    name: "2 Punched Tickets",
    min: 91,
    max: 100,
    subTable: null,
  },
];

export const TIER_ONE_MIRAGE_REWARDS = { ROUTE, TITLE, KEYS, LIST };
