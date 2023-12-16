const TITLE = "Mirage Style Challenges";

const ROUTE = "challenges";

const KEYS = [
  {
    key: "name",
    label: null,
    class: "list-basic",
  },
  {
    key: "description",
    label: null,
    class: "list-description",
  },
];

const LIST = [
  {
    name: "Break It Down",
    description: "+2 points. Use Break Time 3 turns in a row. You maniac.",
    min: 1,
    max: 1,
    subTable: null,
  },
  {
    name: "Close Call",
    description: "Successfully Dodge Roll 2 fatal blows.",
    min: 2,
    max: 2,
    subTable: null,
  },
  {
    name: "Command Deck Commando",
    description: "+2 points. Don't use any basic attacks for the whole fight.",
    min: 3,
    max: 3,
    subTable: null,
  },
  {
    name: "Critical Moment",
    description: "Get 2 consecutive crits in 1 turn.",
    min: 4,
    max: 4,
    subTable: null,
  },
  {
    name: "Back to Basics",
    description: "Use nothing but basic attacks for 3 turns consecutively.",
    min: 5,
    max: 5,
    subTable: null,
  },
  {
    name: "Combo Up!",
    description:
      "Chain 6 successful consecutive attacks. These can be basic attacks or abilities but they must be consecutive.",
    min: 6,
    max: 6,
    subTable: null,
  },
  {
    name: "MP Miser",
    description: "MP Recharge less than 4 times in a fight.",
    min: 7,
    max: 7,
    subTable: null,
  },
  {
    name: "School of Hard Knocks",
    description:
      "Heal yourself from critical (< 20% HP) to stable (>75% HP) 2 or more times.",
    min: 8,
    max: 8,
    subTable: null,
  },
  {
    name: "Everyman",
    description:
      "Heal an ally, deal combat damage, inflict a debuff or ailment, give a buff to an ally, and perform a guard, cover ally or dodge roll action all in the span of 3 turns.",
    min: 9,
    max: 9,
    subTable: null,
  },
  {
    name: "Shots Fired",
    description:
      "Score a successful basic attack on your first combat turn. if you go first, +2 style points instead of 1.",
    min: 10,
    max: 10,
    subTable: null,
  },
  {
    name: "Sucker Punch",
    description:
      "Deal 40 damage with a single damage roll before adding stat modifiers, multipliers, or reductions.",
    min: 11,
    max: 11,
    subTable: null,
  },
  {
    name: "No Guard",
    description: "Finish a fight without guarding or covering allies.",
    min: 12,
    max: 12,
    subTable: null,
  },
  {
    name: "Steelguard",
    description: "Guard 3 consecutive turns in a row.",
    min: 13,
    max: 13,
    subTable: null,
  },
  {
    name: "Unprepared",
    description:
      "+2 points. Lose access to all passives for the duration of the fight.",
    min: 14,
    max: 14,
    subTable: null,
  },
  {
    name: "Spread Thin",
    description:
      "For three turns, use only MP abilities. Do not spend more than 30MP per turn.",
    min: 15,
    max: 15,
    subTable: null,
  },
  {
    name: "Dodgeball!",
    description:
      "Don't get hit by an attack for 2 consecutive turns. Ailments don't count.",
    min: 16,
    max: 16,
    subTable: null,
  },
  {
    name: "Struggle!",
    description:
      "Gain either a Struggle Wand, Struggle Club, or Struggle Bat. The Struggle Wand has MAG 2, PWR 0, the Struggle Club has PWR 2, MAG 0, and the Struggle Bat has MAG 1, PWR 1. This is the only weapon you can use for the duration of the fight.",
    min: 17,
    max: 17,
    subTable: null,
  },
  {
    name: "Focus!",
    description:
      "Never let your Focus Gauge max out for the duration of the fight.",
    min: 18,
    max: 18,
    subTable: null,
  },
  {
    name: "Elemental Mastery",
    description:
      "Deal the same type of elemental damage at least once per turn for 3 consecutive turns.",
    min: 19,
    max: 19,
    subTable: null,
  },
];

export const MIRAGE_CHALLENGES = { ROUTE, TITLE, KEYS, LIST };
