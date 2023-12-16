const TITLE = "Mirage Boss Style Challenges";

const ROUTE = "boss-challenges";

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
    name: "War Cleric",
    description: "Spend 4 consecutive actions healing allies.",
    min: 1,
    max: 1,
    subTable: null,
  },
  {
    name: "Boss-Specific Challenge",
    description: (
      <>
        Iron Imprisoner: Stop Holding Back!
        <br />
        Make the Iron Imprisoner go to the next phase early, twice.
        <br />
        or;
        <br />
        Mimic Master: I Found You, Faker!
        <br />
        Against the Mimic Master, only attack Fakes of you while there is at
        least one present.
      </>
    ),
    min: 2,
    max: 2,
    subTable: null,
  },
];

export const MIRAGE_BOSS_CHALLENGES = { ROUTE, TITLE, KEYS, LIST };
