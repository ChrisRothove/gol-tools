const DECKS_LS_KEY = "decks";
const EMPTY_SINGLE_DECK = {
  name: "My First Deck",
  champions: [],
  accessories: [],
  commands: [],
};

export const useDecksLS = () => {
  const decksFromLS = localStorage.getItem(DECKS_LS_KEY);

  if (!decksFromLS) {
    localStorage.setItem(DECKS_LS_KEY, JSON.stringify([EMPTY_SINGLE_DECK]));
  }

  const decks = JSON.parse(decksFromLS);

  return {
    decks,
  };
};
