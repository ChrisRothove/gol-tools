const TITLE = "Mirage Exhibition Tickets";

const ROUTE = "fight-tickets";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
  {
    key: "adversary",
    label: "adversary",
    class: "list-description",
  },
];

const LIST = [
  {
    name: "Nemesis Ticket",
    adversary: "June",
    min: 0,
    max: 20,
    subTable: null,
  },
  {
    name: "Alert Ticket",
    adversary: "Possessed Engine",
    min: 21,
    max: 47,
    subTable: null,
  },
  {
    name: "Wealth Ticket",
    adversary: "Don Corneo's Heartless",
    min: 48,
    max: 73,
    subTable: null,
  },
  {
    name: "Trinity Ticket",
    adversary: "Trinity Armor",
    min: 74,
    max: 100,
    subTable: "mirage-summons",
  },
];

export const MIRAGE_FIGHT_TICKETS = { ROUTE, TITLE, KEYS, LIST };
