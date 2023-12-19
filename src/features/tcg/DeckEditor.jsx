import { useParams } from "react-router";
import { useDecksLS } from "../hooks/useDecksLS";
import { useState } from "react";
import { ChampCard, ComCard } from "./CardList";
import { NavNoActions } from "../navigation/navNoActions";
import PersonIcon from "@mui/icons-material/Person";
import DiamondIcon from "@mui/icons-material/Diamond";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StyleIcon from "@mui/icons-material/Style";
import { useDeckEditor } from "../hooks/useDeckEditor";
import { useCardListDrawer } from "../hooks/useCardListDrawer";
import { Drawer } from "@mui/material";

const EditorChampCard = ({ card, onClickFn = () => {}, listKey = "champ" }) => (
  <button
    className={`card-slot ${card ? "" : "card-slot-empty"}`}
    onClick={(e) => onClickFn(listKey, card, e)}
  >
    {card ? <ChampCard card={card} size={"sm"} showCount /> : "+"}
  </button>
);

const EditorComCard = ({ card, onClickFn = () => {} }) => (
  <button
    className={`card-slot ${card ? "" : "card-slot-empty"}`}
    onClick={(e) => onClickFn("com", card, e)}
  >
    {card ? <ComCard card={card} size={"sm"} showCount /> : "+"}
  </button>
);

const ChampCardBlock = ({ onButtonClick, deck = {} }) => (
  <div className="card-view">
    <EditorChampCard card={deck.champions?.[0]} onClickFn={onButtonClick} />
    <EditorChampCard card={deck.champions?.[1]} onClickFn={onButtonClick} />
    <EditorChampCard card={deck.champions?.[2]} onClickFn={onButtonClick} />
  </div>
);

export function DeckEditor() {
  const { deckId } = useParams();

  const {
    deck,
    setName,
    submitDeck,
    getTotalCP,
    getTotalCPUsed,
    tryAddToDeck,
  } = useDeckEditor(deckId);

  const {
    selectedCard,
    onButtonClick,
    isOpen,
    onClose,
    cardType,
    optionsFromCollection,
  } = useCardListDrawer();

  return (
    <div className="content-hoizontal">
      <h1 className="page-title">Deck Builder</h1>
      <NavNoActions />
      <div className="deck-name-input-block">
        <input
          type="text"
          name="deck-name"
          className="deck-name-input"
          value={deck.name}
          onInput={(e) => setName(e)}
        />
        <button onClick={submitDeck}>Save Deck</button>
      </div>
      <div className="deck-stats">
        <div>
          <StyleIcon /> {getTotalCPUsed()}/{getTotalCP()}
        </div>
        <div>
          <PersonIcon /> {deck.champions?.length}
        </div>
        <div>
          <DiamondIcon /> {deck.accessories?.length}{" "}
        </div>
        <div>
          <AutoAwesomeIcon /> {deck.commands?.length}{" "}
        </div>
      </div>

      <h3 className="editor-section-header">
        <PersonIcon /> Champions
      </h3>
      <ChampCardBlock deck={deck} onButtonClick={onButtonClick} />

      <h3 className="editor-section-header">
        <DiamondIcon /> Accessories
      </h3>
      <div className="card-view">
        <EditorChampCard
          card={deck.accessories?.[0]}
          onClickFn={onButtonClick}
        />
        <EditorChampCard
          card={deck.accessories?.[1]}
          onClickFn={onButtonClick}
        />
        <EditorChampCard
          card={deck.accessories?.[2]}
          onClickFn={onButtonClick}
        />
      </div>

      <h3 className="editor-section-header">
        <AutoAwesomeIcon /> Commands
      </h3>
      <div className="card-view">
        {deck.commands?.map((card) => {
          return (
            <EditorComCard
              key={card.name}
              card={card}
              onClickFn={onButtonClick}
            />
          );
        })}
        <EditorComCard card={null} onClickFn={onButtonClick} />
      </div>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <div className="card-view">
          {cardType === "champ" && (
            <ChampCardBlock deck={deck} onButtonClick={() => {}} />
          )}
          <hr />
          {cardType === "com" ? (
            <>
              {optionsFromCollection.map((card) => (
                <EditorComCard key={card.id} card={card} />
              ))}
            </>
          ) : (
            <>
              {optionsFromCollection.map((card) => (
                <EditorChampCard
                  key={card.id}
                  card={card}
                  onClickFn={tryAddToDeck}
                  listKey={card.atr === "acc" ? "acc" : "champ"}
                />
              ))}
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
