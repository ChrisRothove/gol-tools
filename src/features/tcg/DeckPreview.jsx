import { useParams } from "react-router";
import { NavNoActions } from "../navigation/navNoActions";
import { useDeckPreview } from "../hooks/useDeckPreview";
import { DeckStats } from "./list-items/DeckStats";
import Person from "@mui/icons-material/Person";
import Diamond from "@mui/icons-material/Diamond";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import { ChampCardBlock, EditorComCard } from "./DeckEditor";
import { AccessoryPreviewBlock } from "./list-items/AccessoryPreviewBlock";
import { NO_FUNC } from "../../../constants";

export function DeckPreview() {
  const { deckName } = useParams();
  const { deck, newName, setNewName, getTotalCP, getTotalCPUsed, submitDeck } =
    useDeckPreview(deckName);

  return (
    <div className="content-horizontal">
      <h1 className="page-title">{deck.name}</h1>
      <NavNoActions />
      <input
        type="text"
        name="deck-name"
        className="deck-name-input"
        value={newName}
        onInput={(e) => setNewName(e)}
      />
      <button onClick={submitDeck}>Choose This Deck</button>
      <DeckStats
        deck={deck}
        getTotalCP={getTotalCP}
        getTotalCPUsed={getTotalCPUsed}
      />

      <h3 className="editor-section-header">
        <Person /> Champions
      </h3>
      <ChampCardBlock deck={deck} onButtonClick={NO_FUNC} />

      <h3 className="editor-section-header">
        <Diamond /> Accessories
      </h3>
      <AccessoryPreviewBlock deck={deck} onButtonClick={NO_FUNC} />

      <h3 className="editor-section-header">
        <AutoAwesome /> Commands
      </h3>
      <div className="card-view">
        {deck.commands?.map((card, idx) => {
          return (
            <EditorComCard
              key={card.id + idx}
              card={card}
              onClickFn={NO_FUNC}
            />
          );
        })}
      </div>
    </div>
  );
}
