import { useNavigate } from "react-router";
import { useDecksLS } from "../hooks/useDecksLS";
import { NavNoActions } from "../navigation/navNoActions";

export function MyDecks() {
  const { decks } = useDecksLS();
  const navigate = useNavigate();

  return (
    <div className="content-horizontal">
      <h1 className="page-title">My Decks</h1>
      <NavNoActions />
      {decks.map((deck) => (
        <button
          key={deck.id}
          onClick={() => navigate(`/mirage-masters/decks/${deck.id}`)}
        >
          {deck.name}
        </button>
      ))}
      <button
        className={"btn-empty"}
        onClick={() => navigate("/mirage-masters/decks/new-deck")}
      >
        Add New Deck
      </button>
    </div>
  );
}
