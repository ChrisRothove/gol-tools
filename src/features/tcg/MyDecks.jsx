import { useNavigate } from "react-router";
import { NavNoActions } from "../navigation/navNoActions";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function MyDecks() {
  const {
    loginData: { decks },
  } = useContext(LoginContext);

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
